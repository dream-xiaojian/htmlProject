<!-- 粉丝关注页面 -->
<template lang="">
    <div class="w-full h-screen bg-white overflow-y-auto">
        <header class="px-2 sticky top-0">
            <div class="flex justify-between items-center">
                <span @click="back()"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg>
                </span>

                <div class="flex items-center gap-4 flex-grow justify-center">
                    <div class="px-7 bg-white">
                        <div class="flex">
                            <div class="flex-2 group">
                                <span href="#" @touchstart="changeMode(true)" :class="{ 'text-indigo-500': defaultHover }" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                                    <span class="block px-1 pb-1">
                                        <span class="block text-base pb-2">关注</span>
                                        <span :class="{ 'bg-indigo-500': defaultHover }" class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                                    </span>
                                </span>
                            </div>
                            <div class="flex-2 group">
                                <span @touchstart="changeMode(false)" href="#" class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500">
                                    <span class="block px-1 pb-1">
                                        <span class="block text-base pb-2">粉丝</span>
                                        <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                                    </span>
                                </span>
                            </div>
                        </div>
                </div>
                </div>

                <span style="visibility: hidden;"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"/></g></svg>
                </span>
            </div>

            <form class="pt-2 relative w-full mx-auto text-gray-600">
                <input class=" w-full border-2 border-gray-300 bg-gray-100 h-8 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" :placeholder="defaultHover==true? '搜索已关注的人': '搜索我的粉丝'">
                <button type="submit" class="absolute right-0 top-0 mt-4 mr-4">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                    viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                    width="512px" height="512px">
                    <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                </button>
            </form>
        </header>

        <!-- 内容部分 -->
        <div class="px-2">
            <followCom v-if="defaultHover==true"/>
            <fansCom  v-else/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import followCom from "./components/follow.vue"
import fansCom from "./components/fans.vue"

let defaultHover = ref(true);
const emit = defineEmits(['back'])

const back = () => {
    emit('back')
}

const changeMode = (mode: boolean) => {
    defaultHover.value = mode
}

</script>
<style lang="">

</style>