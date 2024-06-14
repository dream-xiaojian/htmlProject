<template lang="">
    <div class="px-2 h-screen w-full bg-gradient-to-b from-red-100/100 to-white">
        <myHeader bgColor="transparent" title="充值"> </myHeader>

        <div class="mt-2 text-slate-600 text-lg p-4 w-full mx-auto bg-transparent rounded-lg flex flex-col gap-2">
            <div class="flex flex-col py-2 gap-3">
                <span class="text-gray-400">账户余额</span>
                <div class=" text-4xl font-bold">{{curUser.score}}<span class="text-lg">点</span></div>
                <div class="w-full flex justify-center">
             
                </div>
            </div>
        </div>

        <div class=" text-slate-600 text-lg px-4 py-2 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
            <div class="flex flex-col py-2 gap-3">
                <span class=" text-stone-600">选择充值金额</span>
                <div class="grid grid-cols-3 gap-2">
                    <div @touchstart="setMoney(index)" v-for="(item, index) in moneys" :key="index" class="p-4 border-gray-300 border rounded-lg flex flex-col justify-center items-center hover:text-red-600 hover:bg-red-200 hover:border-red-500"> 
                        <div class="text-2xl flex items-center">
                            <span>{{item.score}} </span> 
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="#ffe500" d="M4 20.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path fill="#ebcb00" d="M24 .5a20 20 0 1 0 20 20a20 20 0 0 0-20-20m0 37a18.25 18.25 0 1 1 18.25-18.25A18.25 18.25 0 0 1 24 37.5"/><path fill="#fff48c" d="M17.77 7.29a6 1.5 0 1 0 12 0a6 1.5 0 1 0-12 0"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M4 20.5a20 20 0 1 0 40 0a20 20 0 1 0-40 0"/><path fill="#45413c" d="M8 44.79a16 1.5 0 1 0 32 0a16 1.5 0 1 0-32 0" opacity="0.15"/><path fill="#ffaa54" d="M40 25.5c0 .83-1.12 1.5-2.5 1.5s-2.5-.67-2.5-1.5s1.12-1.5 2.5-1.5s2.5.67 2.5 1.5m-32 0c0 .83 1.12 1.5 2.5 1.5s2.5-.67 2.5-1.5s-1.12-1.5-2.5-1.5s-2.5.67-2.5 1.5"/><path fill="#ffb0ca" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M16.47 26.93c.5 8 5.09 11 6.85 12a1.37 1.37 0 0 0 1.36 0c1.76-1 6.35-3.92 6.85-12a1.37 1.37 0 0 0-1.38-1.45h-12.3a1.37 1.37 0 0 0-1.38 1.45"/><path fill="#6dd627" d="M24 32.8c0-1.88 5.65-1.33 5.65.63v8.16a5.65 5.65 0 0 1-11.3 0v-8.16c0-1.96 5.65-2.51 5.65-.63"/><path fill="#46b000" d="M24 32.8c0-1.88-5.65-1.33-5.65.63v2.51c0-2 11.3-2 11.3 0v-2.51c0-1.96-5.65-2.51-5.65-.63"/><path fill="none" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M24 32.8c0-1.88 5.65-1.33 5.65.63v8.16a5.65 5.65 0 0 1-11.3 0v-8.16c0-1.96 5.65-2.51 5.65-.63"/><path fill="#45413c" d="M13.66 20.79V19l-.76-.25a3.21 3.21 0 0 1-.79-.37a1.68 1.68 0 0 1-.53-.59a1.83 1.83 0 0 1-.2-.89a2.23 2.23 0 0 1 .31-1.17a2.25 2.25 0 0 1 .82-.83a2.7 2.7 0 0 1 1.15-.38v-.61a.28.28 0 0 1 .08-.15a.26.26 0 0 1 .2-.07q.2 0 .24.12a1.07 1.07 0 0 1 .05.38v.33a3.38 3.38 0 0 1 1.25.27a.83.83 0 0 1 .6.77a.76.76 0 0 1-.2.55a.62.62 0 0 1-.51.23a1.67 1.67 0 0 1-.55-.13a3.58 3.58 0 0 0-.59-.16v1.42a8.23 8.23 0 0 1 1.21.43a2.1 2.1 0 0 1 .84.68a2 2 0 0 1 .36 1.26a2.44 2.44 0 0 1-.19.95a2.07 2.07 0 0 1-.52.75a2.45 2.45 0 0 1-.78.51a2.88 2.88 0 0 1-.92.22v.34a1.61 1.61 0 0 1 0 .26a.24.24 0 0 1-.07.17a.26.26 0 0 1-.2.07c-.13 0-.21 0-.24-.13a1.13 1.13 0 0 1-.05-.37v-.31a6.14 6.14 0 0 1-1-.12a2.16 2.16 0 0 1-.9-.37a.79.79 0 0 1-.38-.67a.77.77 0 0 1 .2-.54a.67.67 0 0 1 .51-.22a2.85 2.85 0 0 1 .77.19a5 5 0 0 0 .79.22m0-3.49v-1.21a.84.84 0 0 0-.4.23a.6.6 0 0 0-.16.41a.45.45 0 0 0 .14.33a1.55 1.55 0 0 0 .42.24m.58 1.89v1.55a.84.84 0 0 0 .5-.31a.87.87 0 0 0 .19-.54c0-.31-.23-.54-.69-.7m20.42 1.6V19l-.76-.25a3.39 3.39 0 0 1-.79-.37a1.68 1.68 0 0 1-.53-.59a1.83 1.83 0 0 1-.2-.89a2.32 2.32 0 0 1 .31-1.17a2.25 2.25 0 0 1 .82-.83a2.7 2.7 0 0 1 1.15-.38v-.33a1.91 1.91 0 0 1 0-.28a.21.21 0 0 1 .07-.15a.26.26 0 0 1 .2-.07q.19 0 .24.12a1.07 1.07 0 0 1 .05.38v.33a3.38 3.38 0 0 1 1.25.27a.83.83 0 0 1 .6.77a.8.8 0 0 1-.19.55a.65.65 0 0 1-.52.23a1.67 1.67 0 0 1-.55-.13a3.58 3.58 0 0 0-.59-.16v1.42a8.85 8.85 0 0 1 1.22.43a2.07 2.07 0 0 1 .83.68a2 2 0 0 1 .36 1.26a2.44 2.44 0 0 1-.19.95a2.07 2.07 0 0 1-.52.75a2.52 2.52 0 0 1-.77.51a3 3 0 0 1-.93.22v.6a.3.3 0 0 1-.08.17a.26.26 0 0 1-.2.07a.23.23 0 0 1-.24-.13a1.13 1.13 0 0 1-.05-.37v-.31a6.27 6.27 0 0 1-1-.12a2.22 2.22 0 0 1-.9-.37a.79.79 0 0 1-.38-.67a.77.77 0 0 1 .2-.54a.67.67 0 0 1 .51-.22a2.77 2.77 0 0 1 .77.19a5 5 0 0 0 .81.22m0-3.49v-1.21a.84.84 0 0 0-.4.23a.6.6 0 0 0-.16.41a.45.45 0 0 0 .14.33a1.55 1.55 0 0 0 .42.24m.58 1.89v1.55a.84.84 0 0 0 .5-.31a.81.81 0 0 0 .19-.54c0-.31-.23-.54-.69-.7"/><path fill="#c8ffa1" d="M20.96 39.63a3.04 3.04 0 1 0 6.08 0a3.04 3.04 0 1 0-6.08 0"/><path fill="#45413c" d="M23.71 41.65v-1.54L23 39.9a3.31 3.31 0 0 1-.68-.32a1.41 1.41 0 0 1-.46-.51a1.55 1.55 0 0 1-.17-.78a1.94 1.94 0 0 1 .26-1a2 2 0 0 1 .72-.72a2.41 2.41 0 0 1 1-.33v-.29a1.63 1.63 0 0 1 0-.24a.27.27 0 0 1 .07-.14a.25.25 0 0 1 .17 0c.11 0 .18 0 .21.1a1.22 1.22 0 0 1 0 .33v.29a3 3 0 0 1 1.09.24a.73.73 0 0 1 .52.66a.77.77 0 0 1-.17.49a.59.59 0 0 1-.45.2a1.49 1.49 0 0 1-.48-.12a2.5 2.5 0 0 0-.51-.14v1.23a8.08 8.08 0 0 1 1.05.38a1.79 1.79 0 0 1 .73.59a1.74 1.74 0 0 1 .31 1.09a2 2 0 0 1-.61 1.49a2.38 2.38 0 0 1-.68.43a2.41 2.41 0 0 1-.8.2v.52a.26.26 0 0 1-.07.15a.24.24 0 0 1-.17.06a.21.21 0 0 1-.21-.11a1 1 0 0 1 0-.33V43a5.53 5.53 0 0 1-.9-.11a2.08 2.08 0 0 1-.79-.32a.7.7 0 0 1-.28-.57a.63.63 0 0 1 .17-.46a.55.55 0 0 1 .45-.19a2.15 2.15 0 0 1 .66.16a3.42 3.42 0 0 0 .73.14m0-3v-1.09a.73.73 0 0 0-.35.21a.51.51 0 0 0-.14.36a.38.38 0 0 0 .12.28a1.34 1.34 0 0 0 .37.21Zm.5 1.64v1.35a.7.7 0 0 0 .43-.27a.71.71 0 0 0 .17-.47c0-.3-.2-.5-.6-.64Z"/></svg></span> 
                        </div>
                        <span >{{item.money}}￥</span>
                    </div>
                </div>
            </div>
        </div>

        <div class=" mt-3 text-slate-600 text-lg px-4 py-2 w-full mx-auto bg-white rounded-lg flex flex-col gap-2">
            <div class="flex flex-col py-2 gap-3">
                <span class=" text-stone-600 font-semibold">选择支付方式</span>
                <div class=" flex flex-col gap-2 ">
                    <div class="group border-b-2 py-4 w-full flex justify-between items-center">
                        <span class="text-lg flex items-center gap-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#37e14b" fill-rule="evenodd" d="M21.502 19.228C23.026 18.123 24 16.49 24 14.674c0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024c.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914l.139.045a.24.24 0 0 0 .241-.241l-.039-.176l-.326-1.215l-.025-.154a.48.48 0 0 1 .202-.392M8.675 2C3.884 2 0 5.236 0 9.229c0 2.178 1.168 4.139 2.997 5.464a.57.57 0 0 1 .243.471l-.03.184l-.391 1.458l-.047.211c0 .16.13.29.289.29l.168-.054l1.899-1.097a.9.9 0 0 1 .46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012a5.6 5.6 0 0 1-.291-1.771c0-3.641 3.542-6.593 7.911-6.593l.471.012C16.589 4.641 13.002 2 8.675 2m5.686 11.711a.964.964 0 1 1 .001-1.927a.964.964 0 0 1-.001 1.927m4.82 0a.964.964 0 1 1 0-1.928a.964.964 0 0 1 0 1.928M5.783 8.072a1.156 1.156 0 1 1 0-2.312a1.156 1.156 0 0 1 0 2.312m5.783 0a1.156 1.156 0 1 1 0-2.312a1.156 1.156 0 0 1 0 2.312" clip-rule="evenodd"/></svg>
                            微信支付
                        </span>

                        <span class="h-4 w-4 rounded-full  bg-red-500">
                        </span>
                    </div>
                </div>

                <div class=" group border-b-2 py-4 w-full flex justify-between items-center">
                        <span class="text-lg flex items-center gap-2"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="#374be1" d="M21.422 15.358c-3.83-1.153-6.055-1.84-6.678-2.062a12.41 12.41 0 0 0 1.32-3.32H12.8V8.872h4v-.68h-4V6.344h-1.536c-.28 0-.312.248-.312.248v1.592H7.2v.68h3.752v1.104H7.88v.616h6.224a10.972 10.972 0 0 1-.888 2.176c-1.408-.464-2.192-.784-3.912-.944c-3.256-.312-4.008 1.48-4.128 2.576C5 16.064 6.48 17.424 8.688 17.424s3.68-1.024 5.08-2.72c1.167.558 3.338 1.525 6.514 2.902A9.99 9.99 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.983 9.983 0 0 1-.578 3.358m-12.99 1.01c-2.336 0-2.704-1.48-2.584-2.096c.12-.616.8-1.416 2.104-1.416c1.496 0 2.832.384 4.44 1.16c-1.136 1.48-2.52 2.352-3.96 2.352"/></svg>
                            支付宝
                        </span>

                        <span class="h-4 w-4 rounded-full  group-hover:bg-red-500">
                        </span>
                 </div>

            </div>
        </div>

        <div class="mt-2"> 
            <button @touchstart="reCharge" class="mt-2 btn overflow-hidden relative w-full bg-red-500 text-white py-3 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform">
                <span class="relative" >立即充值</span>
            </button>
        </div>

    </div>
</template>
<script setup lang="ts">
import myHeader from '@/components/myHeader.vue';
import {goBack} from "@/router/index"
import {ref, reactive, onMounted} from "vue"
import { User, userTableStore, IndexDB} from '@/stores/index'

let curUser = reactive<User>({} as User)
const userDb = userTableStore()
let needScore = ref(0);

const setMoney = (index: number) => {
    needScore.value = moneys.value[index].score;
}

const reCharge = () => {
    curUser.score = curUser.score! + needScore.value;
    userDb.updataUser(curUser)
    initData();
}

onMounted(() => {
    initData();
})

const initData = () => {
    let res =  userDb.getCurrentUserMessage();
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
        console.log(res);
        
        curUser.score = curUser.score ?? 0
    }
}

const moneys = ref([
    {
        score: 100,
        money: 6
    },
    {
        score: 1200,
        money: 12
    },
    {
        score: 5000,
        money: 50
    },
    {
        score: 10000,
        money: 1000
    },
    {
        score: 30000,
        money: 300
    },
    {
        score: 50000,
        money: 500
    },
])
</script>
<style lang="">
    
</style>