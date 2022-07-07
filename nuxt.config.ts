import { defineNuxtConfig } from 'nuxt'
import { viteMockServe } from 'vite-plugin-mock'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'

const lifecycle = process.env.npm_lifecycle_event

const setName = process.env.GLOBAL_TITLE

export default defineNuxtConfig({
  head: {
    title: setName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },
  alias: {
    '@/*': './*'
  },
  typescript: {
    strict: true
  },
  // build
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : []
  },
  // css
  css: ['~/assets/scss/index.scss'],
  vite: {
    plugins: [
      VueSetupExtend(),
      Components({
        dts: true
      }),
      viteMockServe({
        mockPath: 'mock'
      })
    ]
  },
  components: true,
  vueuse: {
    ssrHandlers: true
  }
})
