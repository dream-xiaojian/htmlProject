<template lang="">
    <div class="px-2 h-screen w-full bg-gradient-to-b from-red-100 to-white">
        <myHeader bgColor="transparent" title="我的账户"> </myHeader>
        
        <div class="mt-4 text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
            <div class="flex flex-col py-2 gap-3">
                <span class="text-gray-400">账户余额</span>
                <div class=" text-4xl font-bold">{{curUser.score}}<span class="text-lg">点</span></div>
                <div class="w-full flex justify-center">
                    <button @touchstart="goPath" class="btn overflow-hidden relative w-full bg-red-500 text-white py-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
                        <span class="relative" >去充值</span>
                    </button>
                </div>
            </div>
        </div>

        <div class=" mt-4 text-slate-600 text-lg p-4 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
                <div class="flex justify-between py-2 items-center" v-for="(item, index) in settingsList" :key="index">
                        <span>{{item.title}}</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg></span>
                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import myHeader from '@/components/myHeader.vue';
import {navigation} from "@/router"
import { User, userTableStore, IndexDB} from '@/stores/index'
import { onMounted, reactive } from 'vue';

let curUser = reactive<User>({} as User)
const userDb = userTableStore()

const settingsList = [
    {
        title: "充值记录"
    }, {
        title: "消费记录"
    }, {
        title: "换取礼品码"
    }
]

onMounted(() => {
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);

        curUser.score = curUser.score ?? 0
    }
})

const goPath = () =>{
    navigation('reCharge')
}



</script>
<style lang="">
</style>