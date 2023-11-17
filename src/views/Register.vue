<template>
  <main>
    <div class="box">
      <div class="title">注册</div>
      <div class="email">
        <input type="text" class="email_input" placeholder="邮箱" v-model="email" />
        <select>
          <option value="qq.com">@qq.com</option>
          <option value="gmail.com">@gmail.com</option>
          <option value="163.com">@163.com</option>
          <option value="yahoo.com">@yahoo.com</option>
          <option value="sina.com">@sina.com</option>
          <option value="126.com">@126.com</option>
          <option value="outlook.com">@outlook.com</option>
          <option value="yeah.net">@yeah.net</option>
          <option value="foxmail.com">@foxmail.com</option>
          <option value="hotmail.com">@hotmail.com</option>
        </select>
      </div>
      <input type="password" class="input" placeholder="密码" v-model="password" />
      <input type="password" class="input" placeholder="密码" v-model="checkPassword" />
      <button class="register" @click="register">注册</button>
      <div class="more">
        <a href="javascript:void(0);" @click="$router.push('/login')">返回登陆</a>
        <div class="right">简体中文</div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
const email = ref('')
const password = ref('')
const checkPassword = ref('')

async function register() {
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
.email {
  margin-bottom: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
}
.email_input {
  padding: 0 12px;
  width: 249px;
  height: 37px;
  box-sizing: border-box;
  outline: none;
  border: none;
  background: #f5f6fa;
  font-size: 16px;
}
.email_input:focus {
  border-color: #e7eaf3;
  background-color: #e7eaf3;
}
select {
  width: 150px;
  height: 37px;
  border-color: #f5f6fa;
  background-color: #f5f6fa;
  font-size: 16px;
  font-weight: 400;
  padding-left: 12px;
  padding-right: 24px;
  outline: none;
}
select:focus {
  border-color: #e7eaf3;
  background-color: #e7eaf3;
  box-shadow: none;
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
.register {
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
.register:hover {
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
.right {
  float: right;
  color: #6c757d;
}
</style>