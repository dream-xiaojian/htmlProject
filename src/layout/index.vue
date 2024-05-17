<template >
    <div>
        <header></header>

        <!-- 非模块页面 -->
        <router-view v-slot="{ Component, route}">
          <transition :name="transitionName" mode="out-in">
            <keep-alive>
              <component :is="Component" :key="route.name"/>
            </keep-alive>
          </transition>
        </router-view>
        
        <!-- 底部的菜单栏 -->
        <footer v-show="$route.meta.modulePage" class="fixed bottom-0 left-0 w-screen px-2 py-1 border-t-2 border-black-500 text-black bg-white">
        <div class="w-full h-full flex justify-around">
            <div @click="navigateTo(item.pathName)" class="flex flex-col justify-center items-center" v-for="(item, index) in menuList" :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="black"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="7" r="3"/></g></svg>
            <span class=" text-sm font-bold">{{ item.name }}</span>
            </div>
        </div>
        </footer>
    </div>
</template>
<script setup>
import { ref, watch} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute(); //当前路由对象，Url, 参数
const router = useRouter(); //路由实例，操作路由

const transitionName = ref('')

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

const navigateTo = (pathName) => {
  router.push({ name: pathName });
};

const menuList = ref([
    {
        name: '首页',
        icon: 'user',
        pathName: 'home'
    },
    {
        name: '我',
        icon: 'user',
        pathName: 'profile'
    }
])
</script>
<style>

.go-enter-from {
  transform: translate3d(100%, 0, 0);
}

/* //最终状态 */
.back-enter-to,
.back-enter-from,
.go-enter-to,
.go-leave-from {
  transform: translate3d(0, 0, 0);
}

.go-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.go-enter-active,
.go-leave-active,
.back-enter-active,
.back-leave-active {
  transition: all 0.3s;
}

.back-enter-from {
  transform: translate3d(-100%, 0, 0);
}

.back-leave-to {
  transform: translate3d(100%, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>