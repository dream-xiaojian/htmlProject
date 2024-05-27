<template lang="">
        <div class=" py-3 w-full border-b-2 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <span> 
                        <img ref="headerImage" style="width:50px; height:50px;" class="object-cover rounded-full" :src="imgUrl" alt="">
                    </span>
                    <span class="flex flex-col gap-1">
                        <span class=" text-lg font-semibold">{{props.username}}</span>
                        <span class=" text-gray-400 text-md">{{type=="like"?"赞了你的笔记":"收藏了你的笔记"}}--{{title}}</span>
                    </span>
                </div>
                <div>
                    <button class="border border-red-400 text-red-400 px-4 py-1 rounded-lg text-sm">关注</button>
                </div>
        </div>
</template>
<script setup lang="ts">
import { User, userTableStore, IndexDB, blogSharesTable} from '@/stores/index'
import {onMounted, ref, inject} from "vue"
const db: IndexDB = inject('db') as IndexDB;

const props = defineProps({
    userId: {
      type: Number,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    headerImageId: {
      type: Number,
      required: true,
    },
    type:{
        type: String,
        required: true,
    }
});

let imgUrl = ref("")
onMounted(() => {
    db.getImage(props.headerImageId).then((res:any) => {
        imgUrl.value = res
    })
})

</script>
<style lang="">
    
</style>