import layout from '@/layout/index.vue'
import login from '@/login.vue'
import register from '@/register.vue'
import home from "@/views/index/index.vue"
import profile from "@/views/user/profile.vue"
import chat from "@/views/chat/index.vue"
import type { RouteRecordRaw } from 'vue-router'


export const routes: RouteRecordRaw[] = [
    { 
        path: '/', 
        component: layout ,
        children:[
            {
                path: 'home',
                component: home,
                name: 'home',
                //传递一个数据
                meta: { modulePage: true}
            },
            { 
                path: 'profile',
                component: profile,
                name: 'profile',
                meta: { modulePage: true },
            },
            { 
                path: 'pageMe',
                component: () => import('@/views/user/pages/me.vue'),
                name: 'profile_pageMe',
                meta: { modulePage: false, showName: '编辑资料',},
            },
            { 
                path: 'chat',
                component: chat,
                name: 'chat',
                meta: { modulePage: true },
            },
            { 
                path: 'chatDetail',
                component: () => import('@/views/chat/pages/chatDetail.vue'),
                name: 'chatDetail',
                meta: { modulePage: false, showName: '聊天详情'},
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
 