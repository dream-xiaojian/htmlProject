<!-- 这个属于聊天标签页 -->
<template lang="">
    <div class="px-2 relative mt-4">
        <!-- 聊天消息预览区域 -->
        <div id="msgBox" class="flex gap-5 flex-col h-full overflow-x-auto mb-4">
            <div v-for="(item, index) in chatTable.chatBody">
                <!-- 数据本身就是按时间进行添加的 -->
                <!-- //右边本人 -->
                <div class="flex gap-3 items-end justify-end" v-if="curUser.id == item.senderId">
                    <div class="bg-blue-500 p-3 rounded-lg">
                    <p class="text-sm text-white">{{item.content}}</p>
                    </div>
                    <img :src="meHeaderImg" alt="Other User Avatar" class="w-8 h-8 rounded-full" />
                </div>

                <!-- 左边接受方 -->
                <div class="flex gap-3 items-end justify-start" v-else>
                    <img :src="whoHeaderImg" alt="Other User Avatar" class="w-8 h-8 rounded-full" />
                    <div class="bg-blue-500 p-3 rounded-lg">
                    <p class="text-sm text-white">{{item.content}}</p>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </div>
         <!-- 消息输入区域 -->
         <div class="mt-4 flex flex-col w-full fixed bottom-3 left-0 px-2">
            <span class="absolute bottom-12 text-sm text-gray-400" v-show="whoUser.id == -1">当前积分值(每次使用将会消耗5点积分值): {{curUser.score}}</span>
            <div class="w-full flex">
                <input
                :disabled="isDisabled"
                type="text"
                :placeholder="{'isDisabled': '积分不足', '': '请输入消息'}[isDisabled ? 'isDisabled' : '']"
                v-model="msg"
                class="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
            />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600" @touchstart="sentMsg()">发送</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, inject, watch, reactive} from "vue";
import { useRoute} from 'vue-router';
import robotLogin from "@/assets/image/robot.svg"
import {ChatTable, IndexDB, User, userTableStore, ChatBodyType} from "@/stores/index";

const route = useRoute();

const db = inject('db') as IndexDB;

const userDb = userTableStore()
let chatId = ref();
let chatTable = reactive<ChatTable>({} as ChatTable);
let curUser = reactive<User>({} as User)
let whoUser = reactive<User>({} as User)
let meHeaderImg = ref(); //发送方头像
let whoHeaderImg = ref(); //接收方头像
let msg = ref();

let isDisabled = computed(() => whoUser.id==-1 && curUser.score! < 5);

watch(() => route.query.id, (newId: any) => {
    chatId.value = newId;
    initData();
});


onMounted(() => {
    chatId.value = route.query.id;
    initData();
});

const addChat = (msg: string, id: number) => {
    //添加聊天记录
    let data: ChatBodyType= {
        senderId: id,
        content: msg,
        data: new Date().toLocaleString()
    }
    
    chatTable.chatBody.push(data);

     //虚拟一个回复
    if (whoUser.id == -1) {
        //机器人虚拟回复
        setTimeout(() => {
            chatTable.chatBody.push({ 
                senderId: -1, content: '你好！我是您的私人创作助理，请问有什么可以帮助你的吗？',
                data: new Date().toLocaleString() 
            });
        db.updataChat(chatTable)
        }, 500);
    }


    db.updataChat(chatTable)
}

const sentMsg = () => {
    if (msg.value == "") return;
    addChat(msg.value, curUser.id as number);
    curUser.score = curUser.score ?? 0;
    if (curUser.score! < 5) {
        msg.value = ""; //无法发送
        return;
    }
    curUser.score = curUser.score! - 5;
    userDb.updataUser(curUser);
    msg.value = "";
}

const initData = () =>{
    /**
     * 双方用户数据的加载，主要是头像的问题
     * IndexedDB中ChatTable数据的读取
     */
     let res =  userDb.getCurrentUserMessage()
     if (res?.code != -1) {
        Object.assign(curUser, res!.data);
        curUser.score = curUser.score ?? 0;
     }
    
     db.getChatById(chatId.value).then((res) => {
         Object.assign(chatTable, res);
         
         //加载双方用户数据 --- 判断哪一个对方
         console.log("聊天信息", chatTable);
         
         let k = chatTable.bothId.indexOf(curUser.id as number);
         let whoId = chatTable.bothId[1 - k];
         if (whoId == -1) //机器人
         {
            whoUser.id = -1;
            whoUser.headerImg = -1; //机器人头像
        }
        else{
            console.log('查找用户', whoId);
            
            let res = userDb.getUserById(whoId);
            console.log('查找到的用户', res);
            
            if (res != null) {
                Object.assign(whoUser, res!);
            }
         }

         console.log(curUser, whoUser);
         
         //加载头像
         db.getImage(curUser.headerImg!).then((res) => {
            meHeaderImg.value = res;
         });


         if (whoUser.headerImg != -1) {
            db.getImage(whoUser.headerImg!).then((res) => {
                whoHeaderImg.value = res;
            });
         }
         else whoHeaderImg.value = robotLogin;
     });
}

</script>
<style lang="">
    
</style>