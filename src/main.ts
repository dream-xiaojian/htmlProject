import { createApp } from 'vue'
import {router} from "./router/index"
import App from './App.vue'
import { createPinia } from 'pinia'
import {persistedPlugin} from "./stores/persistedstate"
import './assets/tailwindcss.css'
import './style.css'


const pinia = createPinia()
pinia.use(persistedPlugin)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
