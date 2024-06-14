<template lang="">
    <!-- component -->
    <div class="h-screen w-screen">
      <div class="h-full w-full bg-white m-auto">
        <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt=""class=" lg:w-full  object-cover"/>
        <div class="">
          <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">创意分享平台</h2>
          <form class="bg-white rounded-md p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-6">加入我们!</h1>
              <div class="flex items-center relative border-2 h-11 mb-7 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input v-model="form.username" id="username" class=" pl-2 w-full outline-none border-none" type="text" name="username" placeholder="请您输入您的用户名" />
                <p v-show="errors.username" class="text-red-500 absolute top-11">{{ errors.username }}</p>
              </div>
              <div class="flex items-center relative h-11 border-2 mb-7 py-2 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input v-model="form.email" id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="请您输入您的邮箱" />
                <p v-show="errors.email" class="text-red-500 absolute top-11">{{ errors.email }}</p>
              </div>
              
              <div class="flex items-center relative border-2 h-11 mb-7 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input v-model="form.password" class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="请您输入您的密码" />
                <p v-show="errors.password" class="text-red-500 absolute top-11">{{ errors.password }}</p>
              </div>
              <div class="flex items-center relative border-2 h-11 mb-7 py-2 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input v-model="form.rePassword" class="pl-2 w-full outline-none border-none" type="password" name="password" id="password" placeholder="再次输入您的密码" />
                <p v-show="errors.rePassword" class="text-red-500 absolute top-11">{{ errors.rePassword }}</p>
              </div>
              <span @click="register" class="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 text-center">注册</span>
              <div class="w-full ">
                <p v-show="errors.register" class="text-red-500 text-center">{{ errors.register }}</p>
              </div>
              <div class="flex justify-between mb-5">
                <a @click="navigation('login')"href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">已经有账号?</a>
              </div>  
              
            </form>
        </div>
      </div>
    </div>
</template>
<script lang="ts" setup>
import {reactive, watchEffect} from 'vue'
import {validateEmail, validatePassword, validateTwoPassword} from "@/utils/valid.ts"
import { userTableStore, User } from '@/stores/user'
import {navigation} from '@/router/index'

const store = userTableStore()

const form = reactive({
    email:'',
    username: '',
    password:'',
    rePassword:'',
})

const errors = reactive({
    email: false as String | Boolean,
    username:false as String | Boolean,
    password: false as String | Boolean,
    rePassword:false as String | Boolean,
    register: false as String | Boolean,
})

watchEffect(() => {
  if (form.email != '' && !validateEmail(form.email)) {
    errors.email = '请输入有效的邮箱地址';
  } else { //表示通过了验证
    errors.email = false;
  }

  if (form.password != '' && !validatePassword(form.password)) {
    errors.password = '密码不少于6位';
  } else {
    errors.password = false;
  }

  if (form.rePassword != '' && !validateTwoPassword(form.password, form.rePassword)) {
    errors.rePassword = '两次密码不一致';
  } else {
    errors.rePassword = false;
  }
});

const register = () => {
  //不为空
  if (form.email.length == 0 || form.username.length == 0 || form.password.length == 0) {
    errors.register = '请您填写完整信息哦！';
    return
  }
  errors.register = false;
  if (!Object.values(errors).every(value => value === false)) {
    return
  }

  const user: Omit<User, 'id'>  = {
    email: form.email,
    username: form.username,
    password: form.password,
  }
  try {
    store.register(user)
    navigation('login')
  } catch (error) {
    errors.register = '用户名重复哦！';
  }
}



</script>
<style lang="">

</style>