/**
 * 使用IndexedDB存储图片类型的数据
 */

import {blogSharesTable} from "./type"

//后期修改成单例模式
export class IndexDB {
    //数据库名称
    private dbName: string;
    //数据库版本
    private version: number;
    //数据库
    private db!: IDBDatabase ;

    constructor(dbName: string, version: number) {
        this.dbName = dbName;
        this.version = version;
        // this.openDB();
    }

    openDB() {
        const request = indexedDB.open(this.dbName, this.version);
        request.onerror = (event) => new Error('Database error: ' + event.target!);
        request.onsuccess = () => {
          this.db = request.result;
        };
        request.onupgradeneeded = () => {
            this.db = request.result;

            //建立表 图片表  blog分享表
            if (this.db.objectStoreNames.contains('images_table')) {
                const store = this.db.createObjectStore('images_table', { keyPath: 'id', autoIncrement: true });
                store.createIndex('id', 'id'); //建立索引
            }

            // 创建 blogShares 表
            if (!this.db.objectStoreNames.contains('blogShares')) {
                const blogShareStore = this.db.createObjectStore('blogShares', { keyPath: 'id', autoIncrement: true });
                blogShareStore.createIndex('id', 'id'); //建立索引
                blogShareStore.createIndex('title', 'title', { unique: false });
            }
        };
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

    //图片表的操作
    async storeImage(file: File) {
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

    
    async getImage(id: number) {
        console.log('获取图片');
        return new Promise<string>((resolve, reject) => {
        const transaction = this.db.transaction('images_table', 'readonly');
          const store = transaction.objectStore('images_table');
          const index = store.index('id');
          const request = index.get(id);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => resolve(request.result?.dataUrl);
        });
    }

    //blog分享表的操作
    async storeBlog(blog: blogSharesTable) {
        return new Promise<number>((resolve, reject) => {
          const transaction = this.db.transaction('blogShares', 'readwrite');
          const store = transaction.objectStore('blogShares');
          //添加一条数据
          const request = store.add({ ...blog });
          request.onerror = () => reject(request.error);
          request.onsuccess = () => resolve(request.result as number);
        });
    }

    async getBlog(id: number) {
        return new Promise<string>((resolve, reject) => {
        const transaction = this.db.transaction('blogShares', 'readonly');
          const store = transaction.objectStore('blogShares');
          const index = store.index('id');
          const request = index.get(id);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => resolve(request.result);
        });
    }
}

