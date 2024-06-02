<template lang="">
    <div>
        <div class="mt-4 text-sm">
                <header class="w-full flex justify-between items-center"> 
                    <span>我的粉丝 （{{fansList.length}}）</span>
                    <span>时间排序</span>
                </header>
                <section>

                </section>
            </div>

            <div>
                <itemFollowAndFansCom  @clickButton="(index, whoUser) => goChat(index, whoUser)" v-for="(item, index) in fansList" :key="index" :user="item"/>
            </div>
    </div>
</template>
<script lang="ts" setup>
import {ref, onMounted, reactive, inject} from "vue"
import {  User, userTableStore, IndexDB, ChatListType} from '@/stores/index'
import itemFollowAndFansCom from "./itemFollowAndFans.vue"
import {navigation} from "@/router/index"


type UserType = User & {type: string}
let curUser = reactive<User>({} as User)
let fansList = ref<UserType[]>([] as UserType[]);
const userDb = userTableStore()
const db: IndexDB = inject('db') as IndexDB;

onMounted(() =>{
    initData()
})

const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
        let list = curUser.fansList ?? [];
        
        list.forEach((item) => {
            fansList.value.push({ ...userDb.getUserById(item)!, type: 'fans'})
        });     
    }
}

const goChat = (indexType:number, whoUser: User) => {
    console.log(indexType, whoUser);
    newChatTable(whoUser.id)
}

const newChatTable = (whoId: number) => {
    //这里要判断一下是否已经有了这个对话, 注意是双方的对话
    console.log("和谁对话", whoId);
    let TabsData: ChatListType = {
        who: whoId,
        tabName: '新建标签页',
        data: new Date().toLocaleString()
    }
    
    let res = curUser.chatListNotAi?.find((item) => item.who == whoId) 
    if (res != undefined) {
        navigation("chatDetail", res.chatId);
        return
    }


  
    db.storeChat({
        bothId: [curUser.id as number, whoId],
        chatBody:[]
    }).then((res) => {
        TabsData.chatId = res;

        if (curUser.chatListNotAi == undefined) {
            curUser.chatListNotAi = []
        }

        //本人的更新
        curUser.chatListNotAi?.push(TabsData)
        userDb.updataUser(curUser)
        console.log('更新了本人的数据', TabsData);
        
        //对方的更新
        let TabsData1: ChatListType = {
            who: curUser.id,
            tabName: '新建标签页',
            data: new Date().toLocaleString(),
            chatId: res
        }
        
        let sendUser = userDb.getUserById(whoId) as User
        if (sendUser.chatListNotAi == undefined) {
            sendUser.chatListNotAi = []
        }
        sendUser.chatListNotAi?.push(TabsData1)
        console.log('更新了对方的数据', TabsData1);

        userDb.updataUser(sendUser)

        //前往详细的聊天页面
        navigation("chatDetail", res);
    })
}

</script>
<style lang="scss" scoped> 
    
</style>