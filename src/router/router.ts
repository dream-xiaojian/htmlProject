import layout from '@/layout/index.vue'
import login from '@/login.vue'
import register from '@/register.vue'
import home from "@/views/index/index.vue"
import profile from "@/views/user/profile.vue"
import type { RouteRecordRaw } from 'vue-router'


export const routes: RouteRecordRaw[] = [
    { 
        path: '/', 
        component: layout ,
        children:[
            { //是模块页面，不进行动画加载页面
                path: 'home',
                component: home,
                name: 'home',
                //传递一个数据
                meta: { modulePage: true}
            },
            { //是模块页面，不进行动画加载页面，只有底部导航栏页面
                path: 'profile',
                component: profile,
                name: 'profile',
                meta: { modulePage: true },
            },
            { //不是模块页面，以从右向左进行覆盖动画方式加载页面，只有顶部退回栏
                path: 'pageMe',
                component: () => import('@/views/user/pages/me.vue'),
                name: 'profile_pageMe',
                meta: { modulePage: false },
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
 