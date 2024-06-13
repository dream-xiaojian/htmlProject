<template lang="">
    <!-- 关注页面 这里后期改成瀑布流-->
        <div class="bg-white h-full">
                <div class="flex mb-5 border-b pb-5 border-gray-100 py-2 border-b">
                        <!-- Story Bar -->
                        <ul class="flex flex-none w-screen items-center px-2 space-x-2 overflow-x-auto">
                            <!-- Add Story -->
                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <!-- Thumbnail -->
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>

                                    <button class="absolute transition duration-500 bg-white border-gray-400 
                                        h-8 w-8 rounded-full text-white border-2 
                                        border-white flex justify-center items-center opacity-80
                                        hover:opacity-60">
                                    </button>

                                    <i class="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text font-medium">
                                    You
                                </span>
                            </li>

                            <!-- Story #1 -->
                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <!-- Thumbnail -->
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text">
                                    jett
                                </span>
                            </li>

                            <!-- Story #2 -->
                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <!-- Thumbnail -->
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text">
                                    sky
                                </span>
                            </li>

                            

                            <!-- Story #3 -->
                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <!-- Thumbnail -->
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text">
                                    omen
                                </span>
                            </li>

                            <!-- Story #4 -->
                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100 
                                    hover:animate-pulse">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text">
                                    sage
                                </span>
                            </li>

                            <li class="flex-none w-20 flex-col items-center space-y-2">
                                <!-- Ring -->
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100 
                                    hover:animate-pulse">
                                    <a class="block bg-white p-1 rounded-full" href="#">
                                        <img class="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80">
                                    </a>
                                </div>

                                <!-- Story Text -->
                                <span class="story-text">
                                    sage
                                </span>
                            </li>
                        </ul>
                    </div>

        <!-- 内容 --这里就不进行瀑布流了-->
               <!-- Post Section -->
               <div class="post-container flex flex-col flex-grow h-full ">
                        <!-- Post -->
                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">

                            <!-- Post Item -->
                            <img class="h-full w-full rounded-3xl"
                                src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80">

                            <!-- Post Owner -->
                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400">

                                    <div class="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                                        EgoistDeveloper
                                    </div>
                                </a>
                            </div>


                            <!-- Post Counts -->
                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                                    <i class="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2"></i>
                                    23K
                                </div>

                                <div class="flex text-gray-600 font-light text-lg text-gray-50">
                                    <i class="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2"></i>
                                    1.4K
                                </div>

                                <div class="text-gray-600 font-light text-lg text-gray-50 mx-4">
                                    <i class="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3"></i>
                                </div>
                            </div>
                        </div>
                </div>
</div>
</template>
<script setup lang="ts">
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
import { ref, inject, onMounted, reactive } from "vue";
import { navigation } from "@/router"
import { User, userTableStore, IndexDB, blogSharesTable} from '@/stores/index'

const indexDb: IndexDB = inject('db') as IndexDB;
let page = ref(1); let pageSize = ref(10);
let noteList = ref<blogSharesTable[]>([]);
let curUser = reactive<User>({} as User)
let isDataLoaded = ref(false); // 新增的 ref
let noteIdList = ref([]); //当前所有展示的noteId（加页时去重）
let noteIdAll = ref([]); //所有关注用户的所有noteId
let followUsersId = ref([] as number[])
let followUsers = ref([] as User[])

const userDb = userTableStore()

onMounted(() => {
    if (!isDataLoaded.value) {
        indexDb.getNoteByVisible(true, page.value, pageSize.value).then((res) => {
            noteList.value = res;
        });
    }
});

const initData = () => {
    //本人信息的获取
    let res = userDb.getCurrentUserMessage()
    if (res?.code != -1) { Object.assign(curUser, res!.data) }

    //获取所有的关注用户
    followUsersId.value = curUser.InterestList ?? []


}

const getFoolowUserNoteId = () =>{
    followUsersId.value.forEach((userId: number) => {
        let user = userDb.getUserById(userId as number)
        if (user != null) followUsers.value.push(user); //所有关注用户
    });
    
    followUsers.value.forEach(user => {
        noteIdAll.value.push(...user.noteList)
    });
}





</script>
<style lang="scss" scoped>
.red-dot {
    height: 10px;
    width: 10px;
}

.red-dot-count {
    font-size: 8px;
    right: -11px;
    top: -5px;
}

.story-ring {
    padding: 2px;
}

.story-text {
    font-size: 13px;
}

.post-container {
    width: 100vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-right: 10px;
}

.post-container:hover {
    overflow: auto;
    padding-right: 0px;
}

.post-container::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.post-container::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #edf2f7;
}

.post-container::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 100vh;
    border: 3px solid #edf2f7;
}

.post-container::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
}
</style>
