import { createWebHistory, createRouter } from 'vue-router'

import layout from '@/layout/index.vue'
import home from "@/home.vue"
import login from '@/user/login.vue'
import register from '@/user/register.vue'
import profile from "@/user/profile.vue"

const routes = [
    { 
        path: '/', 
        component: layout ,
        children:[
            {
                path: 'home',
                component: home,
                name: 'home'
            },
            {
                path: 'profile',
                component: profile,
                name: 'profile'
            },
        ]
    },
    { 
        path: '/login', 
        component: login,
        name: 'login',
    },
    { 
        path: '/register', 
        component: register,
        name: 'register',
    }

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
