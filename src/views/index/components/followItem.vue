<template lang="">
                    <li class=" flex-none w-20 flex-col space-y-2 flex">
                                <div class="story-ring flex justify-center items-center
                                    bg-gradient-to-tl from-yellow-200 to-orange-500 
                                    rounded-full relative cursor-pointer
                                    hover:from-orange-300 hover:to-red-400
                                    transition-all duration-150 delay-100">
                                    <span @click.stop="navigation('otherPage', props.user.id)" class="block bg-white p-1 rounded-full" href="#">
                                        <img class="w-16 rounded-full"
                                            :src="headerImage">
                                    </span>

                                    <i class="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                                </div>

                                <span class="story-text font-medium w-full text-center">
                                    {{props.user.username}}
                                </span>
                            </li>
</template>
<script setup lang="ts">
import { inject, ref, onMounted, watch} from 'vue';
import { IndexDB, userTableStore } from '@/stores/index'
const userDb = userTableStore()
const db: IndexDB = inject('db') as IndexDB;
import { navigation, router } from '@/router/index';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

let headerImage = ref("")

watch(() => props.user.username, (newVal, oldVal) => {
    initData()
})

onMounted(() => {
    initData()
});

const initData = () => {
    if (props.user.headerImg == null) return;
    db.getImage(props.user.headerImg).then((res: any) => {
        headerImage.value = res
    })
};


</script>
<style lang="">
    
</style>