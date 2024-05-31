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
        console.log('粉丝数据', list);
        
        list.forEach((item) => {
            fansList.value.push({ ...userDb.getUserById(item)!, type: 'fans'})
        });
        console.log('粉丝数据', fansList.value);
        
    }
}

const goChat = (indexType:number, whoUser: User) => {
    console.log(indexType, whoUser);
    newChatTable(whoUser.id)
}

const newChatTable = (whoId: number) => {
    //这里要判断一下是否已经有了这个对话, 注意是双方的对话
    let res = curUser.chatListNotAi?.find((item) => item.who == whoId) 
    if (res != undefined) {
        navigation("chatDetail", res.chatId);
        return
    }

    const TabsData: ChatListType = {
        who: whoId,
        tabName: '新建标签页',
        data: new Date().toLocaleString()
    }
  
    db.storeChat({
        bothId: [curUser.id as number, whoId],
        chatBody:[]
    }).then((res) => {
        TabsData.chatId = res;

        if (curUser.chatListNotAi == undefined) {
            curUser.chatListNotAi = []
        }

        curUser.chatListNotAi?.push(TabsData)
        
        let sendUser = userDb.getUserById(whoId) as User
        TabsData.who = curUser.id
        sendUser.chatListNotAi?.push(TabsData)

        userDb.updataUser(curUser)
        userDb.updataUser(sendUser)

        //前往详细的聊天页面
        navigation("chatDetail", res);
    })
}

</script>
<style lang="scss" scoped> 
    
</style>