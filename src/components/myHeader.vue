<template lang="">
    <header id="homeTabs" ref="header">
            <div :style="{ backgroundColor: bgColor }" class="py-2 bg-white relative w-full flex items-center px-2"> 
                <span @touchstart="goBack" class="flex-none"><svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"/></g></svg></span>
                <div  class="grow flex items-center justify-center gap-6"> 
                    <span class=" text-lg font-semibold">{{props.title}}</span>
                </div>
                <span class="flex-none" style="visibility:hidden">
                    <svg @touchstart="navigation('searchPage')" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
                </span>
            </div>
     </header>
</template>
<script setup lang="ts">
import {goBack} from "@/router/index"
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    bgColor:{
        type:String,
        require:false,
        default: '#ffffff' // Default color if none is provided
    }
});

</script>
<style lang="">
    
</style>