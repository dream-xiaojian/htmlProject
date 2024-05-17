import { createWebHistory, createRouter } from 'vue-router'

import layout from '../layout/index.vue'
import home from "../home.vue"

const routes = [
    { 
        path: '/', 
        component: layout ,
        children:[
            {
                path: 'home',
                component: home,
            },
        ]
    },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
