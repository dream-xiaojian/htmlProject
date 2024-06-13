// 用户表仓库 -- 用于存储所有的用户信息

import { defineStore } from 'pinia'

export const settingsStore = defineStore('settingsStore', {
    state: () => ({
        firstCome: false, //是不是第一次到来
        theme: 'light', //默认是Light
        persistance:true,
    }),
    actions: {
        setFirstCome(type: boolean) {
            this.firstCome = type
        },
        changeMode() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        }
    }
})



