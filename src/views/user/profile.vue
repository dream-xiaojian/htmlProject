<template lang="">
    <div class="relative h-screen w-full bg-slate-100 overflow-y-auto" ref="profileContent">

        <!-- 任务栏 -->
        <div class="w-full fixed left-0 top-0" style="z-index:999; transition: all 0.25s ease-out;" :style="{ backgroundColor: backgroundColor }"> 
            <div class="flex items-center justify-between p-3">
                <div style="visibility: hidden">
                    <svg @touchstart="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M20 11H7.41l5.3-5.29a1 1 0 0 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42-1.42L7.41 13H20a1 1 0 0 0 0-2z"/></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-2-6h4v4h-4v-4z"/></svg>
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
                    <p  v-else class= "text-gray-200" @click="navigation('profile_pageMe')">点击编辑个人简介</p>
                </div>
            </div>

            <!-- 内容 -->
            <div class=" py-3 px-4 pb-3">
                <div class=" flex justify-between">
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col items-center">
                             <span class=" text-lg font-bold">{{InterestListNumber}}</span>
                            <span class="text-gray-200 text-xs" @click="openDrawer(1)">关注</span>
                        </div>
                        <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">{{fansListNumber}}</span>
                           <span class="text-gray-200 text-xs" @click="openDrawer(1)">粉丝</span>
                       </div>
                       <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">{{score}}</span>
                           <span class="text-gray-200 text-xs">积分</span>
                       </div>
                       <div class="flex flex-col items-center" @touchstart.stop="showDialog=true">
                           <span class=" text-lg font-bold">{{beProudAndLikeNumber}}</span>
                          <span class="text-gray-200 text-xs">获赞和收藏</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class=" border border-white text-white px-3 py-1 rounded-2xl text-sm" @click="navigation('profile_pageMe')">编辑资料</button>
                        <span @click="openDrawer(0)" class=" border border-white text-white px-2 py-1 rounded-2xl text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg></span>
                    </div>
                </div>
            </div>


            <!-- 大块栏 -->
            <div class="flex items-center pb-8 px-4 gap-5">
                <div class="text-container rounded-md flex flex-col px-5 py-1"> 
                    <div class="text-center flex items-center text-white">
                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="white" d="m51.34 23.63l-6.68 16.72l80.04 32.01l6.6-16.72zm409.36.01l-80 32l6.6 16.72l80-32zM256 25c-29 0-50 14.08-64.7 34.29C176.6 79.51 169 106 169 128c0 13 7 27.8 14.5 39s14.9 18.6 14.9 18.6l1.5 1.5l9.3 27.9H228L194.7 98.07L256 118.5l61.3-20.43L284 215h18.8l9.3-27.9l1.5-1.5s7.4-7.4 14.9-18.6s14.5-26 14.5-39c0-22-7.6-48.49-22.3-68.71C306 39.08 285 25 256 25m128 94v18h96v-18zm-352 .1v18h96v-18zm189.3 6.8l25.5 89.1h18.4l25.5-89.1l-34.7 11.6zm166 57.7l-6.6 16.8l80 32l6.6-16.8zm-262.6.1l-80.04 32l6.68 16.8l79.96-32zM217 233v14h78v-14zm0 32v14h78v-14zm-46.9 2.6c-27.1.5-52.6 5-66.9 11.1L29.8 484.1c71.1-14.1 143.9-26 217.2-.9V297h-48v-28.3c-7.9-.7-16-1.1-23.9-1.1zm166.8 0c-7.9 0-16 .4-23.9 1.1V297h-48v186.2c73.3-25.1 146.1-13.2 217.2.9l-73.4-205.4c-14.3-6.1-39.8-10.6-66.9-11.1z"/></svg></span>
                        <span class="" @click="navigation('chat')">创造灵感</span>
                    </div>
                    <span class="text-sm text-gray-300">AI助手找灵感</span>
                </div>
                <div class="text-container rounded-md flex flex-col px-5 py-1"> 
                    <div class="text-center flex items-center">
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 21q-3.45 0-6.012-2.287T3.05 13H5.1q.35 2.6 2.313 4.3T12 19q2.925 0 4.963-2.037T19 12t-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2H3V4h2v2.35q1.275-1.6 3.113-2.475T12 3q1.875 0 3.513.713t2.85 1.924t1.925 2.85T21 12t-.712 3.513t-1.925 2.85t-2.85 1.925T12 21m2.8-4.8L11 12.4V7h2v4.6l3.2 3.2z"/></svg></span>
                        <span class="">浏览记录</span>
                    </div>
                    <span class="text-sm text-gray-300">AI助手找灵感</span>
                </div>
            </div>
        </header>

        <!-- 创作的内容部分 笔记，收藏，赞过-->
        <section class="bg-white" style="border-radius: 10px 10px 0 0; transform: translateY(-1rem);"> 
            <!-- tab部分 -->
            <div class=" text-lg sticky top-16 z-50 w-full flex justify-center gap-8 p-3 bg-white" style="border-radius: 10px 10px 0 0;"> 
                <span @touchstart="tabIndex=0"  :class="{'font-bold text-black':tabIndex==0, 'text-gray-500':tabIndex!=0}">笔记</span>
                <span @touchstart="tabIndex=1"  :class="{'font-bold text-black':tabIndex==1, 'text-gray-500':tabIndex!=1}">收藏</span>
                <span @touchstart="tabIndex=2"  :class="{'font-bold text-black':tabIndex==2, 'text-gray-500':tabIndex!=2}">赞过</span>
            </div>
            <!-- 对应的部分：动画使用vueTransition-->
            <noteCom :id="curUser.id" v-if="tabIndex==0"></noteCom>
            <collectCom :id="curUser.id" v-if="tabIndex==1"></collectCom>
            <likeCom v-if="tabIndex==2"></likeCom>

        </section>
        
        <!-- //弹框设置页面 -->
        <transition name="slide-up">
            <div v-if="drawer.showDrawer" style="z-index:999" class="drawer bg-slate-100 p-2">
                <!-- 顶部栏 -->
                <header v-show="drawer.type == 0"  class=" text-lg flex items-center justify-between px-2 py-1">
                    <span class=" text-gray-400" @click="drawer.showDrawer=false"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg></span>
                    <span class=" font-bold">设置</span>
                    <span class=" text-red-400" ><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8M80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16m136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8M40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8m40-16h96a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8m8 96h80V88H88Z"/></svg></span>
                </header>

                <!-- 设置选项区 type == 0 -->
                <div class="mt-6 px-3" v-show="drawer.type == 0">
                    <div class=" text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                            <div class="flex justify-between py-2 items-center" v-for="(item, index) in settingsList.general" :key="index">
                                <span>{{item.title}}</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg></span>
                            </div>
                    </div>

                    <div class=" mt-4 text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                            <div class="flex justify-between py-2 items-center" v-for="(item, index) in settingsList.about" :key="index">
                                <span>{{item.title}}</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg></span>
                            </div>
                    </div>

                    <div class=" mt-4 text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                            <div @click="handleSetting(item.title)" class="flex justify-between py-2 items-center" v-for="(item, index) in settingsList.user" :key="index">
                                <span>{{item.title}}</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg></span>
                            </div>
                    </div>
                </div>

                <div v-if="drawer.type != 0">
                    <FollowAndFans @back="() => {drawer.showDrawer=false}"/>
                </div>
                
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
import { ref, onMounted, onUnmounted, reactive, computed, inject} from "vue";
import { navigation } from '@/router/index';
import ConfirmDialogCom from "@/components/ConfirmDialog.vue"
import noteCom from "./components/note.vue"
import collectCom from "./components/collection.vue"
import likeCom from "./components/like.vue"
import FollowAndFans from "./pages/followAndFans.vue";
import dialogCom from "@/components/dialog.vue";

import { User, userTableStore, IndexDB} from '@/stores/index'

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
let curUser = reactive<User>({} as User)
let tabIndex = ref(0)
let showDialog = ref(false);
const InterestListNumber = computed(() => {
    return curUser.InterestList?.length || 0;
});
const fansListNumber = computed(() => {
    return curUser.fansList?.length || 0;
});
const score = computed(() => {
    return curUser.score || 0
});
const noteNum = computed(() => {
    return curUser.noteList?.length || 0
});
//统计获得的赞和收藏数
let beProudAndLikeNumber = ref(0);
let beLikeNumber = ref(0);
let beProudNumber = ref(0);



const db: IndexDB = inject('db') as IndexDB;

const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);

        //统计获得的赞和收藏数
        beLikeNumber.value = mapSum(curUser.beProudLike || null);
        beProudNumber.value = mapSum(curUser.beProudCon || null);
        beProudAndLikeNumber.value = beLikeNumber.value + beProudNumber.value;
        imageDataInit();
    }else{
        navigation('login')
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
    if (curUser.backgroundImg != null) {
        
        db.getImage(curUser.backgroundImg!).then((res) => {
          meHeader.value.style.backgroundImage = `url(${res})`;
        }).catch((err:DOMException) => {
            console.log("获取数据失败", err);
        });
    }
    if (curUser.headerImg != null) {
        db.getImage(curUser.headerImg!).then((res) => {
            headerImage.value.src = res;
        }).catch((err:DOMException) => {
            console.log("获取数据失败", err);
        });
    }
}

const handleConfirm = () =>{
    userDb.logout();
    navigation('login');
}

const handleSetting = (title:string) => {
    if (title == "退出登入") {
        ConfirmDialog.value = true;
    }
}

const settingsList = reactive({
    general:[
        {
            title: "账号与安全",
            icon: "el-icon-s-operation",
            pathName: "profile_pageMe",
        },
        {
            title: "隐私设置",
            icon: "el-icon-s-tools",
            pathName: "login",
        },
        {
            title: "深色模式",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "通用设置",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "少年猫模式",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
    ],
    about: [
        {
            title: "关于我们",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "帮助与反馈",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "联系我们",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "用户协议",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "隐私政策",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
    ],
    user: [
        {
            title: "退出登入",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
        {
            title: "切换账号",
            icon: "el-icon-s-help",
            pathName: "/profile/about",
        },
    ]
    }
);

const checkList = ref([
  {
    flag: false,
    time: "5/15",
  },
  {
    flag: false,
    time: "5/16",
  },
  {
    flag: true,
    time: "5/17",
  },
]);


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