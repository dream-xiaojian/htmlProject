<template >
    <div style="position: relative; width: 100vw; height: 100vh; overflow: hidden;" class="">
        <!-- 在非模块页面时，显示顶部的导航栏 -->

          <!-- <transition :name="transitionName"> -->
              <header v-show="!$route.meta.modulePage && $route.meta.hiddenTop != true" class=" text-xl flex items-center justify-between px-2 py-1">
                <span  @click="goBack"><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg></span>
                <span>{{ $route.meta.showName }}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 32 32"><path fill="black" d="M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"/></svg></span>
              </header>
          <!-- </transition> -->


        <router-view v-slot="{ Component, route}" >
          <!-- <transition :name="transitionName"> -->
            <!-- <keep-alive> -->
              <component :is="Component"/>
            <!-- </keep-alive> -->
          <!-- </transition> -->
        </router-view>
        
        <!-- 底部的菜单栏 -->
        <!-- <transition :name="transitionName"> -->
        <!-- <footer v-show="$route.meta.modulePage" class="fixed bottom-0 left-0 w-screen px-2 py-1 border-t-2 border-black-500 text-black bg-white z-40" >
          <div class="w-full h-full flex justify-around ">
              <div @touchstart="navigateTo(item.pathName, index)" class="flex flex-col justify-center items-center" v-for="(item, index) in menuList" :key="index">
                <span v-if="index == 2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.2em" height="3.2em" viewBox="0 0 24 24"><path fill="#ee5353" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/></svg>
                </span>
                <span v-if="index != 2" :class="{'text-black':tableIndex == index, 'text-gray-500':tableIndex != index}" class="py-2 text-lg font-bold " >{{ item.name }}</span>
              </div>
          </div>
        </footer> -->

        <footer class="fixed bottom-0 left-0 w-screen px-2 py-1 border-t-2 border-black-500 text-black bg-white z-40">
          <div class="px-7 bg-white shadow-lg rounded-2xl">
            <div class="flex">
                <div class="flex-1 group">
                    <span @touchstart="navigateTo('findHomePage')" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class=" flex flex-col items-center px-1 pt-1 pb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m7 7v-5h4v5zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586z"/></svg>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </span>
                </div>
                <div class="flex-1 group">
                    <span @touchstart="navigateTo('chat')" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14M7.383 17.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19"/><path d="m12.308 12l-1.461-4.521A.72.72 0 0 0 10.154 7a.72.72 0 0 0-.693.479L8 12m7-5v5m-6.462-1.5h3.231"/></g></svg>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </span>
                </div>
                <div class="flex-1 group">
                    <span @touchstart="navigateTo('createPage')" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#00bfec"/><g fill="#fff"><path d="M15.971 23.15c-3.957 0-7.176-3.199-7.176-7.13c0-3.932 3.22-7.13 7.176-7.13c3.957 0 7.176 3.198 7.176 7.13c0 3.931-3.219 7.13-7.176 7.13m0-12.864c-3.181 0-5.77 2.572-5.77 5.734c0 3.161 2.589 5.733 5.77 5.733c3.182 0 5.77-2.572 5.77-5.733c0-3.162-2.588-5.734-5.77-5.734m5.025-2.415a9.638 9.638 0 0 0-5.025-1.406a9.67 9.67 0 0 0-4.666 1.198l-.684-1.22a11.083 11.083 0 0 1 5.35-1.376c2.04 0 4.032.558 5.761 1.614zm2.095 16.51l-.909-1.067a9.519 9.519 0 0 0 3.405-7.294h1.406c0 3.226-1.422 6.273-3.902 8.36zm-7.12 2.59c-2.557 0-5.049-.89-7.016-2.505l.896-1.076a9.667 9.667 0 0 0 6.12 2.185c1.56 0 3.048-.36 4.422-1.068l.647 1.24a11.107 11.107 0 0 1-5.069 1.225z"/><path d="M25.35 13.425a9.558 9.558 0 0 0-1.896-3.59l.9-.746a10.71 10.71 0 0 1 2.125 4.025zM6.86 21.976a10.742 10.742 0 0 1-1.793-5.956c0-2.962 1.18-5.728 3.323-7.789l.814.837a9.564 9.564 0 0 0-2.966 6.952c0 1.899.554 3.737 1.6 5.316z" opacity="0.5"/></g></g></svg>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </span>
                </div>
                <div class="flex-1 group">
                    <span @touchstart="navigateTo('messageIndex')" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 24c0 11.046-8.954 20-20 20H4V24C4 12.954 12.954 4 24 4s20 8.954 20 20m-30-6h18m-18 8h18m-18 8h10"/></svg>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </span>
                </div>
                <div class="flex-1 group">
                    <span @touchstart="navigateTo('profile')" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-1 w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block px-1 pt-1 pb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
        </footer>
        
      <!-- </transition> -->
    </div>
</template>
<script setup>
import { ref, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {navigation} from "@/router/index";
const route = useRoute(); //当前路由对象，Url, 参数
const router = useRouter(); //路由实例，操作路由

let transitionName = ref('go')
let tableIndex = ref(0)

// watch(
//   () => route.meta,
//   (newValue, oldValue) => {
//     console.log(oldValue, newValue);
//     //不同的话 false -> true back true -> false go
//     if (newValue.modulePage != oldValue.modulePage) {
//       if (oldValue.modulePage == false) {
//         transitionName.value = 'back'
//       } else {
//         transitionName.value = 'go'
//       }
//     }
//     else { //false -> false: back true -> true: 空
//       transitionName.value = ''
//       if (newValue.modulePage == false) transitionName = 'back'
//     }
//   }
// )

const navigateTo = (pathName, index) => {
  tableIndex.value = index;
  router.push({ name: pathName });
};

const goBack = () => {
  router.go(-1);
};

const menuList = ref([
    {
        name: '首页',
        pathName: 'findHomePage'
    },
    {
        name: '创意',
        pathName: 'chat'
    },
    {
        name: '创作',
        pathName: 'createPage'
    },
    {
        name: '消息',
        pathName: 'messageIndex'
    },
    {
        name: '我',
        pathName: 'profile'
    }
])
</script>
<style>

.go-enter-active,
.go-leave-active,
.back-enter-active,
.back-leave-active {
  transition: all 0.25s ease-out;
}

.go-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}

.go-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}

.back-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}

.back-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
</style>