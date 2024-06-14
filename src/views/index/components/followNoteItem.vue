<template lang="">
                        <div class="story-ring flex justify-center items-center
                            relative cursor-pointer mb-6
                            transition-all duration-150 delay-100">

                            <img class="h-full w-full rounded-3xl"
                                :src="backImg">

                            <div class="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                                <a href="#" class="flex p-1.5 px-3">
                                    <img :src="headerImage"
                                        class="mr-2 w-8 h-8 rounded-full border border-gray-400">

                                    <div class="font-bold text-sm text-gray-200 hover:underline mt-1">
                                        {{authorUser.username}}
                                    </div>
                                </a>
                            </div>


                            <div class="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                                hover:backdrop-blur-xl transition-all duration-150 delay-100">
                                <div class="flex gap-2 items-center font-light text-lg text-gray-50 mx-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48"><rect width="48" height="48" fill="none"/><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="m24 10.27l-.595-.595c-4.32-4.322-11.327-4.322-15.648 0h0c-4.321 4.32-4.321 11.327 0 15.648l.594.595"/><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="m39.674 25.921l.595-.595c4.33-4.33 4.33-11.348 0-15.678h0c-4.329-4.329-11.348-4.329-15.677 0l-.596.596L8.32 25.921l15.677 15.677zm-26.129 5.226L37.21 7.482m5.226 5.225L18.771 36.373m-5.203-15.671l-7.974-7.974m5.216-5.216l7.974 7.973"/></svg>
                                    <span class="text-2xl">{{likeListLength}}</span>
                                </div>

                                <div class="flex gap-2 items-center font-light text-lg text-gray-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="white" d="M20 4h-1v9l-3-2.25L13 13V4H8v12h12z" opacity="0.3"/><path fill="white" d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m18-6V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M15 4h2v5l-1-.75L15 9zM8 4h5v9l3-2.25L19 13V4h1v12H8z"/></svg>
                                    <span class="text-2xl">{{collectNumber}}</span>
                                </div>

                                <div class="flex gap-2 font-light items-center  text-gray-50 mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="white" d="M6.5 13.5h7v-1h-7zm0-3h11v-1h-11zm0-3h9.942v-.023q-.367-.18-.639-.418t-.495-.559H6.5zM3 20.077V3h11.6q-.061.25-.071.49t-.006.51H4v13.644L5.65 16H20V8.342q.287-.067.527-.155q.24-.087.473-.225V17H6.077zM4 4.616v12.769V4zm15.002 1.846q-1.04 0-1.771-.729t-.731-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732"/></svg>
                                     <span class="text-2xl">{{commentListNumber}}</span>
                                </div>
                            </div>
                        </div>
</template>
<script lang="ts" setup>
import { inject, computed, ref, onMounted, reactive} from 'vue';
import {IndexDB, blogSharesTable, userTableStore, User} from "@/stores"
const userDb = userTableStore()
const db: IndexDB = inject('db') as IndexDB;
let note = reactive<blogSharesTable>({
    likeList: [] as number[],
} as blogSharesTable);
let headerImage = ref("")
let backImg = ref("")
let authorUser = reactive<User>({} as User)

const props = defineProps({
    noteId: {
        type: String,
        required: true,
    },
});

let likeListLength = ref(0)
let collectNumber = ref(0)
let commentListNumber = ref(0)

onMounted(() => {
    getNote()
});

const getNote = () => {
    
    if (props.noteId == null) return;
    db.getNoteById(props.noteId).then((res: any) => {
        note = res
        likeListLength.value = note.likeList?.length ?? 0
        collectNumber.value = note.collectList?.length ?? 0
        commentListNumber.value = note.commentList?.length ?? 0
        //初始化封面
        Object.assign(authorUser, userDb.getUserById(note.author!));
        initData()
    })
}
const initData = () => {
    db.getImage(note.imagesDataList[0]).then((res: any) => {
        backImg.value = res
    })

    if (authorUser.headerImg == null) return;
    db.getImage(authorUser.headerImg!).then((res: any) => {
        headerImage.value = res
    })
}
</script>
<style lang="">
    
</style>