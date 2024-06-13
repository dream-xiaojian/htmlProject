<script setup lang="ts">
import {onMounted} from "vue"
import {settingsStore} from "@/stores"
import {navigation} from "@/router"

const settings = settingsStore()

onMounted(() => {
   if (settings.firstCome) {
      settings.setFirstCome(false)
      navigation("guide")
   }
   console.log('初始化主题');
   
   if (settings.theme === "dark") { //当前是dark模式
      console.log('初始化主题是dark');
    
      document.documentElement.classList.add('dark')
   } else {
      console.log('初始化主题是light'); 
      document.documentElement.classList.remove('dark')
   }
})
</script>

<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
.app{
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(200vh);
}  
</style>
