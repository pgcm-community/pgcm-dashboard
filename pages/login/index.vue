<template>
  <div class="login-container">
    <div id="login-container">
      <div class="login-form" id="login-form">
        <div class="header">
          <span>PC 社区登录</span>
          <span>属于开发者的交流社区</span>
        </div>
        <div class="tag">
          <div :class="{ active: type === 1 }" @click="loginType(1)">账密登录</div>
          <div :class="{ active: type === 2 }" @click="loginType(2)">验证码登录</div>
          <div :class="{ active: type === 3 }" @click="loginType(3)">扫码登录</div>
        </div>

        <div class="input-body" v-show="type === 1">
          <el-input v-model="form.username" link placeholder="请输入账号">
            <template #prefix> </template>
          </el-input>
          <el-input
            v-model="form.password"
            show-password
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="input-body" v-show="type === 2">
          <el-input link placeholder="请输入手机号" />
          <el-input link placeholder="请输入验证码" />
        </div>
        <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>

        <div class="middle">
          <el-button link>找回密码</el-button>
          <el-button link>账号安全中心</el-button>
        </div>

        <el-divider />

        <div class="third-party-login">
          <div class="party-header">使用第三方账号登录</div>
          <div>
            <div class="icon-body">
              <div class="icon">
                <img src="@/public/svg/github.svg" alt="Github登录" />
              </div>
              <div class="icon">
                <img src="@/public/svg/wechat.svg" alt="微信登录" />
              </div>
              <div class="icon">
                <img src="@/public/svg/gitee.svg" alt="Gitee登录" />
              </div>
              <div class="icon">
                <img src="@/public/svg/weibo.svg" alt="微博登录" />
              </div>
            </div>
          </div>
        </div>

        <el-divider />

        <div class="footer">
          <div class="left">
            <span>没有 PC 社区账号?</span><br />
            <span>注册账号</span>
          </div>
          <div class="regier-button" @click="handleFlip">去注册</div>
        </div>
      </div>

      <div class="register-from" id="register-from">
        <div class="header">
          <span>PC 社区注册</span>
          <span>属于开发者的交流社区</span>
        </div>
        <div class="from">
          <el-input v-model="registerFrom.username" link placeholder="请输入账号">
            <template #prefix> </template>
          </el-input>

          <el-divider />
          <div class="phone mb-5">
            <el-input v-model="registerFrom.phone" link placeholder="请输入手机号">
              <template #prefix></template>
            </el-input>
            <el-button>获取验证码</el-button>
          </div>
          <el-input class="mb-5" v-model="registerFrom.code" link placeholder="请输入验证码">
            <template #prefix></template>
          </el-input>

          <div class="lint">
            <div class="icon">
              <SvgIcon icon="hint" size="19px" color="#FFFFFF" />
            </div>
            <div class="text">
              <span>PC 社区为社区产品, 注册后可能需要您完成实名</span>
              <br />
              <span>响应国家政策要求, 理应保证用户完成实名</span>
            </div>
          </div>

          <el-divider />

          <div class="email flex mb-5">
            <el-input class="flex-1" v-model="registerFrom.email" link placeholder="请输入邮箱">
              <template #prefix></template>
            </el-input>
            <div class="label ml-2.5">非必填</div>
          </div>

          <el-input class="mb-5" v-model="registerFrom.password" link placeholder="请输入密码">
            <template #prefix></template>
          </el-input>
        </div>

        <div>
          我已同意
          <a href="">《用户条款》</a>
          与
          <a href="">《隐私保护条款》</a>
        </div>

        <el-divider />

        <div class="footer">
          <div class="left">
            <span>已有 PC 社区账号?</span><br />
            <span>登录账号</span>
          </div>
          <div class="regier-button" @click="handleFlip">去登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ElButton, ElInput, ElDivider } from 'element-plus'
  import { login } from '@/composables/api'

  definePageMeta({
    layout: false
  })

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

  const registerFrom = ref({
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

  const isRegister = ref<boolean>(false)

  function handleFlip() {
    let container = document.getElementById('login-container') as HTMLElement
    container.style.transform = isRegister.value ? 'rotateY(180deg)' : ''
    isRegister.value = !isRegister.value
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
