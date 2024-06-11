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
                    },
                    {
                        path: 'follow',
                        component: () => import('@/views/index/pages/followPage.vue'),
                        name: 'findFollowPage',
                        meta: { modulePage: true, showName: '关注页'},
                    },
                    {
                        path: 'local',
                        component: () => import('@/views/index/pages/localPage.vue'),
                        name: 'findLocalPage',
                        meta: { modulePage: true, showName: '附近页'},
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
                meta: { modulePage: false, isBlog: true, showName: '详情', hiddenTop: true},
            },
            { 
                path: 'createPage',
                component: () => import('@/views/creation/index.vue'),
                name: 'createPage',
                meta: { modulePage: false, showName: '笔记创建'},
            },
            { 
                path: 'changeNote',
                component: () => import('@/views/user/components/changeMessage.vue'),
                name: 'changeNote',
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
            { 
                path: 'other',
                component: () => import('@/views/otherProfile/index.vue'),
                name: 'otherPage',
                meta: { modulePage: false, hiddenTop: true},
            },
            { 
                path: 'search',
                component: () => import('@/views/search/searchPage.vue'),
                name: 'searchPage',
                meta: { modulePage: false, hiddenTop: true},
            },
            { 
                path: 'searchResult',
                component: () => import('@/views/search/searchResult.vue'),
                name: 'searchResult',
                meta: { modulePage: false, hiddenTop: true},
            },
            { 
                path: 'history',
                component: () => import('@/views/user/pages/history.vue'),
                name: 'history',
                meta: { modulePage: false, hiddenTop: true},
            },
            { 
                path: 'scoreManage',
                component: () => import('@/views/score/index.vue'),
                name: 'scoreManage',
                meta: { modulePage: false, hiddenTop: true, showName: '我的账户'},
            },
            { 
                path: 'reCharge',
                component: () => import('@/views/score/reCharge.vue'),
                name: 'reCharge',
                meta: { modulePage: false, hiddenTop: true, showName: '充值'},
            }
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
 