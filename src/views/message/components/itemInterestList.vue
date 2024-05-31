<template lang="">
     <div class=" py-3 w-full border-b-2 flex items-center justify-between">
        <div class="flex items-center gap-2">
             <span> 
                 <img ref="headerImage" style="width:45px; height:45px;" class="object-cover rounded-full" :src="imgUrl" alt="">
             </span>
             <span>
                {{props.randomUser.username}}
             </span>
        </div>
        <div>
            <button class="border border-red-400 text-red-400 px-4 py-1 rounded-lg text-sm" @click="follow">
                {{props.randomUser.isInter ? "发消息" : "关注"}}
            </button>
        </div>
     </div>
</template>
<script lang="ts" setup>
import { watch , ref, inject, onMounted} from 'vue';
import { IndexDB} from '@/stores/index'
const db: IndexDB = inject('db') as IndexDB;
const emit = defineEmits(["follow"])

const props = defineProps({
    randomUser: {
      type: Object,
      required: false,
    },
});

let imgUrl = ref("")
watch(() => props.randomUser?.headerImg, () => {
    getHeader()
})

onMounted(() => {
    getHeader()
})

const getHeader = () => {
    db.getImage(props.randomUser?.headerImg).then((res:any) => {
        imgUrl.value = res
    })
}

const follow = () =>{
    if (props.randomUser?.isInter != false) return;
    emit("follow", props.randomUser?.id)
}

</script>
<style lang="">
    
</style>