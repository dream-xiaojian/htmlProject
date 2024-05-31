<!-- 这个属于聊天标签页 -->
<template lang="">
    <div class="px-2 relative mt-2">
        <!-- 聊天消息预览区域 -->
        <div id="msgBox" class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex items-end justify-end">
                <div class="bg-blue-500 p-3 rounded-lg">
                <p class="text-sm text-white">你好啊</p>
                </div>
                <img src="../../../assets/image/th.jpg" alt="Other User Avatar" class="w-8 h-8 rounded-full ml-3" />
            </div>
        </div>
         <!-- 消息输入区域 -->
         <div class="mt-4 flex items-center w-full fixed bottom-3 left-0 px-2">
            <input
                type="text"
                placeholder="输入您的问题"
                class="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
            />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600">发送</button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="">
    
</style>