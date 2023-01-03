<template>
  <div class="login-dialog">
    <div class="header">
      <div class="hint">
        <SvgIcon icon="hint" size="19px" color="#FFFFFF" />
      </div>
      <div class="text-body">
        <span class="text1">登录后， 可以固定模块</span><br />
        <span class="text2">我们希望这会带给你更好的体验</span>
      </div>
    </div>
    <div class="button" @click="handleLogin">登录或注册 PC 社区账号</div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from '#imports'

  const router = useRouter()

  function handleLogin() {
    router.push('/login')
  }
</script>

<style scoped lang="scss">
  .login-dialog {
    border-radius: 14px;
    background: #ffffffff;
    border: 2px solid #40aafbff;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;

      .hint {
        width: 32px;
        height: 32px;
        background: #40aafbff;
        border-radius: 50%;
        margin: auto 15px auto 0;
        padding: 5px 0;
      }

      .text-body {
        .text1 {
          font-size: 16px;
          color: #000000ff;
          font-weight: 500;
        }
        .text2 {
          font-size: 14px;
          color: #00000099;
        }
      }
    }

    .button {
      margin-top: 8px;
      background: linear-gradient(135deg, #4d9dffff 0%, #0059ffff 100%);
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.04);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 18px 10px 18px;
      border-radius: 8px;
      color: #ffffff;
      cursor: pointer;
    }
  }
</style>
