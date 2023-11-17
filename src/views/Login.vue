<template>
  <main>
    <div class="box">
      <div class="title">登录</div>
      <input type="text" v-model="email" class="input" placeholder="邮箱" />
      <input type="password" v-model="password" class="input" placeholder="密码" />
      <button class="login" @click="login">登入</button>
      <div class="more">
        <a href="javascript:void(0);" @click="$router.push('/register')">注册</a>
        <div class="separator"></div>
        <a href="javascript:void(0);">忘记密码</a>
        <div class="right">简体中文</div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { loginApi } from '@/api/user'
import router from '@/router'

const email = ref('')
const password = ref('')

async function login() {
  const res = await loginApi({ email: email.value, password: password.value })
  window.localStorage.setItem('token', res.jwt)
  router.push('/')
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #eee;
}
.box {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  background: white;
  border-radius: 2px;
  overflow: hidden;
}
.title {
  margin-top: 35px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
}
.input {
  margin-bottom: 20px;
  padding: 0 12px;
  width: 399px;
  height: 37px;
  box-sizing: border-box;
  outline: none;
  border: none;
  background: #f5f6fa;
  border-radius: 4px;
  font-size: 16px;
}
.input:focus {
  border-color: #e7eaf3;
  background-color: #e7eaf3;
}
.login {
  margin-bottom: 24px;
  width: 399px;
  height: 37px;
  background: #3b5998;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
}
.login:hover {
  color: #fff;
  background-color: #30497c;
  border-color: #2d4373;
}
.more {
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  background-color: #f8f9fa;
}
a {
  color: #6c757d;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #3d4246;
}
.separator {
  display: inline-block;
  margin: 0 8px;
  height: 12.6px;
  width: 1px;
  background: #e8e8e8;
}
.right {
  float: right;
  color: #6c757d;
}
</style>