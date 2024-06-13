<template lang="">
    <!-- 发现页面 这里后期改成瀑布流-->
    <div class="" ref="viewBox" >
        <waterfulLayoutVue :items="noteList" :columnsCount="2"> 
            <template #default="{ item }">
                <div>
                    <itemBlogVue @click.stop="navigation('blogDetail', item.id)" :imgUrl="item.imagesDataList" :tittle="item.title" :author="item.author" :likeNum="item.likeList.length" :username="item.username"> </itemBlogVue>
                 </div>
            </template>
        </waterfulLayoutVue>
    </div>
        <!-- 尾部标记栏 -->
    <footer ref="observerElement" class="h-8 mb-1">
        <div v-show="isLoading" class="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <svg fill='none' class="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                <path clip-rule='evenodd'
                    d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                    fill='currentColor' fill-rule='evenodd' />
            </svg>
            <div>正在疯狂加载数据 ...</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 72 72"><rect width="72" height="72" fill="none"/><path fill="#f4aa41" d="M58.363 49.283c-3.55 8.995-12.463 14.81-22.898 14.81c-8.995 0-18.998-5.628-22.548-14.623l-.124-.308c-1.127-2.822-.931-6.275-.931-9.504l3.617-31.925l10.079 9.932a23.8 23.8 0 0 1 9.383-1.913h1.05c3.327 0 6.499.681 9.382 1.913L56.452 6.733l3.672 33.423c0 3.229-.62 6.312-1.747 9.133"/><path fill="#e27022" d="M35.466 64.093c10.467.338 20.082-5.782 23.631-14.777l.11-.228c1.126-2.821.931-6.804.931-10.033L56.452 6.733"/><ellipse cx="36" cy="51.719" fill="#ea5a47" rx="6.452" ry="7.751"/><ellipse cx="24.456" cy="34.194" fill="#fff" rx="7.751" ry="6.452" transform="rotate(-70.494 24.456 34.194)"/><ellipse cx="46.84" cy="34.195" fill="#fff" rx="6.452" ry="7.751" transform="rotate(-19.507 46.839 34.196)"/><path fill="#f4aa41" d="M15.295 65h9.035s1.373-13.369 0-15.81c-.999-1.774-2.548-5.271-6.853-5.138c-1.558.048-6.011 1.347-4.71 5.251c1.813 5.44 3.422 4.505 4.293 6.178C18.204 57.68 15.295 65 15.295 65m41.029 0H47.29s-1.374-13.369 0-15.81c.998-1.774 2.548-5.271 6.853-5.138c1.557.048 6.01 1.347 4.71 5.251c-1.814 5.44-3.423 4.505-4.294 6.178C53.415 57.68 56.324 65 56.324 65"/><g fill="none" stroke="#2f88ff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><path d="m61.65 54.45l-4.04-2.25m-.06 7.38l-3.21-1.78M12.92 46.48s-.01-.01 0-.01c-.67-2.19-1.03-4.5-1.03-6.9l3.59-32.32l10.83 10.57a23.55 23.55 0 0 1 9.18-1.85h1.02c3.26 0 6.36.66 9.18 1.85L56.52 7.25l3.59 32.32c0 2.59-.41 5.07-1.19 7.4M24.7 60.56c3.23 1.67 6.9 2.61 10.79 2.61h1.02c3.75 0 7.28-.87 10.43-2.42M14.1 52.36l-3.75 2.09m6.9 3.57l-2.8 1.56"/><ellipse cx="36" cy="51.719" rx="6.452" ry="7.751"/><ellipse cx="24.456" cy="34.194" rx="7.751" ry="6.452" transform="rotate(-70.494 24.456 34.194)"/><ellipse cx="46.84" cy="34.195" rx="6.452" ry="7.751" transform="rotate(-19.507 46.839 34.196)"/><path d="M15.295 65h9.035s1.373-13.369 0-15.81c-.999-1.774-2.548-5.271-6.853-5.138c-1.558.048-6.011 1.347-4.71 5.251c1.813 5.44 3.422 4.505 4.293 6.178C18.204 57.68 15.295 65 15.295 65m41.029 0H47.29s-1.374-13.369 0-15.81c.998-1.774 2.548-5.271 6.853-5.138c1.557.048 6.01 1.347 4.71 5.251c-1.814 5.44-3.423 4.505-4.294 6.178C53.415 57.68 56.324 65 56.324 65"/></g></svg>
        </div>
    </footer>
</template>
<script setup lang="ts">
import waterfulLayoutVue from "@/components/waterfulLayout.vue";
import itemBlogVue from "@/components/itemBlog.vue";
import { ref, inject, nextTick, onMounted, onBeforeMount, onUnmounted} from "vue";
import {navigation} from "@/router"
import {IndexDB, blogSharesTable} from "@/stores"

const indexDb: IndexDB = inject('db') as IndexDB;
let page = ref(1); let pageSize = ref(10);
let noteList = ref<blogSharesTable[]>([]);
let isDataLoaded = ref(false); // 新增的 ref
let observerElement = ref(null as unknown as HTMLElement); // 新增的 ref
let isLoading = ref(false);
let observer: IntersectionObserver | null = null;
let options = {
    root: null,
    rootMargin: '20px',
    threshold: 1.0
}
let lastIntersectionRatio = -1;


onMounted(() => {
    if (!isDataLoaded.value) { // 如果数据还没有加载过
        initData()
    }

    observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        // console.log('entry', entry);
        
        //保证一开始就进入视口时不会加载数据
        if (lastIntersectionRatio === -1) {
            lastIntersectionRatio = entry.intersectionRatio;
            return;
        }

        if (entry.intersectionRatio > 0) {
            isLoading.value = true; // 设置 isLoading 为 true
            page.value += 1; // 加载下一页
            setTimeout(() => {
                isLoading.value = false; // 设置 isLoading 为 false
                catData();
            }, 1000);
        }
    });
  }, options);

  nextTick(() => {
      observer!.observe(observerElement.value);
  })
});

const initData = () => {
    indexDb.getNoteByVisible(true, page.value, pageSize.value).then((res) => {
        noteList.value = res;
        isDataLoaded.value = true; // 数据已经加载过了
    });
}

const catData = () => {
    indexDb.getNoteByVisible(true, page.value, pageSize.value).then((res) => {
        noteList.value = noteList.value.concat(res);
    });

}

onUnmounted(() => {
    if (observer) {
        observer.disconnect();
    }
});
</script>
<style lang="">
    
</style>

