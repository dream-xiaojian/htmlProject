<template lang="">
    <!-- 发现页面 这里后期改成瀑布流-->
    <div class="">
        <waterfulLayoutVue :items="noteList" :columnsCount="2"> 
                <template #default="{ item }">
                    <div>
                        <itemBlogVue @touchstart="navigation('blogDetail', item.id)" :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length" :username="item.username"> </itemBlogVue>
                    </div>
                </template>
        </waterfulLayoutVue>
    </div>
</template>
<script setup lang="ts">
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
import { ref, inject, onMounted, onBeforeMount} from "vue";
import {navigation} from "@/router"
import {IndexDB, blogSharesTable} from "@/stores"

const indexDb: IndexDB = inject('db') as IndexDB;
let page = ref(1); let pageSize = ref(10);
let noteList = ref<blogSharesTable[]>([]);
let isDataLoaded = ref(false); // 新增的 ref


onMounted(() => {
    if (!isDataLoaded.value) { // 如果数据还没有加载过
        indexDb.getNoteByVisible(true, page.value, pageSize.value).then((res) => {
            noteList.value = res;
            isDataLoaded.value = true; // 数据已经加载过了
        });
    }
});

</script>
<style lang="">
    
</style>

