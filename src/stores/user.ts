// 用户表仓库 -- 用于存储所有的用户信息

import { defineStore } from 'pinia'
import { verifyUser } from "./rightsVerification"
import { result } from "./type"
import { navigation } from "@/router/index"

export interface User {
    id: number

    username: string

    password: string

    email: string

    sex?: number //性别 0-男 1-女

    score?: number

    place?: string

    age?: number

    InterestList?: number[] //我的关注列表

    fansList?: number[] //w粉丝列表（我被关注）

    /**
     *  哈希表：
     *  键是：作品id
     *  值：所有点赞的用户
     */
    beProudLike?: Map<number, number[]>  //获得的赞和收藏

    beProudCon?: Map<number, number[]>  //获得的赞和收藏

    likeList?: number[] //点赞列表

    collectList?: number[]//收藏列表

    resume?: string // 简介

    noteList?: number[] //笔记列表

    /**
     * 背景图片，实际上存储的是一个图片库中数据id，
     * 保证说不会所有的图片（大数据）的都加载到内存中
     * 按需从IndexDb中加载（索引）
     */
    backgroundImg?: number

    /**
     * 头像图片，和背景图片同理
     */
    headerImg?: number
}

export type beProudType = {
    who: number //谁给我点的
    noteId: number //作品id
}


export const userTableStore = defineStore('userTable', {
    state: () => ({
        userTable: [] as User[],
        nextId: 1, //自增id的起始值
        currentUserIndex: -1
    }),

    actions: {
        register(userOmitId: Omit<User, 'id' | 'score'>) {
            //判断用户名是否重复
            if (this.userTable.find(user => user.username === userOmitId.username)) {
                throw new Error('用户名已存在')
            }

            //添加用户-实现自动增加的效果 
            let user = { id: this.nextId++, score: 0, ...userOmitId }
            this.userTable.push(user)
        },
        login(username: string, password: string) {
            let user = this.userTable.find(user => user.username === username && user.password === password)
            if (!user) {
                throw new Error('用户名或密码错误')
            }
            this.currentUserIndex = this.userTable.indexOf(user)
            return user
        },

        /**
         * @returns 
         * 问题：这里返回的数据是否也是相应式数据
         * 也就是说如果返回的数据在组件中被修改了，store中的数据也发生了变化
         * 
         */
        getCurrentUserMessage(): result<User> | null {
            const result = {} as result<User>;

            let { id } = verifyUser()
            if (id == -1) return {code: -1, message: "未登录", data: {} as User};

            let user = this.userTable.find(user => user.id === id) as User;
            result.data = user;
            return result;

            //注意这里要从userTableStore中获取用户信息，因为cookie中的某些信息可能被修改，比如用户名等等
        },

        /**
         * 修改信息 
         * 传入一个用户信息对象
         * 匹配到userTable中的哪一条数据，然后修改
         */
        updataUserMessage(user: User): void {
            let index = this.userTable.findIndex(item => item.id === user.id);
            if (index === -1) {
                throw new Error("用户不存在");
            }
            this.userTable[index] = user;
        },

        /**
         * 
         * @param id 
         */
        getUserById(id: number): User | null {
            return this.userTable.find(user => user.id === id) || null;
        },

        /**
         * 点赞和收藏功能
         * 点赞
         * （1）如果点的是本人发布的作品，不处理
         * （2）如果点的是其他人发布的作品
         *      本人：
         *      1. likeList点赞列表中添加作品id
         *      
         *      对于作品的发布人：指的是该人的所有作品收到的点赞和收藏
         *      1. beProud列表中添加点赞人id和作品id
         * 
         *      对于该笔记：
         *          是否有必要添加一个点赞
         *       这里有两个处理方案：
         *          （1）往IndexDB数据库中修改likeNum（动IndexDB）
         *          （2）从该用户中beProud进行统计该篇笔记的获得的赞（不动IndexDB）
         *      选第二种吧，因为点赞很频繁的
         * 添加的时候点赞过了的作品不进行点击了
         * 
         * 收藏同理   
         */
        likeAndCollect(me: number, who: number, noteId: number, type: "like" | "collect"): void {
            let meUser = this.getUserById(me) as User;
            let whoUser = this.getUserById(who) as User;
            console.log(meUser, whoUser);

            if (me == who) {
                console.log('不要给自己点赞哦');
                new Error("不要给自己点赞哦")
                return;
            }

            if (!meUser.likeList) meUser.likeList = [];
            if (!meUser.collectList) meUser.collectList = [];

            if (type === "like") {
                //已经点赞过了，取消点赞
                if (this.isLikeOrColl(meUser.likeList!, noteId)) {
                    console.log('已经点赞了，取消点赞');
                    meUser.likeList = meUser.likeList?.filter(item => item !== noteId);
                    let oldArray = whoUser.beProudLike?.get(noteId);
                    if (oldArray) {
                        whoUser.beProudLike?.set(noteId, oldArray.filter(item => item !== me))
                    }
                }
                else {
                    console.log('没有点赞，点赞');
                    meUser.likeList!.push(noteId);

                    if (!whoUser.beProudLike) whoUser.beProudLike = new Map<number, number[]>();
                    if (!(whoUser.beProudLike instanceof Map)) {
                        whoUser.beProudLike = new Map<number, number[]>();
                    }

                    if (!whoUser.beProudLike.has(noteId)) {
                        whoUser.beProudLike.set(noteId, []);
                    }
                    whoUser.beProudLike.get(noteId)!.push(me)

                }
            } else {
                //已经收藏过了，取消收藏
                if (this.isLikeOrColl(meUser.collectList!, noteId)) {
                    meUser.collectList = meUser.collectList?.filter(item => item !== noteId);
                    let oldArray = whoUser.beProudCon?.get(noteId);
                    if (oldArray) {
                        whoUser.beProudCon?.set(noteId, oldArray.filter(item => item !== me))
                    }
                }
                else {
                    meUser.collectList?.push(noteId);
                    if (!whoUser.beProudCon) whoUser.beProudCon = new Map<number, number[]>();
                    if (!whoUser.beProudCon.has(noteId)) {
                        whoUser.beProudCon.set(noteId, []);
                    }
                    whoUser.beProudCon.get(noteId)!.push(me)
                }
            }
        },

        /**
         * 是否点赞或者收藏过
         * @param list 
         * @param noteId 
         * @returns 
         */
        isLikeOrColl(list: number[], noteId: number) {
            return list.includes(noteId)
        },

        /**
         * 实现关注功能
         * @param meId 
         * @param whoId 
         */
        follow(meId: number, whoId: number) {
            let meUser = this.getUserById(meId) as User;
            let whoUser = this.getUserById(whoId) as User;
            if (!meUser.InterestList) meUser.InterestList = [];
            if (!whoUser.fansList) whoUser.fansList = [];

            if (meUser.InterestList.includes(whoId)) {
                meUser.InterestList = meUser.InterestList.filter(item => item !== whoId);
                whoUser.fansList = whoUser.fansList.filter(item => item !== meId);
            } else {
                meUser.InterestList.push(whoId);
                whoUser.fansList.push(meId);
            }
        },

        /**
         * 获取我的关注列表
         */
        getInterestList(id: number): User[] {
            let meUser = this.getUserById(id) as User;
            if (!meUser.InterestList) return [];
            return meUser.InterestList.map(id => this.getUserById(id) as User)
        },

        /**
         * 获取我的粉丝列表
         */
        getFansList(id: number): User[] {
            let meUser = this.getUserById(id) as User;
            if (!meUser.fansList) return [];
            return meUser.fansList.map(id => this.getUserById(id) as User)
        },


        /**
         * 随机放回一定数量的用户（没有关注过的）（除自己之外）
         */
        getRandomUser(num: number): Omit<User, 'password'>[] {

            let { data, code} = this.getCurrentUserMessage() as result<User>
            if (code === -1) {
                navigation('login')
                return [];
            }
            
            let users = this.userTable.filter(user => user.id !== data.id && !data.InterestList?.includes(user.id));

            let result = [];
            for (let i = 0; i < num && i < users.length; i++) {
                let index = Math.floor(Math.random() * users.length);
                result.push(users[index]);
                users.splice(index, 1);
            }
            console.log(result);

            return result;
        }
    }
})



