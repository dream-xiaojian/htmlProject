<!-- 模仿搜索页面 -->
<template lang="">
    <div class="px-2">
        <!-- 顶部搜索栏 -->
        <header id="homeTabs" ref="header" class="border-b border-slate-900/10">
            <div class=" py-2 bg-white relative w-full flex items-center"> 
                <span @touchstart.stop="goBack" class="flex-none"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg> </span>
                <div  class="grow flex-2 items-center justify-center gap-6 px-2"> 
                    <div class="flex rounded bg-white" x-data="{ search: '' }">
                        <input @keyup.enter="search" type="search" class="w-full border-none rounded-md bg-gray-100 px-4 py-1 text-gray-900 focus:outline-none" placeholder="请输入您想要搜索的内容" v-model="searchQuery" />
                    </div>
                </div>
                <span class=" text-slate-500 flex-none">
                    <span @touchstart="search">搜索</span>
                </span>
            </div>
        </header>
        <!-- 历史记录 -->
        <div class="mt-2">
            <div class="flex items-center justify-between px-2 text-slate-500">
                <span class="text-black">历史记录</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"/></svg></span>
            </div>

            <div class="mt-2 flex gap-2 flex-wrap" :style="{ 'max-height': expanded ? '12em' : '4.2em', overflow: 'hidden' }">
                <!-- 搜索内容展示 -->
                <div v-for="(item, index) in curUser.searchHistory" class="center border-b border-slate-900/10  relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-100 py-2 px-3.5 align-baseline font-sans text-xs uppercase leading-none">
                    <div class="mt-px">{{item}}</div>
                </div>
                <div class="center border-b border-slate-900/10  relative inline-block select-none whitespace-nowrap rounded-lg bg-gray-100 py-2 px-3.5 align-baseline font-sans text-xs uppercase leading-none">
                    <div class="mt-px" v-show="historyShow==false">暂无内容</div>
                </div>

            
            </div>
                <!-- 还有很多的搜索内容 -->
            <div class="w-full flex justify-center mt-3">
                <svg v-show="expanded==false" @touchstart="expanded=!expanded" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
                <svg v-show="expanded==true" @touchstart="expanded=!expanded" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"/></g></svg>
            </div>
        </div>

        <!-- 猜你想搜 -->
        <div class="mt-2">
            <div class="flex items-center justify-between px-2 text-slate-500">
                <span class="text-black ">猜你想搜</span>
                <span>换一批</span>
            </div>

            <div class="mt-3 w-full flex flex-wrap px-2">
                <span class="w-1/2 py-1">普刊推荐</span>
                <span class="w-1/2 py-1">江西财经大学</span>
                <span class="w-1/2 py-1">壁纸</span>
                <span class="w-1/2 py-1">江西人才</span>
                <span class="w-1/2 py-1">地方爱人</span>
                <span class="w-1/2 py-1">喵星大帝是谁？</span>
            </div>
        </div>


        <!-- 搜索热门 -->
        <div class="mt-4">
            <div class="flex items-center justify-between px-2 text-slate-500">
                <span class="text-black gradient-text">搜索热门</span>
            </div>

            <div class="mt-3 px-2">
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
                <div class="flex justify-between items-center py-2"> 
                    <div class="flex items-center gap-2 flex-2"> 
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
                        <span>永远不要好奇后脑勺长什么样子</span>
                    </div>
           
                    <div class="flex-1 flex justify-end">
                        <span class=" text-gray-400">1100.5w</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts" setup>
/**
 * 搜索页面
    （1）历史记录（真实保存数据）
    （2）猜你想搜（虚拟数据）
    （3）搜索热门（虚拟数据）
 */
import { ref, onMounted, reactive} from "vue";
import {  router, goBack} from '@/router/index';
import { User, userTableStore} from '@/stores/index'
let searchQuery = ref('');
let expanded = ref(false);
let historyShow = ref(false);
let curUser = reactive<User>({} as User)
const userDb = userTableStore()

const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
    }
    curUser.searchHistory = curUser.searchHistory ?? [];
    if (curUser.searchHistory.length > 0) {
        historyShow.value = true
    }
}

const search = () => {
    if (searchQuery.value) {
        if (curUser.searchHistory == undefined) {
            curUser.searchHistory = []
        }
        curUser.searchHistory.unshift(searchQuery.value)
        userDb.updataUser(curUser)
        historyShow.value = true
        router.push({name: 'searchResult', query: {searchQuery: searchQuery.value}})
    }
}

onMounted(() => {
    initData()
})
</script>
<style lang="scss" scoped>
.gradient-text {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>