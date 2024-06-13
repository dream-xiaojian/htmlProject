<template>
<div class="w-full h-full relative">
        <swiper
            :slidesPerView="1"
            :spaceBetween="0"
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
                <swiper-slide class="w-full h-screen">
                    <page1/>
                </swiper-slide>

                <swiper-slide class="w-full h-screen">
                    <page2/>
                </swiper-slide>

                <swiper-slide class="w-full h-screen">
                    <page3/>
                </swiper-slide>

                <swiper-slide class="w-full h-screen">
                    <page4/>
                </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import {ref, inject, watch} from "vue"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {IndexDB, userTableStore} from '@/stores/index'
import page1 from "./page/GuidePage.vue"
import page2 from "./page/GuidePage1.vue"
import page3 from "./page/GuidePage2.vue"
import page4 from "./page/GuidePage3.vue"



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

<style>
/* Swiper 样式 */

</style>
