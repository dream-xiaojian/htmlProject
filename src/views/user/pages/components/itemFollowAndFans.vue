<template lang="">
        <div class=" flex justify-between items-center py-3 gap-2">
            <div class="flex-1 flex items-center gap-2">
                  <img  ref="headerImage" style="width:45px; height:45px;" class="object-cover rounded-full" :src="imgUrl" alt="">

                <div class="flex-1 flex flex-col">
                   <span class="text-lg">{{user.username}}</span>
                   <span class="text-xs text-gray-400">{{user.resume == null? "还没有个人简历" : user.resume}}</span>
                </div>
             </div>
              <div class="flex-none" >
                  <!-- 进来的一定是关注的    -->
                  <button @click="clickButton(0)" v-show="user.type == 'follow' && change == false" class=" w-20 border border-gray-300 text-gray-400 px-3 py-1 rounded-2xl text-sm">已关注</button>
                  <button @click="clickButton(1)" v-show="user.type == 'follow' && change == true" class=" w-20 border border-red-300 text-red-400 px-3 py-1 rounded-2xl text-sm">关注</button>
                  <!-- 粉丝就是发消息 -->
                  <button @click="clickButton(1)" v-show="user.type == 'fans'" class=" w-20 border border-gray-300 text-gray-400 px-3 py-1 rounded-2xl text-sm" >发信息</button>
             </div>
         </div>
       <ConfirmDialogCom v-model='ConfirmDialog' @confirm="handleConfirm" tittle="确定不再关注吗？" />
</template>
<script lang="ts" setup>
import { inject, onMounted, watch, ref} from 'vue';
import { IndexDB} from '@/stores/index'
import ConfirmDialogCom from '@/components/ConfirmDialog.vue'

const db: IndexDB = inject('db') as IndexDB;
const emit = defineEmits(['clickButton'])
const props = defineProps({
    user: {
      type: Object,
      required: false,
    },
});
let imgUrl = ref("")
let change = ref(false)
let ConfirmDialog = ref(false)

watch(() => props.user?.headerImg, () => {
    getHeader()
})

onMounted(() => {
    getHeader()
})


const getHeader = () => {
    console.log(props.user?.headerImg);
    
    db.getImage(props.user?.headerImg).then((res:any) => {
        imgUrl.value = res
    })
}

const handleConfirm = () => {
      change.value = !change.value;
      ConfirmDialog.value = false;
      emit('clickButton', 0, props.user!) //通知进行数据的修改
}

const clickButton = (typeIndex:number) => {
    if (typeIndex == 2) { //跳转到聊天对话页面
        return
    }
    //弹出框确定一下
    if (typeIndex == 0) {
        ConfirmDialog.value = true;
        return;
    } 
    change.value = !change.value;
    //弹框提示一下不再关注
    emit('clickButton', typeIndex, props.user!) //通知进行数据的修改
}
</script>
<style lang="">

</style>