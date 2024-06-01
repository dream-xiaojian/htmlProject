<template lang="">
    <div class="w-full h-screen overflow-y-auto">
        <header class="py-2 px-2 border-2">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center gap-1">
                    <span @touchstart="back()"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg>
                    </span>
                    <img :src="meHeaderImg" ref="headerImage" style="width:33px; height:33px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="">
                    <span class="text-base">{{whoUser.username}}</span>
                </div>

                <div>
                    <svg width="24" height="24" fill="none" aria-hidden="true"><path d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
            </div>
        </header>
        <div class='w-full'>
            <chatDetail />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, inject, watch, reactive} from "vue";
import { useRoute, useRouter} from 'vue-router';
import robotLogin from "@/assets/image/robot.svg"
import {IndexDB, User, userTableStore} from "@/stores/index";
import chatDetail from "@/views/chat/pages/chatDetail.vue";

const route = useRoute();
const userDb = userTableStore()
const router = useRouter(); //路由实例，操作路由
const db = inject('db') as IndexDB;
let whoId = ref();
let whoUser = reactive<User>({} as User)
let meHeaderImg = ref(); //发送方头像

watch(() => route.query.whoId, (newId: any) => {
    whoId.value = newId; 
});

onMounted(() => {
    //还需要聊天对象的信息
    whoId.value = route.query.whoId;
    userDb.getUserById(whoId.value)
    initData()
      
});
const initData = () => {
    let res = userDb.getUserById(parseInt(whoId.value))
    if (res != undefined) {
        Object.assign(whoUser, res!);
    }
    
    db.getImage(whoUser.headerImg as number).then((res) => {
        if (res != undefined) {
            meHeaderImg.value = res;
        }
    })

}

const back = () => {
    router.go(-1);
}

</script>
<style lang="">
    
</style>