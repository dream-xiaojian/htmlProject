import { createWebHistory, createRouter } from 'vue-router'
import {routes} from "./router"

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    //savedPosition，当在浏览器的历史记录中前进或后退时，这将是一个包含 x 和 y 属性的对象，表示滚动的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export function navigation(pathName:string, query?:number) {
  if (query != undefined)  router.push({name: pathName, query: {id: query}})
  else router.push({name: pathName})
}
