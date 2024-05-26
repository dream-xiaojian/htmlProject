<!-- 消息页面 -->
<template lang="">
    <div style="height: calc(100vh - 60px)" class="overflow-y-auto w-full p-2 px-4">
        <!-- //顶部提示栏 -->
        <header class="flex justify-center items-center"> 
            <span>消息</span>
        </header>

        <!-- 三个选择框 -->
        <div class="flex justify-around items-center mt-8">
            <div class="flex flex-col gap-2" @click="showDraw(0)">
                <span class="p-1 bg-red-200 flex justify-center items-center rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 48 48"><path fill="#f44336" d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"/></svg>
                </span>
                <span class="font-medium">赞和收藏</span>
            </div>
            <!-- 这里其实是粉丝 -->
            <div class="flex flex-col gap-2" @click="showDraw(1)">
                <span class="p-1 bg-blue-200 flex justify-center items-center rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 512 512"><path fill="#5755f7" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"/></svg>
                </span>
                <span class="font-medium">新增关注</span>
            </div>
            <div class="flex flex-col gap-2" @click="showDraw(2)">
                <span class="p-1  bg-green-200 flex justify-center items-center rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="3em" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2eff7e" stroke="#2eff7e" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"/><path stroke="#fff" d="M14 18L32 18"/><path stroke="#fff" d="M14 26H32"/><path stroke="#fff" d="M14 34H24"/></g></svg>
                </span>
                <span class="font-medium">评论和@</span>
            </div>
        </div>

        <!-- 在关注的人中发信息 -->
        <div>

        </div>


        <!-- 发现更多的朋友 -->
        <div class="mt-6">
            <header class=" text-gray-400 flex justify-between items-center">
                <span>你可能感兴趣的人 </span>    
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12.077 19q-2.931 0-4.966-2.033q-2.034-2.034-2.034-4.964t2.034-4.966T12.077 5q1.783 0 3.339.847q1.555.847 2.507 2.365V5h1v5.23h-5.23v-1h3.7q-.782-1.495-2.198-2.363T12.077 6q-2.5 0-4.25 1.75T6.077 12t1.75 4.25t4.25 1.75q1.925 0 3.475-1.1t2.175-2.9h1.062q-.662 2.246-2.514 3.623T12.077 19"/></svg></span>
            </header>

            <!-- //更多的朋友的列表 -->
            <div class="mt-2">
                <div> 
                    <div class=" py-3 w-full border-b-2 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span> 
                                <img ref="headerImage" style="width:40px; height:40px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                            </span>
                            <span>
                                喵星猫大帝
                            </span>
                        </div>
                        <div>
                            <button class="border border-red-400 text-red-400 px-4 py-1 rounded-lg text-sm">关注</button>
                        </div>
                    </div>

                    <div class=" py-3 w-full border-b-2 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span> 
                                <img ref="headerImage" style="width:40px; height:40px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                            </span>
                            <span>
                                喵星猫大帝1
                            </span>
                        </div>
                        <div>
                            <button class="border border-red-400 text-red-400 px-4 py-1 rounded-lg text-sm">关注</button>
                        </div>
                    </div>
                    <div class=" py-3 w-full border-b-2 flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <span> 
                                <img ref="headerImage" style="width:40px; height:40px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                            </span>
                            <span>
                                喵星猫大帝2
                            </span>
                        </div>
                        <div>
                            <button class="border border-red-400 text-red-400 px-4 py-1 rounded-lg text-sm">关注</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- //弹框设置页面 -->
        <transition name="slide-up">
            <div v-if="tabs.showDrawer" style="z-index:999" class="drawer bg-white p-2">
                <!-- 顶部栏 -->
                <header class=" text-lg flex items-center justify-between px-2 py-1 border-b border-slate-900/10">
                    <span class=" text-gray-400" @click="tabs.showDrawer=false"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg></span>
                    <span class=" font-medium text-base">{{tabs.title}}</span>
                    <span class=" text-red-400" @click="updataUser"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m40-16h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8m8 96h80V88H88Z"/></svg></span>
                </header>

                <!-- 设置选项区 -->
                <div v-show='tabs.type==0'>
                    <!-- 收到的赞和收藏 -->
                    <bePround />
                </div>


                <div v-show='tabs.type==1'>
                    <!-- 新增关注 -->
                    <havefans />

                </div>

                <div v-show='tabs.type==2'>
                    <!-- 收到的评论和@ -->
                    <beRemark />
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue"
import bePround from "./components/bePround.vue"
import beRemark from "./components/beRemark.vue"
import havefans from "./components/havefans.vue"


let tabs = reactive({
    showDrawer:false,
    type: 0,
    title:"",
})

const showDraw = (index:number) => {
    tabs.type = index
    if (index == 0) tabs.title = "收到的赞和收藏"
    if (index == 1) tabs.title = "新增关注"
    if (index == 20) tabs.title = "收到的评论和@"

    tabs.showDrawer = true;
}

</script>
<style lang="scss" scoped>
.drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
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