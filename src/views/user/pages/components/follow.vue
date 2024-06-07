<template lang="">
    <div>
        <div class="mt-4 text-sm">
                <header class="w-full flex justify-between items-center"> 
                    <span>我的关注 （{{InterestList.length}}）</span>
                    <span>时间排序</span>
                </header>
                <section>

                </section>
            </div>

            <div>
                <itemFollowAndFansCom  @clickButton="(index, whoUser) => changeFollow(index, whoUser)" v-for="(item, index) in InterestList" :key="index" :user="item"/>
            </div>
    </div>
</template>
<script lang="ts" setup>
import {ref, onMounted, reactive} from "vue"
import { User, userTableStore} from '@/stores/index'
import itemFollowAndFansCom from "./itemFollowAndFans.vue"
type UserType = User & {type: string}
let curUser = reactive<User>({} as User)
let InterestList = ref<UserType[]>([] as UserType[]);
const userDb = userTableStore()

onMounted(() =>{
    initData()
})

const initData = () =>{
    //基本信息的获取
    let res =  userDb.getCurrentUserMessage()
    if (res?.code != -1) {
        Object.assign(curUser, res!.data);
        let list = curUser.InterestList ?? [];
        list.forEach((item) => {
            InterestList.value.push({ ...userDb.getUserById(item)!, type: 'follow'})
        });
    }
}

const changeFollow = (indexType:number, whoUser: User) => {
    console.log('关注');
    if (indexType == 0) {
        //取消关注
        let startIndex = curUser.InterestList!.indexOf(whoUser.id)
        curUser.InterestList!.splice(startIndex, 1) 
        startIndex = curUser.fansList!.indexOf(whoUser.id)

        whoUser.fansList!.splice(startIndex, 1)
        userDb.updataUser(whoUser)
        userDb.updataUser(curUser)
    } else {
        //关注
        curUser.InterestList!.push(whoUser.id) 
        whoUser.fansList!.push(curUser.id)
        userDb.updataUser(whoUser)
        userDb.updataUser(curUser)
    }
}


</script>
<style lang="scss" scoped> 
    
</style>