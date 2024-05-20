<template lang="">
    <div style="position:absolute; z-index:999" class="p-2 w-full flex flex-col gap-3">
        <!-- 头像部分 -->
        <div class="w-full flex justify-center items-center"> 
            <div class="flex flex-col items-center justify-center gap-2"> 
                <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white" src="../../../assets/image/th.jpg" alt="" />
                <span>点击更换图片</span>
            </div>
        </div>
        <!-- 基本信息部分 -->
        <div class="text-slate-600 text-base p-4 w-full mx-auto bg-white rounded-xl shadow-lg flex flex-col gap-4">
               <div class="flex justify-between items-center" v-for="(item, index) in keyList" :key="index"> 
                    <div style="max-width:20%">{{keyMap[item]}}</div>
                    <div class="flex justify-between items-center gap-2" style="max-width:80%">
                         <span><input v-model="person[item]" type="text" name="first-name" id="first-name" class="block w-full border-0 border-b py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6" /></span>
                         <span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                    </div>
               </div>
        </div>

               
        <div class="w-full flex justify-center items-center">
            <button class="px-6 py-2 text-lg text-white duration-150 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700"> 保存编辑</button></div>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive, onActivated} from "vue"

const keyMap = {
    name: "姓名",
    resume: "简介",
    age: "年龄",
    place: "所在地",
}

const person = reactive(
    {
        name: "咖啡猫🐯",
        resume: "你撸过咖啡色的猫咪吗？",
        age: 18,
        place: "北京",

    }
)

const keyList = ref<String[]>([])

onActivated(() => {
    keyList.value = Object.keys(person)
})






</script>
<style lang="">
    
</style>