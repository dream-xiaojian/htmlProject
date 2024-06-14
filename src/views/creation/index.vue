<template lang="">
    <!-- 创作中心 -->
    <div class="w-full px-2 h-screen overflow-y-auto">
        
        <!-- blog 图片 -->
        <div class="p-2 mt-2 scroll-smooth overflow-x-auto flex items-center gap-2">
            <div v-for="(item, index) in blogImagesList">
                <div style="width:10rem; height:10rem">
                    <uploadImgCom @file-changed="file => handleFileChanged(index, file)"> </uploadImgCom>
                </div> 
            </div> 
        </div>


        <div class="mt-2">
            <form>
                <!-- 标题 -->
                <input v-model="blogNote.title" class="w-full p-2 mb-2 outline-none text-xl" spellcheck="false" placeholder="填写标题会有更多的赞哦~" type="text">
                
                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"> </div>
                <!-- 内容 -->
                <textarea v-model="blogNote.content" class="w-full sec p-3 h-60 outline-none" spellcheck="false" placeholder="添加正文"></textarea>


                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"></div>

                <!-- 地点 -->
                <div @click="openDrawer(2)"  class="w-full flex justify-between items-center py-3" style="font-size:16px;">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243"/><path d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z"/><path d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"/></g></svg>
                        <label for="permission1">{{blogNote.place.length == 0 ? '添加地点' : blogNote.place}}</label>
                    </span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                </div>
                <!-- 观看权限 -->
                <div @click="openDrawer(0)" class="w-full flex justify-between items-center py-3" style="font-size:16px;">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                        <label for="permission1">{{blogNote.visible == 1 ? '公共可见' : '仅自己可见的'}}</label>
                    </span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                </div>
                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"> </div>


            </form>

        </div>

        <div class="fixed justify-between bottom-0 left-0 w-full flex items-center py-3 px-2">
            <span @click="openDrawer(1)"> 
                AI编写文稿
            </span>
            <button
                @click="publishNote"
                class="text-base middle none center mr-4  rounded-3xl bg-red-500 py-2 px-28 font-sans font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">
                发布笔记
            </button>
        </div>

        <!-- //蒙版 -->
        <div v-show="drawer.showDrawer" @click="drawer.showDrawer=false" style="z-index:999" class="mask"></div>
               
        <transition name="slide-up">
            <div v-if="drawer.showDrawer" style="z-index:999" class="drawer p-4 bg-gray-100 ">
                <!-- 选择 -->
                <div v-show="drawer.type == 0" class=" text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                        <div @click="changeVisible(index)" class="flex justify-between py-2 items-center" v-for="(item, index) in visibleList" :key="index">
                            <span>{{item}}</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg></span>
                         </div>
                </div>

                <div v-show="drawer.type == 2" class=" text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                        <div class="flex items-center">
                            <span @click="getLocal"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243"/><path d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z"/><path d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"/></g></svg> </span>
                            <input v-model="blogNote.place" id="username" class=" text-lg rounded-md pl-2 w-full outline-none border-none p-2" type="text" name="username" placeholder="请您输入您的发布地址" />
                        </div>
                </div>

                <!-- ai问答 -->
                <div v-show="drawer.type == 1" class=" text-slate-600 text-lg w-full mx-auto rounded-lg flex flex-col gap-2">
                    <div class="px-2 relative mt-4">
                    <!-- 聊天消息预览区域 -->
                    <div id="msgBox" class="flex gap-5 flex-col h-full overflow-x-auto mb-4">
                        <div v-for="(item, index) in mssageList" :key="index">
                            <!-- 数据本身就是按时间进行添加的 -->
                            <!-- //右边本人 -->
                            <div class="flex gap-3 items-end justify-end" v-if="item.whoId == curUser.id">
                                <div class="bg-blue-500 p-3 rounded-lg">
                                <p class="text-sm text-white">{{item.content}}</p>
                                </div>
                                <img :src="userImg" alt="Other User Avatar" class="w-8 h-8 rounded-full" />
                            </div>

                            <!-- 左边接受方 -->
                            <div class="flex gap-3 items-end justify-start" v-else>
                                <img :src="whoHeaderImg" alt="Other User Avatar" class="w-8 h-8 rounded-full" />
                                <div class="bg-blue-500 p-3 rounded-lg">
                                    <p class="text-sm text-white">{{item.content}}</p>
                                </div>
                                <span @click="copyText(index)" class="rounded-lg  bg-gray-300 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><g fill="none" stroke="black" stroke-linecap="round" stroke-width="1.5"><path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"/><path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"/></g></svg>
                                </span>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                    <!-- 消息输入区域 -->
                    <div class="mt-4 flex flex-col w-full fixed bottom-3 left-0 px-2">
                        <span class="absolute bottom-12 text-sm text-gray-400">当前积分值(每次使用将会消耗5点积分值): {{curUser.score}}</span>
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
                </div>
            </div>
        </transition>

       
    </div>
</template>
<script setup lang="ts">
import uploadImgCom from "@/components/uploadImg.vue"
import { reactive, ref, onMounted, computed} from "vue";
import { navigation } from '@/router/index';
import { blogSharesTable, IndexDB, userTableStore, User } from "@/stores/index"
import { getTime } from "@/utils/time"
import { inject } from 'vue'
import robotLogin from "@/assets/image/robot.svg"

const db: IndexDB = inject('db') as IndexDB;
let curUser = reactive<User>({} as User)
const userDb = userTableStore()
const visibleList = ref(['公开可见', '仅自己可见的'])
let isDisabled = computed(() => curUser.score! < 5);
let drawer = reactive({
    showDrawer: false,
    type: 0
});

let blogNote = reactive<blogSharesTable>({
    title: "",
    content: "",
    visible: 1,
    imagesDataList: [],
    author: 0,
    date: "",
    place: "",
    likeList: [],
    commentList: [],
    collectList: []
} as blogSharesTable);
let blogImagesList = ref<(File | null)[]>([null]);
type messageType = {
    whoId: number,
    content: string,
}
let userImg = ref("");
let whoHeaderImg = ref("");
let msg = ref("");
let mssageList = ref<messageType[]>([]);

const getLocal = () => {
    blogNote.place = "江西省南昌市青山湖区";
}

const sentMsg = () => {
    if (msg.value.length == 0) return;
    mssageList.value.push({ whoId: curUser.id, content: msg.value });
    msg.value = "";
    
    curUser.score! -= 5;
    userDb.updataUser(curUser);

    //虚拟一个回复
    setTimeout(() => {
        mssageList.value.push({ whoId: -1, content: '在这个瞬息万变的世界，每一步都是新的开始。我们相信，无论您的梦想多么宏伟，或是目标多么遥远，都有一条通往成功的路径。我们在这里，为您提供支持，为您的旅程增添色彩。' });
    }, 1000);
}

const changeVisible = (index: number) => {
    blogNote.visible = index + 1;
    drawer.showDrawer = false;
}

const openDrawer = (index: number) => {
    drawer.showDrawer = true;
    drawer.type = index;
}

const handleFileChanged = (index: number, file: File) => {
    blogImagesList.value[index] = file;
    if (index == blogImagesList.value.length - 1) blogImagesList.value.push(null);
}

//发布笔记
const publishNote = async () => {
    if (blogNote.title.length == 0 || blogNote.content.length == 0) {
        console.log('标题和内容不能为空');
        return;
    }
    blogNote.imagesDataList = await convertFilesToDataUrlsId(blogImagesList.value) as number[];
    blogNote.author = curUser.id; //绑定唯一的id
    blogNote.date = getTime();

    blogNote.place = blogNote.place.length == 0 ? '未知喵星' : blogNote.place;
    db.storeBlog(blogNote).then((res: number) => {
        if (!curUser.noteList) curUser.noteList = [];
        curUser.noteList.push(res);
        userDb.updataUser(curUser);
        reset();

    }).catch((err: DOMException) => {
        console.log("发布失败", err);
    })
}

const copyText = (index:number) =>{
    //复制文本
    let text = mssageList.value[index].content;
    navigator.clipboard.writeText(text).then(() => {
        console.log('复制成功');
    }).catch((err) => {
        console.log('复制失败', err);
    });
}

async function convertFilesToDataUrlsId(files: (File | null)[]) {
    //删除最后一个null
    files = files.slice(0, files.length - 1);
    const promises = files.map(file => {
        if (file !== null) {
            return db.storeImage(file);
        }
        return Promise.resolve(null);
    });

    // 同步等待所有图片转换完成
    const dataUrlsId = await Promise.all(promises);
    return dataUrlsId;
}

onMounted(() => {
    //个人信息加载
    let res = userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
    } else {
        navigation('login')
    }

    db.getImage(curUser.headerImg!).then((res) => {
        userImg.value = res;
        whoHeaderImg.value = robotLogin;
    });
})

//重置数据
const reset = () => {
    console.log('数据清空');
    let obj: blogSharesTable = {
        title: "",
        content: "",
        visible: 1,
        imagesDataList: [],
        author: 0,
        date: "",
        place: "",
        likeList: [],
        commentList: [],
        collectList: []
    }
    Object.assign(blogNote, obj);

    blogImagesList.value.splice(0, blogImagesList.value.length);
    blogImagesList.value.push(null);
    navigation('profile');
}

</script>
<style lang="scss" scoped>
.drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
}

.mask {
    top: 0%;
    left: 0%;
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
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