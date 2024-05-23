// 用户表仓库 -- 用于存储所有的用户信息

import { defineStore } from 'pinia'
import {verifyUser} from "./rightsVerification"
import {result} from "./type"

export interface User {
    id: number
    username: string
    password: string
    email: string
    score?: number
    place?: string
    age?: number
    resume?: string // 简介
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
         * 问题：这里返回的数据是否也是相应式数据？
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
        }
    }
})



