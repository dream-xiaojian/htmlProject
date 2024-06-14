<template lang="">
    <!-- 关注页面 这里后期改成瀑布流-->
        <div class="bg-white">
            <div class="flex mb-5 border-gray-100 pt-2 border-b">
                    <ul class="flex flex-none w-screen items-center px-2 space-x-2 overflow-x-auto">
                            <followItemCom v-for="(item, index) in followUsers" :key="index" :user="item"/>
                    </ul>
            </div>

            <!-- 内容 --这里就不进行瀑布流了-->
            <div class="post-container flex flex-col flex-grow ">
                <followNoteItemCom @click.stop="navigation('blogDetail', item)" v-for="(item, index) in noteIdList" :key="index" :noteId="item"/>
            </div>
        </div>
</template>
<script setup lang="ts">
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
import { ref, inject, onMounted, reactive } from "vue";
import { navigation } from "@/router"
import { User, userTableStore, IndexDB, blogSharesTable} from '@/stores/index'
import followItemCom from "../components/followItem.vue"
import followNoteItemCom from "../components/followNoteItem.vue"

const indexDb: IndexDB = inject('db') as IndexDB;
let page = ref(1); let pageSize = ref(10);
let noteList = ref<blogSharesTable[]>([]);
let curUser = reactive<User>({} as User)
let isDataLoaded = ref(false); // 新增的 ref
let noteIdList = ref([] as number[]); //当前所有展示的noteId（加页时去重）
let noteIdAll = ref([] as number[]); //所有关注用户的所有noteId
let followUsersId = ref([] as number[])
let followUsers = ref([] as User[])

const userDb = userTableStore()

onMounted(() => {
    if (!isDataLoaded.value) {
        indexDb.getNoteByVisible(true, page.value, pageSize.value).then((res) => {
            noteList.value = res;
        });
    }
    initData();
});

const initData = () => {
    //本人信息的获取
    let res = userDb.getCurrentUserMessage()
    if (res?.code != -1) { Object.assign(curUser, res!.data) }

    //获取所有的关注用户
    followUsersId.value = curUser.InterestList ?? []

    getFoolowUserNoteId()

}

const getFoolowUserNoteId = () =>{
    followUsersId.value.forEach((userId: number) => {
        let user = userDb.getUserById(userId as number)
        if (user != null) followUsers.value.push(user); //所有关注用户
    });
    
    console.log('我的所有的关注用户', followUsers.value);
    
    followUsers.value.forEach(user => {
        user.noteList = user.noteList ?? [];
        noteIdAll.value.push(...user.noteList!)
    });

    console.log('我的所有的关注用户的所有noteId', noteIdAll.value);

    noteIdList.value.push(...getRandomNotes(pageSize.value));
    
    console.log("展示的元素", noteIdList.value);
    
}

function getRandomNotes(count: number) {
    // 创建一个新的数组，包含noteIdAll中所有不在noteIdList中的元素
    let availableNotes = noteIdAll.value.filter((id: number) => !noteIdList.value.includes(id));

    // 如果availableNotes中的元素少于count个，直接返回所有元素
    if (availableNotes.length <= count) {
        return availableNotes;
    }

    // 创建一个数组，包含从0到availableNotes.length - 1的所有整数
    let indices = Array.from({length: availableNotes.length}, (_, i) => i);

    // 随机打乱indices数组
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // 从availableNotes中选择前count个元素
    return indices.slice(0, count).map(i => availableNotes[i]);
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
    padding: 0px 10px;
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
