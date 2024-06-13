import { createApp } from 'vue'
import {router} from "./router/index"
import App from './App.vue'
import { createPinia } from 'pinia'
import {persistedPlugin} from "./stores/persistedstate"
import {IndexDB} from "./stores/index"
import './assets/tailwindcss.css'
import './style.css'

const pinia = createPinia()
pinia.use(persistedPlugin)

const db = new IndexDB('coffeeCatDatabase', 4);
await db.openDB();

const app = createApp(App)
app.use(pinia)
// 在根组件的 setup 函数中提供 db 实例
app.provide('db', db);
app.use(router)
app.mount('#app')
