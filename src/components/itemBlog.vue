<template lang="">
    <div class="flex flex-col overflow-hidden text-slate-600 text-base w-full mx-auto bg-white gap-1">
        <!-- 封面 -->
        <div class="relative block mb-2 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95">
            <img :src="coverImage" class="w-full h-full" />
            <div class="absolute bottom-0 p-5 w-full">
                <!-- <div class="h-32"></div> -->
                <h2 class="text-white text-2xl font-bold leading-tight mb-3 ">{{props.tittle}}</h2>
                <div class="flex w-full items-center text-sm text-white font-medium">
                <div class="flex-1 flex items-center">
                    <div class="rounded-full w-8 h-8 mr-3" :style="{ background: `url(${headerImage}) center`, backgroundSize: 'cover' }"></div>
                    <div>{{userName}}</div>
                </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26"><rect width="26" height="26" fill="none"/><path fill="currentColor" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12"/></svg>
                        {{props.likeNum}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { inject, ref, onMounted } from 'vue';
import { IndexDB, userTableStore } from '@/stores/index'
const db: IndexDB = inject('db') as IndexDB;
let headerImage = ref("")
let coverImage = ref("")
let userName = ref("")

const userDb = userTableStore()

const props = defineProps({
    imgUrl: {
        type: Array,
        required: true,
    },
    tittle: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
    },
    author: {
        type: Number,
        required: true,
    },
    likeNum: {
        type: Number,
        required: true,
    }
});

//这里的数据每次都会加载导致，数据显示的很慢
onMounted(() => {
    db.getImage(userDb.getUserById(props.author)?.headerImg!).then((res: any) => {
        headerImage.value = res
    })
    db.getImage(props.imgUrl[0] as number).then((res: any) => {
        coverImage.value = res
    })
    userName.value = userDb.getUserById(props.author)!.username
})


</script>
<style lang="">

</style>