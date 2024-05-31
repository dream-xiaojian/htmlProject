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
        <footer v-show="$route.meta.modulePage" class="fixed bottom-0 left-0 w-screen px-2 py-1 border-t-2 border-black-500 text-black bg-white z-40" >
          <div class="w-full h-full flex justify-around ">
              <div @touchstart="navigateTo(item.pathName, index)" class="flex flex-col justify-center items-center" v-for="(item, index) in menuList" :key="index">
                <span v-if="index == 2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="3.2em" height="3.2em" viewBox="0 0 24 24"><path fill="#ee5353" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/></svg>
                </span>
                <span v-if="index != 2" :class="{'text-black':tableIndex == index, 'text-gray-500':tableIndex != index}" class="py-2 text-lg font-bold " >{{ item.name }}</span>
              </div>
          </div>
        </footer>
      <!-- </transition> -->
    </div>
</template>
<script setup>
import { ref, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute(); //当前路由对象，Url, 参数
const router = useRouter(); //路由实例，操作路由

let transitionName = ref('go')
let tableIndex = ref(0)

watch(
  () => route.meta,
  (newValue, oldValue) => {
    console.log(oldValue, newValue);
    //不同的话 false -> true back true -> false go
    if (newValue.modulePage != oldValue.modulePage) {
      if (oldValue.modulePage == false) {
        transitionName.value = 'back'
      } else {
        transitionName.value = 'go'
      }
    }
    else { //false -> false: back true -> true: 空
      transitionName.value = ''
      if (newValue.modulePage == false) transitionName = 'back'
    }
  }
)

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