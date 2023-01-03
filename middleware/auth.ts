import { defineNuxtRouteMiddleware, navigateTo } from '#imports';
import { getUserInfo } from '@/api/user'
import { userStore } from '@/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('pgcm-token')
  const store = userStore()

  console.log('token--------->', token.value)
  if (typeof token.value === 'undefined') {
    return navigateTo('/')
  }

  getUserInfo().then((res) => {
    if (!res.success) {
      store.$patch({
        isLogin: !store.isLogin
      })
      store.$patch({
        isLogin: false
      })
      token.value = ''
      store.$patch({
        showLogin: true
      })
      navigateTo('/')
    }
  })
})
