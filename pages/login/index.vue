<template>
  <div class="login-container">
    <div class="login-form">
      <div class="header">
        <span>PGCM 登录</span>
        <span>属于开发者的交流社区</span>
      </div>
      <div class="tag">
        <div :class="{'active': type === 1 }" @click="loginType(1)">账密登录</div>
        <div :class="{'active': type === 2 }" @click="loginType(2)">验证码登录</div>
        <div :class="{'active': type === 3 }" @click="loginType(3)">扫码登录</div>
      </div>
      <div v-show="type === 1">
        <input type="text" placeholder="请输入账号" />
        <input type="password" placeholder="请输入密码" />
      </div>
      <div v-show="type === 2">
        <input type="text" placeholder="请输入手机号" />
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div>
        <button>登录</button>
        <div>
          <button>找回密码</button>
<!--          <button>zhanghao</button>-->
        </div>
      </div>
      <div>
        <div>使用第三方账号登录</div>
      </div>
      <div>
        <div>
          <span>没有 PGCM 账号?</span>
<!--          <span>注册账号</span>-->
          <el-button>注册账号</el-button>
        </div>
        <div>去注册</div>
      </div>
      <!--      <form @submit.prevent='login'>-->
      <!--        <div class='form-group'>-->
      <!--          <label for='username'>Username</label>-->
      <!--          <input type='text' class='form-control' id='username' v-model='username' />-->
      <!--        </div>-->
      <!--        <div class='form-group'>-->
      <!--          <label for='password'>Password</label>-->
      <!--          <input type='password' class='form-control' id='password' v-model='password' />-->
      <!--        </div>-->
      <!--        <button type='submit' class='btn btn-primary'>Login</button>-->
      <!--      </form>-->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ElButton } from 'element-plus'

  const show = ref<boolean>(false)

  const type = ref<number>(1)

  const loginType = (data: number) => {
    type.value = data
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
