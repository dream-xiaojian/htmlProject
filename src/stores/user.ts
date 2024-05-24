// 用户表仓库 -- 用于存储所有的用户信息

import { defineStore } from 'pinia'
import {verifyUser} from "./rightsVerification"
import {result} from "./type"

export interface User {
    id: number
    username: string
    password: string
    email: string
    sex?: number //性别 0-男 1-女
    score?: number
    place?: string
    age?: number

    
    InterestList?: string[] //关注列表
    fansList?: string[] //粉丝列表
    beProud?: string//获得的赞和收藏
    resume?: string // 简介
    
    /**
     * 背景图片，实际上存储的是一个图片库中数据id，
     * 保证说不会所有的图片（大数据）的都加载到内存中
     * 按需从IndexDb中加载（索引）
     */
    backgroundImg?: string

    /**
     * 头像图片，和背景图片同理
     */
    headerImg?: string 
}


export const userTableStore = defineStore('userTable', {
    state: () => ({
        userTable: [] as User[],
        nextId : 1 //自增id的起始值
    }),

    actions: {
        register(userOmitId: Omit<User, 'id' | 'score'>) {
            //判断用户名是否重复
            if (this.userTable.find(user => user.username === userOmitId.username)) {
                throw new Error('用户名已存在')
            }

            //添加用户-实现自动增加的效果 
            let user = { id: this.nextId++, score:0, ...userOmitId }
            this.userTable.push(user)
        },
        login(username: string, password: string) {
            let user = this.userTable.find(user => user.username === username && user.password === password)
            if (!user) {
                throw new Error('用户名或密码错误')
            }
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
            try {
                let {id} = verifyUser()
                //注意这里要从userTableStore中获取用户信息，因为cookie中的某些信息可能被修改，比如用户名等等
                let user = this.userTable.find(user => user.id === id) as User;
                result.data = user; 
            } catch (error) {
                result.code = -1;
                result.message = "用户未登录";
            }
            return result;
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
        }
    }
})



