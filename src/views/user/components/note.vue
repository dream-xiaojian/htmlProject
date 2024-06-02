<!-- 笔记部分 -->
<template lang="">
    <div class="bg-slate-100 h-screen w-full">

        <!-- 公开和私密的选择框 -->
        <header v-show="props.hidden==false"  class=" flex items-center justify-center gap-8 w-full p-2 bg-white border-t-2 sticky" style="z-index:999; top:110px;">
            <span  @touchstart="tabIndex=0" :class="{'font-bold text-black':tabIndex==0, 'text-gray-500':tabIndex!=0}">
                公开 - {{noteList1.length}}
            </span>
            <span  @touchstart="tabIndex=1" :class="{'font-bold text-black':tabIndex==1, 'text-gray-500':tabIndex!=1}">
                私密 - {{noteList2.length}}
            </span>
        </header>

        <!-- 没有内容提示 -->
        <div class="w-full" v-show="noteList1.length == 0 && tabIndex == 0">
            <div class="flex justify-center flex-col items-center pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 64 64"><g fill="#3e4347"><path d="M2.3 36.1c-.2-1-.3-2-.2-2.9c0-1.2.3-2.2.9-3.2c.6-1.1 1.6-2 2.7-2.5c1.1-.6 2.5-.8 3.8-.6c1.2.1 2.4.6 3.4 1.3c.9.6 1.7 1.4 2.4 2.3c1.1 1.5 1.9 3.3 2.3 5.4v.3c.2 1.3-.6 2.5-1.9 2.9c-.2.1-.4.1-.6.1c-.8.1-1.5-.1-2.1-.6c-.6-.5-1-1.1-1.1-1.9c-.2-1.4-.5-2.6-1.1-3.5c-.5-.9-1.3-1.6-2.1-1.8c-.3-.1-.7-.1-1 0c-.4.1-.7.4-.9.7c-.3.4-.5.8-.5 1.4c-.1.6-.1 1.2 0 1.8c.2 1.2.6 2.6 1.3 4c.3.6.7 1.3 1.1 2c.4.7.9 1.3 1.3 1.8c1.1 1.3 2.1 2.3 3.2 3.1c1.3.9 2.6 1.5 3.9 1.7c1.3.2 2.8.2 4.3-.3c1.2-.3 1.9.1 2.1.7c.2.5-.1 1.3-1.3 1.7h-.1c-1.8.6-3.7.8-5.4.5c-1.7-.2-3.5-1-5.2-2c-1.4-.9-2.6-2.1-3.9-3.5c-.5-.6-1-1.2-1.4-1.7L6 43c-.6-.7-1.1-1.4-1.5-2.1c-1.2-1.6-1.9-3.2-2.2-4.8m44.4 19.8c1.8 2.3 9.7 0 11-2.6c5.2-10.6 0-15.2 0-15.2l-11 1.5c0 .1-2.2 13.5 0 16.3"/><path d="M31.8 55.9c-1.8 2.3-9.7 0-11-2.6c-5.2-10.6 0-15.2 0-15.2l11 1.5c0 .1 2.3 13.5 0 16.3"/></g><path fill="#fff" d="M34.5 55.2c-.1 1.1-2.6 1.7-5.6 1.4c-3-.3-5.3-1.3-5.3-2.4c.1-1.1 2.4.3 5.4.5c3.1.4 5.6-.5 5.5.5m9.5 0c.1 1.1 2.6 1.7 5.6 1.4c3-.3 5.3-1.3 5.3-2.4c-.1-1.1-2.4.3-5.4.5c-3.1.4-5.6-.5-5.5.5"/><g fill="#4c5359"><path d="M39.2 60.4c2 2.2 8.9 2.1 11.1 0c3-3 2.9-16.7 3-23.3l-13-1.1c.1 0-3.6 21.5-1.1 24.4"/><path d="M39.3 60.4c-2 2.2-8.9 2.1-11.1 0c-3-3-2.9-16.7-3-23.3l13-1.1s3.6 21.5 1.1 24.4"/></g><path fill="#fff" d="m34 43.7l5.3 11.2l5.3-11.2z"/><path fill="#4c5359" d="M59.9 2.2C57.5.8 45.1 7.3 42.6 11.7l17.9 10.6c2.4-4.3 1.7-18.8-.6-20.1"/><path fill="#f7a4a4" d="M56.2 8.8c-.9-.5-8.2 2.8-9.6 5.2l10 5.9c1.3-2.3.4-10.6-.4-11.1"/><path fill="#4c5359" d="M18.7 2.2c-2.4 1.4-3.1 15.7-.6 20.1L36 11.7C33.6 7.4 21 .8 18.7 2.2"/><path fill="#f7a4a4" d="M22.5 8.8c-.9.5-1.8 8.7-.4 11.1L32 14c-1.3-2.3-8.7-5.7-9.5-5.2"/><path fill="#4c5359" d="M39.3 9.4C18.5 9.4 16.5 24 16.5 32.1c0 3.4 10.2 13.9 22.7 13.9C51.8 46 62 35.5 62 32.1C62 24 60 9.4 39.3 9.4"/><path fill="#bfffab" d="M33.5 28.5s-2.4 3.6-6.8 2.5s-4.6-5.4-4.6-5.4s2.4-3.6 6.8-2.5c4.4 1.2 4.6 5.4 4.6 5.4"/><path fill="#93e67f" d="M33 26.7S30.9 29 28 29c-3.1 0-5-4.4-5-4.4s2.1-2.4 5.8-1.4c3.5.8 4.2 3.5 4.2 3.5"/><path fill="#4c5359" d="M29.8 26.6c0 4.9-2.4 4.9-2.4 0s2.4-4.9 2.4 0"/><path fill="#bfffab" d="M45.1 28.5s2.4 3.6 6.8 2.5s4.6-5.4 4.6-5.4s-2.4-3.6-6.8-2.5c-4.4 1.2-4.6 5.4-4.6 5.4"/><path fill="#93e67f" d="M45.5 26.7s2.1 2.3 5 2.3c3.1 0 5-4.4 5-4.4s-2.1-2.4-5.8-1.4c-3.5.8-4.2 3.5-4.2 3.5"/><path fill="#4c5359" d="M48.7 26.6c0 4.9 2.4 4.9 2.4 0c.1-4.9-2.4-4.9-2.4 0"/><path fill="#fff" d="M45.9 32.5c-2-1.5-4.2-6.5-6.6-6.5s-4.7 5-6.6 6.5c-3.1 2.4-11.5 5.1-11.5 5.1s8.9 7.6 18.1 7.6c9.2 0 18.1-7.6 18.1-7.6s-8.4-2.7-11.5-5.1"/><g fill="#4c5359"><path d="M45.7 39.3c-.7.4-1.6.6-2.4.6c-.8-.1-1.6-.3-2.2-.8c-.6-.5-1.1-1.2-1.2-1.9l-.6-3.3l-.6 3.3c-.1.8-.6 1.4-1.2 1.9s-1.4.8-2.2.8c-.9 0-1.7-.1-2.4-.6c-.7-.4-1.4-1.1-1.7-2c0 1 .6 1.9 1.3 2.5c.7.6 1.8 1 2.7 1.1c1 .1 2-.2 2.9-.8c.5-.3.8-.7 1.2-1.2c.3.5.7.9 1.2 1.2c.9.6 1.9.9 2.9.8c1 0 2-.4 2.7-1.1c.8-.6 1.3-1.6 1.3-2.5c-.3.9-.9 1.6-1.7 2"/><path d="M42.4 33.1c-.6-.7-2.5-.8-3.1-.8c-.6 0-2.5.1-3.1.8c-.4.5-.1 1.8 1.1 3c.7.7 1.4.9 2 .9c.6 0 1.3-.2 2-.9c1.2-1.2 1.5-2.5 1.1-3"/></g><path fill="#fff" d="M39 59.6c0 1.1-2.3 1.9-5.2 1.9c-2.9 0-5.2-.9-5.2-1.9c0-1.1 2.3.1 5.2.1c2.8 0 5.2-1.1 5.2-.1m10.9 0c0 1.1-2.3 1.9-5.2 1.9c-2.9 0-5.2-.9-5.2-1.9c0-1.1 2.3.1 5.2.1c2.9 0 5.2-1.1 5.2-.1"/><path fill="#3e4347" d="m29.6 61.2l1.4-2.4l-.4 2.8zm3.5.8l.5-3.3l.5 3.3zm3.9-.4l-.4-2.6l1.4 2.3zm11 0l-.4-2.8l1.4 2.4zm-3.6.4l.5-3.3l.5 3.3zm-3.9-.7l1.4-2.3l-.4 2.6z"/></svg>
                <span class="py-2 text-gray-600">亲爱的小猫同志，发一张图，分享你的个人笔记</span>
                <button class=" mt-6 border border-gray-400 text-black px-6 py-2 rounded-2xl text-sm">去分享</button>
            </div>
        </div>

        <div class="w-full" v-show="noteList2.length == 0 && tabIndex == 1">
            <div class="flex justify-center flex-col items-center pt-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 36 36"><path fill="#ffcc4d" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7c-.674-1.246-7.404 1.688-10 3.7c0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3C-1 4 2 13 2 13C1 15 .625 16.66.266 19.929C-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5c4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5c.343-.63 1.129-3.487.734-7.071"/><path fill="#e75a70" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3s-3-2-3-3s-.001-1.5 3-1.5"/><path fill="#f18f26" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8m32 0c-.447-1.342-5.64 1-6.64 2c0 0 4.64 3 5.64 6c0 0 2-5 1-8"/><path fill="#ffcc4d" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603s-2.066-4-2.066-5m26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603s2.066-4 2.066-5"/><path fill="#fee7b8" d="M.701 25a.5.5 0 0 1-.31-.892c.162-.127 4.02-3.12 10.648-2.605c.275.02.481.261.46.536c-.021.275-.257.501-.537.46c-6.233-.474-9.915 2.366-9.951 2.395a.51.51 0 0 1-.31.106m8.868-4.663a.512.512 0 0 1-.149-.022c-4.79-1.497-8.737-.347-8.777-.336a.499.499 0 1 1-.288-.957c.173-.052 4.286-1.247 9.362.338a.5.5 0 0 1-.148.977M35.299 25a.5.5 0 0 0 .31-.892c-.162-.127-4.02-3.12-10.648-2.605a.499.499 0 0 0-.46.536c.021.275.257.501.537.46c6.233-.474 9.915 2.366 9.951 2.395a.51.51 0 0 0 .31.106m-8.868-4.663c.049 0 .1-.007.149-.022c4.79-1.497 8.737-.347 8.777-.336a.499.499 0 1 0 .288-.957c-.173-.052-4.286-1.247-9.362.338a.5.5 0 0 0 .148.977"/><path fill="#292f33" d="M28.023 24.191C27.046 24.383 23 26 18 26s-9.046-1.617-10.023-1.809C7 24 6.885 25.264 7.442 27.132C8 29 11 33 18 33s10-4 10.558-5.868c.557-1.868.442-3.132-.535-2.941"/><path fill="#f5f8fa" d="M8 25s5 2 10 2s10-2 10-2s-.5 3-1.5 3s-1.5-1-1.5-1s-4 2-7 2s-7-2-7-2s-.5 1-1.5 1S8 25 8 25"/><path fill="#292f33" d="M28.416 17.723C28.355 17.632 26.901 15.5 24 15.5c-2.9 0-4.355 2.132-4.416 2.223a.499.499 0 0 0 .071.638a.504.504 0 0 0 .643.042c.012-.01 1.262-.903 3.702-.903c2.426 0 3.674.881 3.702.901a.5.5 0 0 0 .714-.678m-12 0C16.355 17.632 14.901 15.5 12 15.5c-2.9 0-4.355 2.132-4.416 2.223a.5.5 0 0 0 .713.68c.013-.01 1.262-.903 3.703-.903c2.426 0 3.674.881 3.702.901a.5.5 0 0 0 .714-.678M31.001 16a.998.998 0 0 1-.801-.4c-2.641-3.521-6.061-3.599-6.206-3.6a1.002 1.002 0 0 1-.991-1.005A.997.997 0 0 1 24 10c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6M4.999 16a1 1 0 0 1-.799-1.6C7.462 10.05 11.816 10 12 10a1 1 0 0 1 .004 2c-.156.002-3.569.086-6.205 3.6a.995.995 0 0 1-.8.4"/><path fill="#5dadec" d="M27 19c5 2 9 5 9 10c0 4-3 4-3 4c-6 0-2-8-6-14M9 19c-5 2-9 5-9 10c0 4 3 4 3 4c6 0 2-8 6-14"/></svg>
                <span class="py-2 text-gray-600">没有任何的私密哦</span>
                <button class=" mt-6 border border-gray-400 text-black px-6 py-2 rounded-2xl text-sm">去分享</button>
            </div>
        </div>

        <!-- 有内容进行展示 -->
        <div class="w-full" v-show="tabIndex==0">
            <div class="w-full p-2" v-show="noteList1.length > 0">
                <waterfulLayoutVue :items="noteList1" :columnsCount="2"> 
                    <template #default="{ item }">
                        <div>
                            <itemBlogVue :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length"> </itemBlogVue>
                        </div>
                    </template>
                </waterfulLayoutVue>
            </div>
        </div>
        <div class="w-full" v-show="tabIndex==1">
            <div class="w-full p-2" v-show="noteList2.length > 0">
                <waterfulLayoutVue :items="noteList2" :columnsCount="2"> 
                    <template #default="{ item }">
                        <div>
                            <itemBlogVue :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length"> </itemBlogVue>
                        </div>
                    </template>
                </waterfulLayoutVue>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref, inject, onMounted, reactive, watch} from 'vue';
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
import { User, userTableStore, IndexDB} from '@/stores/index'
import { navigation } from '@/router/index';

const userDb = userTableStore()
let curUser = reactive<User>({} as User)
const db: IndexDB = inject('db') as IndexDB;
const pageSize1 = 10; const page1 = ref(1);
const pageSize2 = 10; const page2 = ref(1);

let noteList1 = ref([])
let noteList2 = ref([])
let tabIndex = ref(0); //默认公开的

onMounted(() => {
    initData()
})

const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    hidden: { //是否是本人看自己的 --别人也可以看，那就要控制一下
        type: Boolean,
        default: false,
    }
});

watch(() => props.id, (newVal, oldVal) => {
    initData()
})

const initData = () =>{
    //基本信息的获取
    if (props.id == null) return;
    let res =  userDb.getUserById(parseInt(props.id))
    console.log('当前用户', res);
    
    if (res != null) {
        Object.assign(curUser, res);
    }

    getPublicNote()
    if (props.hidden == false) getPrivacyNote()
}

const getPublicNote = () => {
    db.getMyNote(curUser.id, true, page1.value, pageSize1).then((res:any) => {
        noteList1.value = res;
    })
}

const getPrivacyNote = () => {
    db.getMyNote(curUser.id, false, page2.value, pageSize2).then((res:any) => {
        noteList2.value = res;
        console.log(noteList2.value);
        
    })
}

</script>
<style lang="">
    
</style>