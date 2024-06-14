<!-- //其他人的主页 -->
<template lang="">
    <div class="relative h-screen w-full bg-slate-100 overflow-y-auto" ref="profileContent">

        <!-- 任务栏 -->
        <div class="w-full fixed left-0 top-0" style="z-index:999; transition: all 0.25s ease-out;" :style="{ backgroundColor: backgroundColor }"> 
            <div class="flex items-center justify-between p-3">
                <div>
                    <svg @click.stop="goBack()" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M20 11H7.41l5.3-5.29a1 1 0 0 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42-1.42L7.41 13H20a1 1 0 0 0 0-2z"/></svg>
                </div>
                <div>
                    <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
        </div>



        <!-- 头部的介绍: 背景(可以切换背景图) 和基本信息 -->
        <header class="text-white " ref="meHeader" id="meHeader"> 
            <!-- 基本信息 -->
            <div class="pt-12 px-6 w-full mx-auto flex items-center space-x-4">
                <!-- 头像 -->
                <img ref="headerImage" style="width:104px; height:104px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                <div>
                    <div class="text-xl font-medium text-white" >{{curUser.username}}</div>
                    <p  v-if="curUser.resume != null" class= "text-gray-200">{{curUser.resume}}</p>
                    <p  v-else class= "text-gray-200">该用户暂无将它的简介贴出</p>
                </div>
            </div>

            <!-- 内容 -->
            <div class=" py-3 px-4 pb-3">
                <div class=" flex justify-between">
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col items-center">
                             <span class=" text-lg font-bold">{{InterestListNumber}}</span>
                            <span class="text-gray-200 text-xs" >关注</span>
                        </div>
                        <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">{{fansListNumber}}</span>
                           <span class="text-gray-200 text-xs">粉丝</span>
                       </div>
                       <!-- <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">{{score}}</span>
                           <span class="text-gray-200 text-xs">积分</span>
                       </div> -->
                       <div class="flex flex-col items-center" @touchstart.stop="showDialog=true">
                           <span class=" text-lg font-bold">{{beProudAndLikeNumber}}</span>
                          <span class="text-gray-200 text-xs">获赞和收藏</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class=" border border-red-500 bg-red-500 px-7 py-1 rounded-2xl text-sm" @click="changeFollow(1)" v-show="isFollow==false">关注</button>
                        <button class=" border border-red-500 bg-red-500 px-7 py-1 rounded-2xl text-sm" @click="changeFollow(0)" v-show="isFollow==true">已关注</button>
                        <button class=" border border-white text-white px-3 py-1 rounded-2xl text-sm" @click="sendMessage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="white"><path d="m4 19l-.93-.37a1 1 0 0 0 1.125 1.35zm4.706-.936l.474-.881l-.317-.17l-.352.07l.195.98zm-3.082-3.147l.93.37l.163-.414l-.196-.399zM19 12c0 3.246-2.853 6-6.53 6v2c4.641 0 8.53-3.514 8.53-8zM5.941 12c0-3.246 2.854-6 6.53-6V4C7.83 4 3.94 7.514 3.94 12h2zm6.53-6C16.147 6 19 8.754 19 12h2c0-4.486-3.889-8-8.53-8zm0 12c-1.205 0-2.328-.3-3.291-.817l-.948 1.761A8.934 8.934 0 0 0 12.471 20zm-8.276 1.98l4.706-.936l-.39-1.961l-4.706.936l.39 1.962zm2.326-5.506A5.564 5.564 0 0 1 5.94 12h-2c0 1.2.282 2.338.786 3.36zm-1.826.073L3.07 18.631l1.858.738l1.624-4.083l-1.858-.739z"/><circle cx="9" cy="12" r="1"/><circle cx="12.5" cy="12" r="1"/><circle cx="16" cy="12" r="1"/></g></svg>
                        </button>
                    </div>
                </div>
            </div>


            <!-- 大块栏 -->
            <div class="flex items-center pb-8 px-4 gap-5">

            </div>
        </header>

        <!-- 创作的内容部分 笔记，收藏，赞过-->
        <section class="bg-white" style="border-radius: 10px 10px 0 0; transform: translateY(-1rem);"> 
            <!-- tab部分 -->
            <div class=" text-lg sticky top-16 w-full flex justify-center gap-8 p-3 bg-white" style="border-radius: 10px 10px 0 0;"> 
                <span @touchstart="tabIndex=0"  :class="{'font-bold text-black':tabIndex==0, 'text-gray-500':tabIndex!=0}">笔记</span>
                <span @touchstart="tabIndex=1"  :class="{'font-bold text-black':tabIndex==1, 'text-gray-500':tabIndex!=1}">收藏</span>
                <!-- <span @touchstart="tabIndex=2"  :class="{'font-bold text-black':tabIndex==2, 'text-gray-500':tabIndex!=2}">赞过</span> -->
            </div>
            <!-- 对应的部分：动画使用vueTransition-->
            <noteCom :id="userId" :hidden="true" v-if="tabIndex==0"></noteCom>
            <collectCom :id="userId" :hidden="false" v-if="tabIndex==1"></collectCom>
            <!-- <likeCom :id="userId" :hidden="false" v-if="tabIndex==2"></likeCom> -->

        </section>
        
        <!-- //弹框设置页面 -->
        <transition name="slide-up">
            <div v-if="drawer.showDrawer" style="z-index:999" class="drawer bg-slate-100 p-2">
                
            </div>
        </transition>

        <dialogCom v-model:show="showDialog">
            <div class="text-slate-800 min-w-72 flex flex-col ">
                <h3 class="text-center text-xl py-4 border-slate-900/10 border-b">获赞和收藏</h3>
                <div class="px-3 flex flex-col items-center gap-4 py-4">
                    <span class="text-slate-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#5d6cda" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"/></svg>
                        当前发布的笔记数 
                        <span class="text-slate-800">{{noteNum}}</span> 
                    </span>
                    <span class="text-slate-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="#f44336" d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"/></svg>
                        当前获得的赞数数
                        <span class="text-slate-800">{{beProudNumber}}</span> 
                    </span>
                    <span class="text-slate-500 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="#dac95d" d="M432.9 0H107.1C94.3 0 83.8 10.4 83.8 23.3V512L270 325.8L456.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3m-46.5 186.2h-93.1v93.1h-46.5v-93.1h-93.1v-46.5h93.1V46.5h46.5v93.1h93.1z"/></svg>
                        当前获得的收藏数
                        <span class="text-slate-800">{{beLikeNumber}}</span> 
                    </span>
                </div>
                <div class="px-10 pb-3">
                    <span @touchstart="showDialog=false" class="block w-full bg-indigo-600 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 text-center">
                        我知道了
                    </span>
                </div>
            </div>
        </dialogCom>
        <!-- 弹出框 -->
        <ConfirmDialogCom v-model='ConfirmDialog' @confirm="handleConfirm" tittle="确定退出该账户吗？" />
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, reactive, computed, inject} from "vue";
import { navigation } from '@/router/index';
import { useRoute, useRouter} from 'vue-router';
import ConfirmDialogCom from "@/components/ConfirmDialog.vue"
import noteCom from "../user/components/note.vue"
import collectCom from "../user/components/collection.vue"
import likeCom from "../user/components/like.vue"
import FollowAndFans from "../user/pages/followAndFans.vue";
import dialogCom from "@/components/dialog.vue";

import { User, userTableStore, IndexDB, ChatListType} from '@/stores/index'

const router = useRouter();
const route = useRoute();
const userDb = userTableStore()
const meHeader = ref();
const headerImage = ref();
const profileContent = ref();
let drawer = reactive({
    showDrawer: false,
    title: "设置",
    type:0
});
let ConfirmDialog = ref(false);
let backgroundColor = ref('transparent');
let lookUser = reactive<User>({} as User)
let curUser = reactive<User>({} as User)
let tabIndex = ref(0)
let showDialog = ref(false);
const InterestListNumber = computed(() => {
    return lookUser.InterestList?.length || 0;
});
const fansListNumber = computed(() => {
    return lookUser.fansList?.length || 0;
});
const score = computed(() => {
    return lookUser.score || 0
});
const noteNum = computed(() => {
    return lookUser.noteList?.length || 0
});
//统计获得的赞和收藏数
let beProudAndLikeNumber = ref(0);
let beLikeNumber = ref(0);
let beProudNumber = ref(0);
let userId = ref()
let isFollow = ref(false);

watch(() => route.query.id, (newId) => {
    userId.value = newId;
    initData();
});

const db: IndexDB = inject('db') as IndexDB;

const initData = () =>{
    //基本信息的获取
    userId.value = route.query.id;
    let ans = userDb.getCurrentUserMessage()
    if (ans?.code != -1) {
        Object.assign(curUser, ans!.data);
    }

    let res =  userDb.getUserById(parseInt(userId.value))
    
    if (res != null) {
        Object.assign(lookUser, res!);

        //统计获得的赞和收藏数
        beLikeNumber.value = mapSum(lookUser.beProudLike || null);
        beProudNumber.value = mapSum(lookUser.beProudCon || null);
        beProudAndLikeNumber.value = beLikeNumber.value + beProudNumber.value;
        imageDataInit();
    }

    if (lookUser.id == curUser.id) {
        navigation("profile");
    }

    //判断一下是否关注过看的这个人
    curUser.InterestList?.includes(lookUser.id) ? isFollow.value = true : isFollow.value = false;
}

const changeFollow = (indexType:number) => {
    curUser.InterestList = curUser.InterestList || []
    lookUser.fansList = lookUser.fansList || []
    
    if (indexType == 0) {
        console.log('取消关注');
        
        //取消关注
        let startIndex = curUser.InterestList!.indexOf(lookUser.id)
        curUser.InterestList!.splice(startIndex, 1) 

        startIndex = lookUser.fansList!.indexOf(curUser.id)
        lookUser.fansList!.splice(startIndex, 1)

        userDb.updataUser(lookUser)
        userDb.updataUser(curUser)
        isFollow.value = false;

    } else {
        console.log('取消关注');
        //关注
        curUser.InterestList!.push(lookUser.id) 
        lookUser.fansList!.push(curUser.id)
        userDb.updataUser(lookUser)
        userDb.updataUser(curUser)
        isFollow.value = true;

    }
}

const mapSum = (map: Map<number, number[]> | null) => {
    if (map == null) return 0;
    return Array.from(map.values()).reduce((total, currentArray: number[]) => total + currentArray.length, 0);
}

const openDrawer = (type:number) => {
    drawer.showDrawer = true;
    drawer.type = type;
}

const imageDataInit = () => {
    if (lookUser.backgroundImg != null) {
        db.getImage(lookUser.backgroundImg!).then((res) => {
          meHeader.value.style.backgroundImage = `url(${res})`;
        }).catch((err:DOMException) => {
        });
    }
    if (lookUser.headerImg != null) {
        db.getImage(lookUser.headerImg!).then((res) => {
            headerImage.value.src = res;
        }).catch((err:DOMException) => {
        });
    }
}

const sendMessage = () => {
    let TabsData: ChatListType = {
        who: parseInt(userId.value) as number,
        tabName: '新建标签页',
        data: new Date().toLocaleString()
    }
    
    let res = curUser.chatListNotAi?.find((item) => item.who == userId.value) 
    if (res != undefined) { //表示已经有了这个聊天
        router.push({name: 'chatPage', query: {
            id: res.chatId as number,
            whoId: userId.value
        }})
        return
    }

    db.storeChat({
        bothId: [curUser.id as number, parseInt(userId.value) as number],
        chatBody:[]
    }).then((res) => {
        TabsData.chatId = res;

        if (curUser.chatListNotAi == undefined) {
            curUser.chatListNotAi = []
        }

        //本人的更新
        curUser.chatListNotAi?.push(TabsData)
        userDb.updataUser(curUser)
        
        //对方的更新
        let TabsData1: ChatListType = {
            who: curUser.id,
            tabName: '新建标签页',
            data: new Date().toLocaleString(),
            chatId: res
        }

        if (lookUser.chatListNotAi == undefined) {
            lookUser.chatListNotAi = []
        }
        lookUser.chatListNotAi?.push(TabsData1)

        userDb.updataUser(lookUser)

        //前往详细的聊天页面
        router.push({name: 'chatPage', query: {
            id: res,
            whoId: userId.value
        }})
    })
}

const goBack = () => {
    router.go(-1)
}

//监听滚动事件
onMounted(() => {
    initData();
    profileContent.value.addEventListener('scroll', handleScroll)
})

// onUnmounted(() => {
//     profileContent.value.removeEventListener('scroll', handleScroll)
// })

const handleScroll = (event:any) => {
     const scrollTop = profileContent.value.scrollTop || document.body.scrollTop;
     backgroundColor.value = scrollTop > 20 ? 'rgba(0, 0, 0, 0.9)' : 'transparent'; 
};


</script>
<style scoped lang="scss">
#meHeader {
  background-image: url(../../assets/image/meback.png);
  background-repeat: no-repeat;
  background-size: cover; // 让背景图片占满整个元素
  background-position: center center; // 让背景图片居中显示
}

.text-container {
  background-color: rgba(0, 0, 0, 0.3); /* 黑色背景，50% 不透明度 */
  color: white; /* 白色文字 */
}
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