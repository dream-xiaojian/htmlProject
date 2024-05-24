<template lang="">
    <div class="flex flex-col overflow-hidden text-slate-600 text-base w-full mx-auto bg-white shadow-md gap-1">
        <!-- 封面 -->
        <div class=" h-4/6"> 
              <img
                    alt="nature"
                    class=" h-full w-full object-cover object-center"
                        :src="props.imgUrl"
              />
        </div>
        <div class="px-2"> 
            <!-- 标题 -->
            <div class="leading-5 text-black text-base"> 
                <span class="leading-5 text-black text-sm">{{props.tittle}}</span>
            </div>
            <!-- 发布人, 收藏 -->
            <div class=" flex justify-between items-center mt-1"> 
                <span><img style="width:20px; height:20px;" class="object-cover rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt=""></span>

                <span class="flex items-center"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg>
                    <span>{{props.likeNum}}万</span>
                </span>
    
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {computed } from 'vue';


const props = defineProps({
    imgUrl: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    autorImgurl: {
      type: String,
      required: true,
    },
    likeNum:{
      type: Number,
      required: true,
    }
});

const trsNumber = computed(() => {

 });
</script>
<style lang="">
    
</style>