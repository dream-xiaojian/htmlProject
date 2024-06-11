<!-- 模仿搜索页面 -->
<template lang="">
    <div class="px-2">
        <!-- 顶部搜索栏 -->
        <header id="homeTabs" ref="header" class="border-b border-slate-900/10">
            <div class=" py-2 bg-white relative w-full flex items-center"> 
                <span @touchstart.stop="goBack" class="flex-none"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg> </span>
                <div  class="grow flex-2 items-center justify-center gap-6 px-2"> 
                    我的历史浏览
                </div>
                <span class=" text-slate-500 flex-none" style="visibility:hidden">
                    <span >搜索</span>
                </span>
            </div>
        </header>
        <div>
            <waterfulLayoutVue :items="noteList" :columnsCount="2"> 
            <template #default="{ item }">
                <div>
                    <itemBlogVue @click.stop="navigation('blogDetail', item.id)" :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length" :username="item.username"> </itemBlogVue>
                 </div>
            </template>
        </waterfulLayoutVue>
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
import { ref, onMounted, reactive, inject} from "vue";
import {  router, goBack, navigation} from '@/router/index';
import { blogSharesTable, IndexDB, userTableStore, User } from "@/stores/index"
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
let noteList = ref<blogSharesTable[]>([]);
let curUser = reactive<User>({} as User)
const userDb = userTableStore()
const db: IndexDB = inject('db') as IndexDB;
const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
    }

    curUser.history = curUser.history ?? []
    //获取历史记录
    convertFilesToDataUrlsId(curUser.history!).then((res) => {
        noteList.value = res
    })

}

async function convertFilesToDataUrlsId(history:string[]) {
    //删除最后一个null

    const promises = []
    for (let i = 0; i < history.length; i ++ ) {
        promises.push(db.getNoteById(history[i]))
    }

    // 同步等待所有图片转换完成
    const dataUrlsId = await Promise.all(promises);
    return dataUrlsId;
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