<template lang="">
    <div style="z-index:999" class="relative p-2 h-screen overflow-y-auto w-full flex flex-col gap-3">

        <!-- 头像部分 -->
        <div class="w-full flex justify-center items-center"> 
            <div class=" relative flex flex-col items-center justify-center gap-2"> 
                <img ref="headerImage" style="width:104px; height:104px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                <span @click="editSome('headerImg')" class="absolute bottom-0 right-0 "><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"/></svg></span>
            </div>
        </div>

        <!-- 基本信息部分 -->
        <div class="text-slate-600 text-base p-4 w-full mx-auto flex flex-col gap-4">
               <div @click="editSome(item)" class="flex justify-between items-center border-b-2 text-base py-2" v-for="(item, index) in keyList" :key="index"> 
                    <div style="max-width:20%">{{keyMap[item]}}</div>
                    <div class="flex justify-between items-center gap-2 "  style="max-width:80%">
                         <span class="" v-if="curUser[item] != null">{{curUser[item]}}</span>
                         <span v-else class="text-gray-400">{{tips[item]}}</span>
                         <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                    </div>
                 </div>
        </div>

        <!-- 修改区 -->
        <transition name="slide-up">
            <div v-if="editData.showDrawer" style="z-index:999" class="drawer bg-slate-100 p-2">
                <!-- 顶部栏 -->
                <header class=" text-lg flex items-center justify-between px-2 py-1">
                    <span class=" text-gray-400" @click="editData.showDrawer=false">取消</span>
                    <span class=" font-bold">{{editData.editTittle}}</span>
                    <span class=" text-red-400" @click="updataUser">保存</span>
                </header>
                <!-- 修改区域 根据不同的类型显示不同的修改内容 -->
                <div class="mt-4">
                    <div v-show="editData.type == 'username' || editData.type == 'email' || editData.type == 'resume'"> 
                        <input v-model="curUser[editData.type]" id="username" class=" text-lg rounded-md pl-2 w-full outline-none border-none p-2" type="text" name="username" :placeholder="tips[editData.type]" />
                    </div>

                    <div v-show="editData.type == 'backgroundImg'">
                        <div class="w-full h-56 bg-white p-4 rounded-lg"> 
                            <uploadImgCom @file-changed="uploadImg" :tailor="false"> </uploadImgCom>
                        </div>
                    </div>
                    <div v-show="editData.type == 'headerImg'">
                        <div class="w-full flex justify-center items-center bg-white p-4 rounded-lg"> 
                            <div class="w-full h-56 "> 
                                <uploadImgCom @file-tailor-changed="uploadImg" :tailor="true"> </uploadImgCom>
                            </div>
                        </div>
                    </div>

                    <!-- 性别，年龄，所在地 -->
                    <div v-show="editData.type == 'sex'"> 
                        <input v-model="curUser[editData.type]" id="username" class=" text-lg rounded-md pl-2 w-full outline-none border-none p-2" type="text" name="username" :placeholder="tips[editData.type]" />
                    </div>

                    <div v-show="editData.type == 'age'"> 
                        <input v-model="curUser[editData.type]" id="username" class=" text-lg rounded-md pl-2 w-full outline-none border-none p-2" type="text" name="username" :placeholder="tips[editData.type]" />
                    </div>

                    <div v-show="editData.type == 'place'"> 
                        <input v-model="curUser[editData.type]" id="username" class=" text-lg rounded-md pl-2 w-full outline-none border-none p-2" type="text" name="username" :placeholder="tips[editData.type]" />
                    
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import { User, userTableStore, IndexDB} from '@/stores/index'
import { navigation } from '@/router/index';
import uploadImgCom from "@/components/uploadImg.vue"
import { inject } from 'vue'
const db: IndexDB = inject('db') as IndexDB;

const userDb = userTableStore();
const headerImage = ref();
const keyMap = {
    headerImg: "头像",
    username: "姓名",
    email: "邮箱",
    resume: "简介",
    sex: "性别",
    age: "年龄",
    place: "所在地",
    backgroundImg: "背景图"
}

//空的情况的提示
const tips = {
    headerImg: "美丽的头像是一个美丽的开始",
    username: "请您输入您的姓名",
    email: "请您编辑你的邮箱",
    resume: "有趣的简历可以吸引其它小猫",
    sex: "请您选择您的性别吧",
    age: "请您输入您的年龄",
    place: "编辑您的所在地区",
    backgroundImg: "背景图",
}

let curUser = reactive<User>({} as User)
let keyList = ref<String[]>([])
let editData = reactive({
    showDrawer: false,
    editTittle: "",
    type: ""
})
let imageFile: File | null = null

//文件上传
const uploadImg = (file: any) => {
    imageFile = file  
}

//启动编辑页
const editSome = (type: string) => {
    editData.showDrawer = true;
    editData.editTittle = "编辑" + keyMap[type as keyof typeof keyMap];
    editData.type = type;
}

//更新数据
const updataUser = () => {
    
    //基础数据的更新
    userDb.updataUser(curUser)
    if (editData.type != 'backgroundImg' && editData.type != 'headerImg')
        editData.showDrawer = false;
    //图片类型的更新
    if (editData.type == 'backgroundImg' || editData.type == 'headerImg') {
        if (imageFile == null) return;

        switch (editData.type) {
            case 'backgroundImg':
                db.storeImage(imageFile, curUser.backgroundImg).then(res => {
                    curUser[editData.type as 'backgroundImg'] = res;
                    editData.showDrawer = false;
                    userDb.updataUser(curUser);
                    imageDataInit()
                })
                break;
            case 'headerImg':
                db.storeImage(imageFile, curUser.headerImg).then(res => {
                    curUser[editData.type as 'headerImg'] = res;
                    editData.showDrawer = false;
                    userDb.updataUser(curUser);
                    imageDataInit()
                })
                break;
        }
    }
    initData();
}

onMounted(() => {
    initData();
})

const initData = () =>{
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        //对于一个curUser是指向一个响应式对象
        //如果直接curUser = res.data,则curUser不是响应式对象，指向的就不是相应式对象
        //通过assign给curUser的每一个属性赋值，这样curUser就是一个响应式对象
        Object.assign(curUser, res!.data);
        keyList.value = Object.keys(keyMap) as any
        imageDataInit();
    }else {
        navigation('login')
    }
}

const imageDataInit = () => {
    if (curUser.headerImg != null) {
        //背景图片的获取
        db.getImage(curUser.headerImg!).then((res) => {
            headerImage.value.src = res;
        }).catch((err:DOMException) => {
            console.log("获取数据失败", err);
        });
    }
}
</script>
<style lang="scss" scoped>
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