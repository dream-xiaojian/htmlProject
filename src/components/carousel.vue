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
            <swiper-slide class=" w-full h-full" v-for="(item, index) in props.imgList" :key="index">
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
<script setup>
import {ref, onActivated} from "vue"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const props = defineProps({
    imgList: {
      type: Array,
      required: true,
    }
});



const modules = [Navigation, Pagination, Scrollbar, A11y];


onActivated(() => {
    
});

const onSwiper = (swiper) => {
}

const onSlideChange = () => {
};

</script>
<style lang="">
    
</style>