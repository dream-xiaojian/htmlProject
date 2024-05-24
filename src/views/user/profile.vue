<template lang="">
    <div class="relative h-screen w-full bg-slate-100 overflow-y-auto" ref="profileContent">

        <!-- 任务栏 -->
        <div class="w-full fixed left-0 top-0" style="z-index:999; transition: all 0.25s ease-out;" :style="{ backgroundColor: backgroundColor }"> 
            <div class="flex items-center justify-between p-3">
                <div>
                    <svg @click="router.go(-1)" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M20 11H7.41l5.3-5.29a1 1 0 0 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42-1.42L7.41 13H20a1 1 0 0 0 0-2z"/></svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-2-6h4v4h-4v-4z"/></svg>
                </div>
            </div>
        </div>



        <!-- 头部的介绍: 背景(可以切换背景图) 和基本信息 -->
        <header class="text-white" id="meHeader"> 

            <!-- 基本信息 -->
            <div class="pt-12 px-6 w-full mx-auto flex items-center space-x-4">
                <!-- 头像 -->
                <img style="width:104px; height:104px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                <div>
                    <div class="text-xl font-medium text-white" >{{curUser.username}}</div>
                    <p  v-if="curUser.resume != null" class= "text-gray-200">{{curUser.resume}}</p>
                    <p  v-else class= "text-gray-200">点击编辑个人简介</p>
                </div>
            </div>

            <!-- 内容 -->
            <div class=" py-3 px-4 pb-3">
                <div class=" flex justify-between">
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col items-center">
                             <span class=" text-lg font-bold">100</span>
                            <span class="text-gray-200 text-xs">关注</span>
                        </div>
                        <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">0</span>
                           <span class="text-gray-200 text-xs">粉丝</span>
                       </div>
                       <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">100</span>
                           <span class="text-gray-200 text-xs">积分</span>
                       </div>
                       <div class="flex flex-col items-center">
                           <span class=" text-lg font-bold">100</span>
                          <span class="text-gray-200 text-xs">获赞和收藏</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class=" border border-white text-white px-3 py-1 rounded-2xl text-sm">编辑资料</button>
                        <span class=" border border-white text-white px-2 py-1 rounded-2xl text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg></span>
                    </div>
                </div>
            </div>


            <!-- 大块栏 -->
            <div class="flex items-center pb-8 px-4 gap-5">
                <div class="text-container rounded-md flex flex-col px-5 py-1"> 
                    <div class="text-center flex items-center text-white">
                        <span ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="white" d="m51.34 23.63l-6.68 16.72l80.04 32.01l6.6-16.72zm409.36.01l-80 32l6.6 16.72l80-32zM256 25c-29 0-50 14.08-64.7 34.29C176.6 79.51 169 106 169 128c0 13 7 27.8 14.5 39s14.9 18.6 14.9 18.6l1.5 1.5l9.3 27.9H228L194.7 98.07L256 118.5l61.3-20.43L284 215h18.8l9.3-27.9l1.5-1.5s7.4-7.4 14.9-18.6s14.5-26 14.5-39c0-22-7.6-48.49-22.3-68.71C306 39.08 285 25 256 25m128 94v18h96v-18zm-352 .1v18h96v-18zm189.3 6.8l25.5 89.1h18.4l25.5-89.1l-34.7 11.6zm166 57.7l-6.6 16.8l80 32l6.6-16.8zm-262.6.1l-80.04 32l6.68 16.8l79.96-32zM217 233v14h78v-14zm0 32v14h78v-14zm-46.9 2.6c-27.1.5-52.6 5-66.9 11.1L29.8 484.1c71.1-14.1 143.9-26 217.2-.9V297h-48v-28.3c-7.9-.7-16-1.1-23.9-1.1zm166.8 0c-7.9 0-16 .4-23.9 1.1V297h-48v186.2c73.3-25.1 146.1-13.2 217.2.9l-73.4-205.4c-14.3-6.1-39.8-10.6-66.9-11.1z"/></svg></span>
                        <span class="">创造灵感</span>
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
            <div class="sticky top-16 w-full flex justify-center gap-8 p-3 bg-white" style="border-radius: 10px 10px 0 0;"> 
                <span class=" text-black font-bold">笔记</span>
                <span class="text-gray-500">收藏</span>
                <span class="text-gray-500">赞过</span>
            </div>
            <!-- 对应的部分：动画使用vueTransition-->
            <noteCom> </noteCom>
        </section>
    </div>
</template>
<script setup lang="ts">
import { ref, onActivated, onMounted, onUnmounted, reactive} from "vue";
import { router, navigation } from '@/router/index';
import noteCom from "./components/note.vue"
import { User, userTableStore } from '@/stores/user'
const userDb = userTableStore()

let backgroundColor = ref('transparent');
const profileContent = ref();

let curUser = reactive<User>({} as User)

const handleScroll = (event:any) => {
     const scrollTop = profileContent.value.scrollTop || document.body.scrollTop;
     backgroundColor.value = scrollTop > 20 ? 'rgba(0, 0, 0, 0.9)' : 'transparent'; 
};

onActivated(() => {
    initData();
});


const initData = () =>{
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        //对于一个curUser是指向一个响应式对象
        //如果直接curUser = res.data,则curUser不是响应式对象，指向的就不是相应式对象
        //通过assign给curUser的每一个属性赋值，这样curUser就是一个响应式对象
        Object.assign(curUser, res!.data);
    }else {
        navigation('login')
    }
}

const settingsList = ref([
  {
    title: "基本信息",
    icon: "el-icon-s-operation",
    pathName: "profile_pageMe",
  },
  {
    title: "设置",
    icon: "el-icon-s-tools",
    pathName: "login",
  },
  {
    title: "我发布的",
    icon: "el-icon-s-help",
    pathName: "/profile/about",
  },
  {
    title: "关于我们",
    icon: "el-icon-s-help",
    pathName: "/profile/about",
  },
]);

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
    profileContent.value.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    profileContent.value.addEventListener('scroll', handleScroll)
})


</script>
<style scoped lang="scss">
#meHeader {
  background-image: url(../../assets/image/meback.png);
}

.text-container {
  background-color: rgba(0, 0, 0, 0.3); /* 黑色背景，50% 不透明度 */
  color: white; /* 白色文字 */
}
</style>