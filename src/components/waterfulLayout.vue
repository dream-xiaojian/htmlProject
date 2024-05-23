// 瀑布流布局
<template lang="">
    <div class="box">
        <div class="item">
            <slot> </slot>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.box{
    display: flex;  
    flex-flow:column wrap;
    .item {
        margin: 10px;
        width: calc(100%/3 - 20px);
    }
}
</style>