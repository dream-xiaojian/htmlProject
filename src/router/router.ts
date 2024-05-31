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
        redirect: '/home/find',
        children:[
            {
                path: 'home',
                component: home,
                name: 'home',
                //传递一个数据
                meta: { modulePage: true},
                children:[
                    {
                        path: 'find',
                        component: () => import('@/views/index/pages/findPage.vue'),
                        name: 'findHomePage',
                        meta: { modulePage: true, showName: '发现页'},
                    }
                ]
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
                meta: { modulePage: false, showName: 'AI助手'},
            },
            { 
                path: 'blogDetail',
                component: () => import('@/views/index/pages/blogDetail.vue'),
                name: 'blogDetail',
                meta: { modulePage: false, isBlog: true, showName: '详情'},
            },
            { 
                path: 'createPage',
                component: () => import('@/views/creation/index.vue'),
                name: 'createPage',
                meta: { modulePage: false, showName: '笔记编辑'},
            },
            { 
                path: 'messageIndex',
                component: () => import('@/views/message/index.vue'),
                name: 'messageIndex',
                meta: { modulePage: true},
            },
            { 
                path: 'chatPage',
                component: () => import('@/views/message/chatPage.vue'),
                name: 'chatPage',
                meta: { modulePage: false, hiddenTop: true},
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
 