<template lang="">
    <div class="w-full h-full relative">
        <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="false"
            :centeredSlides="true"
            :pagination="{
                clickable: true,
            }"
            :navigation="false"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="mySwiper w-full h-full"
            ref="mySwiper"
        >
            <swiper-slide class=" w-full h-full" v-for="(item, index) in imageDateUrlList" :key="index">
                <div class="flex w-full h-full">
                    <img
                        style="  
                            height: 100%;
                            width: 100%;
                            object-fit: cover;
                            touch-action: none;"
                        :src="item"
                    />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts" setup >
import {ref, inject, watch} from "vue"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {IndexDB, userTableStore} from '@/stores/index'
const db: IndexDB = inject('db') as IndexDB;
let imageDateUrlList = ref([])


const props = defineProps({
    imgList: {
      type: Array,
      required: true,
    }
});



const modules = [Navigation, Pagination, Scrollbar, A11y];

watch(() => props.imgList, (newVal) => {
    initData(newVal as number[])
});

const initData = (newVal: number[]) =>{
    db.getImagesByIds(newVal).then((res:any) => {
        imageDateUrlList.value = res
    })
}

const onSwiper = (swiper:any) => {
}

const onSlideChange = () => {
};

</script>
<style lang="">
    
</style>