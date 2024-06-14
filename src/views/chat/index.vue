<template lang="">
    <div class="w-full h-full p-2">
        <div>
            <!-- 操作顶部 -->
            <div>
                <div class="flex justify-between items-center px-4">
                    <span class="text-xl">历史会话</span>
                    <span @click="newChatTable()">新建对话</span>
                </div>
            </div>

            <!-- 对话列表 -->
            <div class="mt-3 overflow-y-auto pb-4 overflow-auto" style="height: calc(100vh - 60px - 60px)">
                <div @touchstart="goChat(index)" class=" flex justify-between items-center mt-2 text-slate-600 text-base px-6 py-2 w-full mx-auto bg-white rounded-xl shadow-lg" 
                    v-for="(item, index) in historyChatTables" :key="index">
                    <div class="flex justify-center items-center gap-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#1c98f7"/><path fill="#fff" d="M16.28 23.325a11.45 11.45 0 0 0 2.084-.34a5.696 5.696 0 0 0 2.602.17a.627.627 0 0 1 .104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 0 1 .311-.531c.258-.146.498-.314.717-.499c.864-.732 1.352-1.708 1.352-2.742c0-.347-.055-.684-.159-1.006c.261-.487.472-.999.627-1.53A4.59 4.59 0 0 1 26 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 0 1-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 0 0-1.2-.81a2.986 2.986 0 0 0-.368-.187c-.34.051-.688.077-1.039.077c-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12c5.2 0 9.458 3.607 9.458 8.12c0 4.514-4.259 8.121-9.458 8.121c-.584 0-1.162-.045-1.728-.135c-.245.058-1.224.64-2.635 1.67c-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 0 1-1.044-.765m4.949.666c.043 0 .087.003.13.01c.51.086 1.034.13 1.564.13c4.392 0 7.907-2.978 7.907-6.589c0-3.61-3.515-6.588-7.907-6.588c-4.39 0-7.907 2.978-7.907 6.588c0 1.746.821 3.39 2.273 4.62c.365.308.766.588 1.196.832c.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104m-2.337-4.916c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226m4.031 0c-.685 0-1.24-.55-1.24-1.226c0-.677.555-1.226 1.24-1.226c.685 0 1.24.549 1.24 1.226c0 .677-.555 1.226-1.24 1.226"/></g></svg>
                        <span>{{item.tabName}}</span>
                    </div>
                    <div class="flex justify-center items-center gap-1"> 
                        <span>{{item.data.split(" ")[0]}}</span>
                        <!-- //在手机端这个hover实际是点击，会导致goChat触发，禁止冒泡就行 -->
                        <div class="group relative inline-block" @click.stop>
                            <button class="relative z-10 block p-1 text-gray-700 border border-transparent rounded-m">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>

                            <div class=" scale-0 group-hover:scale-100 duration-300 absolute right-0 z-20 w-48 mt-2 origin-top-right bg-gray-100 rounded-md shadow-2xl">
                                <span class="block px-4 py-3 text-sm text-gray-900 capitalize transition-colors duration-300 transform hover:bg-gray-100">
                                    重命名
                                </span>

                                <span class="block px-4 py-3 text-sm text-gray-900 capitalize transition-colors duration-300 transform hover:bg-gray-100">
                                    删除
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
     
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {onMounted, ref, reactive, inject} from "vue"
import {navigation} from "@/router/index"
import { User, userTableStore, IndexDB, ChatListType} from '@/stores/index'

const db: IndexDB = inject('db') as IndexDB;
const userDb = userTableStore()
let curUser = reactive<User>({} as User)
let historyChatTables = ref<ChatListType[]>([] as ChatListType[])

onMounted(() => {
    initData()
})

const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
        historyChatTables.value = curUser.chatListAi ?? []
    }
}

const goChat = (index: number) => {
    navigation("chatDetail", historyChatTables.value[index].chatId)
}

const newChatTable = () => {
    // 新建对话标签页
    const TabsData: ChatListType = {
        who: -1,
        tabName: '新建标签页',
        data: new Date().toLocaleString()
    }

    db.storeChat({
        bothId: [curUser.id as number, -1],
        chatBody:[]
    }).then((res) => {
        TabsData.chatId = res;

        if (curUser.chatListAi == undefined) {
            curUser.chatListAi = []
        }

        curUser.chatListAi?.push(TabsData)
        userDb.updataUser(curUser)
        //前往详细的聊天页面
        navigation("chatDetail", res);
        initData()
    })
}



</script>
<style lang="">
    
</style>