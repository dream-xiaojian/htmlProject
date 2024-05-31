<template lang="">
    <div class="w-full">
        <div class="flex justify-between items-center py-3 gap-2">
                    <div class="flex-1 flex items-center gap-2">
                        <img :src="headImg" :ref="headImg" style="width:45px; height:45px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">

                        <div class="flex-1 flex flex-col">
                        <span class="text-lg">{{sendUser.username}}</span>
                        <span class="text-xs text-gray-400">{{lastInfo}}</span>
                    </div>
                </div>
                    <div class="flex-none flex flex-col items-end gap-2">
                        <span class=" text-sm text-gray-400">
                            {{item.data.split(" ")[0]}}
                        </span>
                        <!-- 这里要建立一个消息系统 -->
                        <span class="w-3 h-3 bg-red-600 rounded-full z-10 border border-white"></span>
               </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {onMounted, ref, reactive, inject} from "vue"
import {navigation} from "@/router/index"
import { User, userTableStore, IndexDB, ChatListType} from '@/stores/index'

const userDb = userTableStore()
const db: IndexDB = inject('db') as IndexDB;

const props = defineProps({
    item: {
      type: Object,
      required: false,
    },
});

let sendUser = reactive<User>({} as User)
let headImg = ref()
let lastInfo = ref()

onMounted(() => {
    initData()
})

const initData = () => {
    //获取发送者的信息
    sendUser = userDb.getUserById(props.item!.who) ?? {} as User
    console.log(sendUser);
    
    //假设一定是有头像
    db.getImage(sendUser.headerImg!).then(( res:any ) => {
        headImg.value = res
    })

    db.getChatById(props.item!.chatId).then((res) => {
        console.log(res);
        
        let bodyList = res.chatBody ?? [{content: " "}]
        lastInfo.value = bodyList[bodyList.length - 1].content
    })



}



</script>
<style lang="">
    
</style>