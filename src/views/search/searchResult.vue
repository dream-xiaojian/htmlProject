<template lang="">
    <div class="px-2 h-screen overflow-y-auto">
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
                        <span @touchstart="search()">搜索</span>
                    </span>
                </div>
                <!-- <div class="flex items-center py-2 justify-center gap-3">
                    <span>文章</span>
                    <span>用户</span>
                </div> -->
            </header>

            <!-- 搜索结果 -->
            <div class="mt-2">
                <waterfulLayoutVue :items="noteList" :columnsCount="2"> 
                    <template #default="{ item }">
                        <div>
                            <itemBlogVue @touchstart="navigation('blogDetail', item.id)" :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length"> </itemBlogVue>
                        </div>
                    </template>
                </waterfulLayoutVue>
            </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, inject, watch, reactive, computed} from "vue";
import { useRoute} from 'vue-router';
import { navigation, router, goBack} from '@/router/index';
import {IndexDB, blogSharesTable, userTableStore, User} from "@/stores"
import commitItemCom from "../components/commitItem.vue"
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";

const indexDb: IndexDB = inject('db') as IndexDB;
const route = useRoute();
const userDb = userTableStore()
let searchQuery = ref('');
let page = ref(1); let pageSize = ref(10);
let noteList = ref<blogSharesTable[]>([]);
let curUser = reactive<User>({} as User) 

watch(() => route.query.searchQuery, (newQuery) => {
    searchQuery.value = newQuery as string;
    initData();
});

const initData = () => {
    goSearch()
    initUser()
}

const goSearch = () =>{
    indexDb.searchNote(searchQuery.value, true, page.value, pageSize.value).then((res) => {
        noteList.value = res;
    });
}

const initUser = () =>{
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
    }
    curUser.searchHistory = curUser.searchHistory ?? [];
}

const search = () => {
    if (searchQuery.value) {
        if (curUser.searchHistory == undefined) {
            curUser.searchHistory = []
        }
        curUser.searchHistory.unshift(searchQuery.value)
        userDb.updataUser(curUser)
        goSearch();
    }
}

onMounted(() => {
    initData();
});
</script>
<style lang="">
    
</style>