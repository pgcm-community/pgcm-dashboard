<template>
  <div class="login-container">
    <div class="login-form">
      <div class="header">
        <span>PGCM 登录</span>
        <span>属于开发者的交流社区</span>
      </div>
      <div class="tag">
        <div :class="{ active: type === 1 }" @click="loginType(1)">账密登录</div>
        <div :class="{ active: type === 2 }" @click="loginType(2)">验证码登录</div>
        <div :class="{ active: type === 3 }" @click="loginType(3)">扫码登录</div>
      </div>

      <div class="input-body" v-show="type === 1">
        <el-input v-model="form.username" type="text" placeholder="请输入账号">
          <template #prefix> </template>
        </el-input>
        <el-input v-model="form.password" show-password type="password" placeholder="请输入密码" />
      </div>
      <div v-show="type === 2">
        <el-input type="text" placeholder="请输入手机号" />
        <el-input type="text" placeholder="请输入验证码" />
      </div>
      <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>

      <div class="middle">
        <el-button type="text">找回密码</el-button>
        <el-button type="text">账号安全中心</el-button>
      </div>

      <el-divider />

      <div class="third-party-login">
        <div class="party-header">使用第三方账号登录</div>
        <div>
          <div class="icon-body">
            <div class="icon">
              <el-image :src="Github" fit="fill" />
            </div>
            <div class="icon">
              <el-image :src="WeChat" />
            </div>
            <div class="icon">
              <el-image :src="Gitee" />
            </div>
            <div class="icon">
              <el-image :src="Weibo" />
            </div>
          </div>
        </div>
      </div>

      <el-divider />

      <div class="footer">
        <div class="left">
          <span>没有 PGCM 账号?</span><br />
          <span>注册账号</span>
        </div>
        <div class="regier-button">去注册</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ElButton, ElInput, ElDivider, ElImage } from 'element-plus'
  import Github from '@/assets/svg/github.svg'
  import WeChat from '@/assets/svg/wechat.svg'
  import Gitee from '@/assets/svg/gitee.svg'
  import Weibo from '@/assets/svg/weibo.svg'
  import { login } from '../../composables/api'

  const show = ref<boolean>(false)

  const type = ref<number>(1)

  const loginType = (data: number) => {
    type.value = data
  }

  interface loginConfig {
    username: string
    password: string
    captcha: string
    type: number
  }

  const form = ref<loginConfig>({
    username: '',
    password: '',
    captcha: '',
    type: 1
  })
  // const getLogin = await login()

  function handleLogin() {
    console.log('点击了登录')
    login(form.value).then((res) => {
      console.log(res)
    })
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
