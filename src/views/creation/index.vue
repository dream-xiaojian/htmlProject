<template lang="">
    <!-- 创作中心 -->
    <div class="w-full px-2">

        <div class="mt-2">
            <form>
                <!-- 标题 -->
                <input class="w-full p-2 mb-2 outline-none text-xl" spellcheck="false" placeholder="填写标题会有更多的赞哦~" type="text">
                
                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"> </div>
                <!-- 内容 -->
                <textarea class="w-full sec p-3 h-60 outline-none" spellcheck="false" placeholder="添加正文"></textarea>


                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"></div>
                <!-- 地点 -->
                <div class="w-full flex justify-between items-center py-3" style="font-size:16px;">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6s20-2.686 20-6c0-1.657-2.239-3.157-5.858-4.243"/><path d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z"/><path d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"/></g></svg>
                        <label for="permission1">添加地点</label>
                    </span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                </div>
                <!-- 观看权限 -->
                <div class="w-full flex justify-between items-center py-3" style="font-size:16px;">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                        <label for="permission1">公开可见</label>
                    </span>
                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 7 16"><path fill="currentColor" d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15"/></svg></span>
                </div>
                <div class="w-full bg-slate-300 mt-1 mb-1" style="height:1px"> </div>


            </form>

        </div>
       
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>