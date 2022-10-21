import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state() {
    return {
      token: '',
      userInfo: {},
      isLogin: false,
      showLogin: false
    }
  }
})
