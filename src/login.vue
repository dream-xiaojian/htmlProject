<template lang="">
    <!-- component -->
    <div class="h-screen w-screen">
      <div class="h-full w-full bg-white m-auto">
        <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class=" lg:w-full  object-cover"/>
        <div class="">
          <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">创意分享平台</h2>
          <form class="bg-white rounded-md p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-6">欢迎回来!</h1>
              <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input v-model="form.username" id="username" class=" pl-2 w-full outline-none border-none" type="text" name="username" placeholder="请您输入您的用户名" />
              </div>
              <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input v-model="form.password" class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="请您输入您的密码" />     
              </div>
              <span @click="login" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 text-center">登入</span>
              <div class="w-full ">
                <p v-show="errors.login" class="text-red-500 text-center">{{ errors.login }}</p>
              </div>
              <div class="flex justify-between mt-4">
                <!-- <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">忘记密码</span> -->
                <a @click="navigation('register')" href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">没有账号?</a>
              </div>  
            </form>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup >
import {reactive} from 'vue'
import { userTableStore } from '@/stores/user'
import {navigation} from '@/router/index'

const store = userTableStore()

const form = reactive({
    username: '',
    password:'',
})

const errors = reactive({
    login: false as String | Boolean,
})

const login = () => {
  if (form.username.length == 0 || form.password.length == 0) {
    errors.login = '请您填写完整信息哦！';
    return;
  }
  try {
    let userToken = store.login(form.username, form.password)
    
    // 登入成功 --- 将用户信息存储在cookie中
    document.cookie = `user=${JSON.stringify(userToken)}; path=/; max-age=3600; secure; samesite=strict`;

    // 登入成功 --- 跳转到首页
    navigation('findHomePage')

  } catch (error) {
    errors.login = '用户密码错误哦！请您重新输入！';
    console.log(error)
  }
}

</script>
<style lang="">

</style>