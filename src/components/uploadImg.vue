<template lang="">
           <div class="flex items-center justify-center w-full h-full">
                <label ref="canvasCopy" class="  bg-gray-200 flex flex-col relative rounded-lg border-4 border-dashed w-full h-full group text-center">
                    <img :src="imgUrl" class="object-cover w-full h-full" ref="img" v-if="imgUrl != ''">
                       <div v-else class="h-full w-full text-center flex flex-col items-center justify-center">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 32 32"><path fill="white" d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"/><path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z"/></svg></span>
                        </div>
                             <!-- 裁剪功能 -->
                        <div v-if="imgUrl != '' && props.tailor==true" class="absolute w-full h-full" style="z-index:999">
                              <!-- 蒙版 -->
                             <!-- <div class="absolute inset-0 bg-black bg-opacity-50" /> -->
                            <Vue3DraggableResizable
                                        :initW="110"
                                        :initH="120"
                                        :x="cutImg.x"
                                        :y="cutImg.y"
                                        :w="cutImg.w"
                                        :h="cutImg.h"
                                        :active="active"
                                        :draggable="true"
                                        :resizable="true"
                                        @drag-end="imageChangeEnd"
                                        @resize-end="imageChangeEnd"
                                    >
                                <div class="inset-1/4 bg-transparent border-2  bg-transparent w-full h-full" />
                            </Vue3DraggableResizable>
                        </div>
                    <input type="file" @change="onFileChange" ref="fileInput" class="hidden">
                </label>
         </div>
         <div v-show="props.tailor" ref="tailorShow" class="object-cover rounded-full bg-slate-400 overflow-hidden" style="width:104px; height:104px;"> 

         </div>
</template>
<script setup lang="ts">
/**
 * 支持图片文件和回显
 * 同时支持裁剪
 */
import { ref, reactive} from 'vue';
import Vue3DraggableResizable from 'vue3-draggable-resizable'

const props = defineProps({
    tailor: { //是否启动裁剪功能
      type: Boolean,
      required: false,
      default: false,
    },
    tailorType: { //裁剪的形状
      type: String,
      required: false,
      validator: (value) => ['circle', 'square'].includes(value as string),
    },
});

const emit = defineEmits(['file-changed', 'file-tailor-changed'])
const fileInput = ref();
const tailorShow = ref();
const canvasCopy = ref<HTMLElement>();
const img = ref();
let imgUrl = ref('');
let cutImg = reactive({
    //坐标
    x: 0,
    y: 0,
    //宽高
    w: 104, 
    h: 104,
    canvasWidth:104,
    canvasHeight:104,
    active:false
});

const imageChangeEnd = (e: any) => {
  if (e && e.x !== undefined) cutImg.x = e.x;
  if (e && e.y !== undefined) cutImg.y = e.y;
  if (e && e.w !== undefined) cutImg.w = e.w;
  if (e && e.h !== undefined) cutImg.h = e.h;
  // console.log('x:', cutImg.x, 'y:', cutImg.y, 'w:', cutImg.w, 'h:', cutImg.h);
  const cvs = document.createElement("canvas");
  const ctx  = cvs.getContext("2d");
  cvs!.width = cutImg.canvasWidth
  cvs!.height = cutImg.canvasHeight
  ctx!.drawImage(img.value, cutImg.x, cutImg.y, cutImg.w, cutImg.h, 0, 0, cutImg.canvasWidth, cutImg.canvasHeight);
  cvs.toBlob((blob) => {
    //blob 转换为file
    let randomName = Date.now();
    const file = new File([blob!], 'file-' + randomName + '.png', {type: 'image/png'});
    emit('file-tailor-changed', file);
  });

  // 裁剪要进行预览
  if (props.tailor == true) {
    tailorShow.value.innerHTML = ''
    tailorShow.value.appendChild(cvs)
  }

}

const onFileChange = (e: any) => {
   const file = e.target.files[0];
   // 临时读取文件
   imgUrl.value = URL.createObjectURL(file);
   emit('file-changed', file);
};

const resize = (e: any) => {

}

</script>
<style lang="scss" scoped>
.tailor-mask{
    background: rgba(0, 0, 0, 0.5);
}

.tailor{
  background-color: transparent;
  width: 100%;
  height: 100%;
}
</style>