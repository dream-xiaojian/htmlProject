/**
 * 使用IndexedDB存储图片类型的数据
 */

import { blogSharesTable } from "./type"
import { ChatTable } from "./type"


//后期修改成单例模式
export class IndexDB {
  //数据库名称
  private dbName: string;
  //数据库版本
  private version: number;
  //数据库
  private db!: IDBDatabase;

  constructor(dbName: string, version: number) {
    this.dbName = dbName;
    this.version = version;
    // this.openDB();
  }

  openDB() {
    return new Promise<void>((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = (event) => new Error('Database error: ' + event.target!);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      request.onupgradeneeded = () => {
        this.db = request.result;
        resolve();
        //建立表 图片表  blog分享表
        if (!this.db.objectStoreNames.contains('images_table')) {
          const store = this.db.createObjectStore('images_table', { keyPath: 'id', autoIncrement: true });
          store.createIndex('id', 'id'); //建立索引
        }

        // 创建 blogShares 表
        if (!this.db.objectStoreNames.contains('blogShares')) {
          const blogShareStore = this.db.createObjectStore('blogShares', { keyPath: 'id', autoIncrement: true });
          blogShareStore.createIndex('id', 'id', { unique: true }); //建立索引
          blogShareStore.createIndex('title', 'title', { unique: false });
          blogShareStore.createIndex('author', 'author', { unique: false });
          blogShareStore.createIndex('visible', 'visible', { unique: false });

          //检索用的索引
          blogShareStore.createIndex('titleAndVisibility', ['title', 'visible']);
          //个人数据的索引
          blogShareStore.createIndex('authorAndVisibility', ['author', 'visible']);

        }

        //聊天信息表
        if (!this.db.objectStoreNames.contains('chatTable')) {
          const blogShareStore = this.db.createObjectStore('chatTable', { keyPath: 'id', autoIncrement: true });
          blogShareStore.createIndex('id', 'id', { unique: true }); //建立索引

        }
      };
    });

  }

  //图片存储
  async readImage(file: File) {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  //图片删除
  async deleteImage(id: number) {
    return new Promise<void>((resolve, reject) => {
      const transaction = this.db.transaction('images_table', 'readwrite');
      const store = transaction.objectStore('images_table');
      const request = store.delete(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  /**
   * 
   * @param file 
   * @returns id 这个表项的唯一的id，将放在用户数据中
   * 这里还要做一步，如果这个用户之前上传过图片，那么就要删除之前的图片
   */
  async storeImage(file: File, imageId: number | null = null) {
    console.log(file, imageId);

    if (imageId != null) { //不为空，删除之前的图片
      await this.deleteImage(imageId);
    }


    const dataUrl = await this.readImage(file);
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db.transaction('images_table', 'readwrite');
      const store = transaction.objectStore('images_table');
      //添加一条数据
      const request = store.add({ dataUrl });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  /**
   * 
   * @param id 
   * @returns 
   */
  async getImage(id: number) {
    return new Promise<string>((resolve, reject) => {
      const transaction = this.db.transaction('images_table', 'readonly');
      const store = transaction.objectStore('images_table');
      const index = store.index('id');
      const request = index.get(id);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result?.dataUrl);
    });
  }

  //获取多个id下的note数据
  async getImagesByIds(ids: number[]) {
    return Promise.all(ids.map(id => this.getImage(id)));
  }

  //blog分享表的操作
  async storeBlog(note: blogSharesTable) {
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readwrite');
      const store = transaction.objectStore('blogShares');
      //添加一条数据
      const request = store.add(JSON.parse(JSON.stringify(note)));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  //搜索操作
  async searchNote(title: string, visible: boolean, page: number, pageSize: number) {
    return new Promise<blogSharesTable[]>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readonly');
      const store = transaction.objectStore('blogShares');
      const index = store.index('titleAndVisibility');
      const request = index.openCursor(IDBKeyRange.bound([title, visible ? 1 : 0], [title + '\uffff', visible ? 1 : 0]));
      
      const results: blogSharesTable[] = [];
      let count = 0;

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          if (count >= (page - 1) * pageSize && count < page * pageSize) {
            results.push(cursor.value);
          }
          count++; //所有的游标数
          if (count > page * pageSize) resolve(results);
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }

  //获取作者的blog
  async getMyNote(author: number, visible: boolean, page: number, pageSize: number) {
    return new Promise<blogSharesTable[]>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readonly');
      const store = transaction.objectStore('blogShares');
      const index = store.index('authorAndVisibility');
      const request = index.openCursor(IDBKeyRange.only([author, visible ? 1 : 2]));

      const results: blogSharesTable[] = [];
      let count = 0;

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          if (count >= (page - 1) * pageSize && count < page * pageSize) {
            results.push(cursor.value);
          }
          count++; //所有的游标数
          if (count > page * pageSize) resolve(results);
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }

  // 按顺序获取分页下的note数据
  async getNoteByVisible(visible: boolean, page: number, pageSize: number) {
    return new Promise<blogSharesTable[]>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readonly');
      const store = transaction.objectStore('blogShares');
      const index = store.index('visible');
      const request = index.openCursor(IDBKeyRange.only(visible ? 1 : 0), 'prev');

      const results: blogSharesTable[] = [];
      let count = 0;

      request.onerror = () => reject(request.error);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          if (count >= (page - 1) * pageSize && count < page * pageSize) {
            results.push(cursor.value);
          }
          count++; //所有的游标数
          if (count > page * pageSize) resolve(results);
          cursor.continue();
        } else {
          resolve(results);
        }
      };
    });
  }

  //获取某个id下的note数据
  async getNoteById(id: string) {
    return new Promise<blogSharesTable>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readonly');
      const store = transaction.objectStore('blogShares');
      const index = store.index('id');
      const request = index.get(parseInt(id));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  //修改note信息 
  async updataNote(note: blogSharesTable) {
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db.transaction('blogShares', 'readwrite');
      const store = transaction.objectStore('blogShares');
      const request = store.put(JSON.parse(JSON.stringify(note)));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  //获取多个id下的note数据
  async getNotesByIds(ids: string[]) {
    return Promise.all(ids.map(id => this.getNoteById(id)));
  }

  //创建聊天信息
  async storeChat(chat: ChatTable) {
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db.transaction('chatTable', 'readwrite');
      const store = transaction.objectStore('chatTable');
      //添加一条数据
      const request = store.add(JSON.parse(JSON.stringify(chat)));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  //修改聊天信息 -- 在页面退回时进行
  async updataChat(chat: ChatTable) {
    return new Promise<number>((resolve, reject) => {
      const transaction = this.db.transaction('chatTable', 'readwrite');
      const store = transaction.objectStore('chatTable');
      const request = store.put(JSON.parse(JSON.stringify(chat)));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result as number);
    });
  }

  /**
   * 获取聊天信息
   * @param id 
   * @returns 
   */
  async getChatById(id: string) {
    return new Promise<ChatTable>((resolve, reject) => {
      const transaction = this.db.transaction('chatTable', 'readonly');
      const store = transaction.objectStore('chatTable');
      const index = store.index('id');
      const request = index.get(parseInt(id));
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

}

