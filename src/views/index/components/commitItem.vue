<template lang="">
    <div class="flex gap-2">
        <img ref="headerImage" style="width:45px; height:45px;" class="object-cover rounded-full" :src="imgUrl" alt="">

        <div class="flex-1 pb-6 border-slate-900/10 border-b"> 
            <span class="text-sm text-gray-400">{{commitUser.username}}</span>
            <p class="text-base text-slate-700"> 
                {{item.content}}
                <span class="text-sm text-gray-400"> {{item.date}}</span>
            </P>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, inject, reactive} from "vue";
import {IndexDB, userTableStore, User} from "@/stores"
const userDb = userTableStore()

const indexDb: IndexDB = inject('db') as IndexDB;
let imgUrl = ref("");
let commitUser = reactive<User>({} as User)
const props = defineProps({
    item: {
      type: Object,
      required: false,
    },
});

onMounted(() => {
    initData()
    getHeader()
});

const initData = () => {
    let userId = props.item!.userId
    let res =  userDb.getUserById(userId)
    if (res != undefined)  Object.assign(commitUser, res!);
}

const getHeader = () => {
    indexDb.getImage(commitUser.headerImg!).then((res:any) => {
        imgUrl.value = res
    }).catch((err) => {
        console.log(err);
    })
}
</script>
<style lang="">
    
</style>