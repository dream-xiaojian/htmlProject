// 用户表仓库 -- 用于存储所有的用户信息

import { defineStore } from 'pinia'

export const settingsStore = defineStore('settingsStore', {
    state: () => ({
        firstCome: true,
    }),

    actions: {
        setFirstCome(type: boolean) {
            this.firstCome = type
        }
    }
})



