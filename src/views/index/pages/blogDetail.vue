<template lang="">
    <div class="w-full h-screen overflow-y-auto pb-20">
        <!-- 顶部栏 -->
        <header class="px-2 py-1 sticky top-0 z-50 bg-white">
            <div class="flex justify-between items-center">
                <span @click="back()" class="flex items-center gap-2"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg>
                    <img @click.stop="navigation('otherPage', authorUser.id)" ref="headerImage" style="width:40px; height:40px;" class="object-cover rounded-full" :src="imgUrl" alt="">
                    <span>
                        {{authorUser.username}}
                    </span>
                </span>


                <span style="" class="flex gap-2"> 
                    <button @click="clickButton(1)" class="w-20 border border-red-500 text-red-400 px-3 py-1 rounded-2xl text-sm">关注</button>
                    <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </span>
            </div>
        </header>

        <div class="w-full" style="height:55vh; position: relative;"> 
            <carousel :imgList="note.imagesDataList"></carousel>
        </div>

        <div class='px-2 mt-2'>
            <!-- 标题 -->
            <div class="font-bold text-lg"> 
                <p>{{note.title}}</p>
            </div>
            <!-- 内容 -->
            <div class="py-2"> 
                {{note.content}}
            </div>
            <span class="text-gray-400 text-sm">编辑于 {{note.date}} {{note.place}}</span>
            <div class=" border-t-2 mt-2"></div>
        </div>

        <!-- 评论部分, 先不实现回复 -->
        <div class="p-2 py-8">
            <div class=" text-sm py-2">共 {{note.commentList?.length}} 条评论</div>
            <!-- 每一条评论 -->
            <div class="flex flex-col gap-6"> 
                <commitItemCom :item='item' v-for="(item, index) in note.commentList" :key="index"/>
            </div>
        </div>

        <!-- 写评论 -->
        <div class="fixed bottom-0 w-full bg-white p-2">
            <div class="flex items-center gap-2">
                <input
                    v-model="comment"
                    type="text"
                    placeholder="善于结善缘，恶言伤人心"
                    class="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
                />
                <div class="flex items-center gap-1">
                    <svg v-show="isLike==false" @touchstart="likeOrCollect('like')" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
                    <svg v-show="isLike==true" @touchstart="likeOrCollect('like')" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><path fill="#f44336" d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"/></svg>
                    <span class='text-lg text-gray-500 font-bold'>{{likeNumber}}</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg v-show="isCollect==false" @touchstart="likeOrCollect('collect')" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/></svg>
                    <svg v-show="isCollect==true" @touchstart="likeOrCollect('collect')" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f44336" stroke="#f44336" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"/></svg>
                    <span class='text-lg text-gray-500 font-bold'>{{collectNumber}}</span>
                </div>

                <button class="bg-blue-500 text-white rounded-full p-2" @touchstart="doCommit"> 发送 </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import carousel from "@/components/carousel.vue";
import { ref, onMounted, inject, watch, reactive, computed} from "vue";
import { useRoute} from 'vue-router';
import { navigation, router } from '@/router/index';
import {IndexDB, blogSharesTable, userTableStore, User} from "@/stores"
import commitItemCom from "../components/commitItem.vue"

const indexDb: IndexDB = inject('db') as IndexDB;
const route = useRoute();
const userDb = userTableStore()
let noteId = ref();
let note = ref<blogSharesTable>({} as blogSharesTable);
let curUser = reactive<User>({} as User)
let authorUser = reactive<User>({} as User)

let comment = ref("")
let imgUrl = ref("")
let isLike = ref(false); //是否已经喜欢过
let isCollect = ref(false); //是否已经收藏过
const likeNumber = computed(() => {
    return note.value.likeList?.length || 0;
});
const collectNumber = computed(() => {
    return note.value.collectList?.length || 0;
});

watch(() => route.query.id, (newId) => {
  noteId.value = newId;
  initData();
});

onMounted(() => {
    noteId.value = route.query.id;
    initData();
});

const doCommit = () => {
    note.value.commentList = note.value.commentList || []
    note.value.commentList?.push({
        userId: curUser.id,
        content: comment.value,
        date: new Date().toLocaleDateString()
    })
    comment.value = ""
    indexDb.updataNote(note.value)
    initData();
}

const initData = () =>{
    indexDb.getNoteById(noteId.value).then((res) => {
        note.value = res;
        console.log(note.value);
        Object.assign(authorUser, userDb.getUserById(note.value.author!));
        indexDb.getImage(authorUser.headerImg!).then((res:any) => {
            imgUrl.value = res
        }).catch((err) => {
            console.log(err);
        })
    })
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1)  Object.assign(curUser, res!.data);
    else navigation('login')

    //初始化现在是否已经点赞或者是收藏
    if (curUser.likeList?.includes(noteId.value)) isLike.value = true;
    if (curUser.collectList?.includes(noteId.value)) isCollect.value = true;

}

const likeOrCollect = (type: 'like' | 'collect') => {
    console.log('likeOrCollect', type);
    let res = userDb.likeAndCollect(curUser.id, note.value.author, noteId.value, type);
    //1是表示取消点赞 2是进行点赞
    if (res == null) return;
    if (type == 'like') {
        isLike.value = !isLike.value;
        if (res == true) {
            note.value.likeList.push(curUser.id)

        }else{
            let k = note.value.likeList.indexOf(curUser.id);
            note.value.likeList.splice(k, 1);
        }
    }
    else {
        isCollect.value = !isCollect.value;
        if (res == true) {
            note.value.collectList.push(curUser.id)
        }else{
            let k = note.value.likeList.indexOf(curUser.id);
            note.value.collectList.splice(k, 1);
        }
    }
    indexDb.updataNote(note.value)
}
const back = () => {
    router.go(-1)
}
</script>
<style lang="">
    
</style>