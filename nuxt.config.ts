import { defineNuxtConfig } from 'nuxt/config'
import { viteMockServe } from 'vite-plugin-mock'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
// import { loadEnv } from 'vite'
// import { VITE_ENV_CONFIG } from './types/config'

const lifecycle = process.env.npm_lifecycle_event

const setName = process.env.GLOBAL_TITLE

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    secret: process.env.VITE_BASE_ENV,
    public: {
      baseURL: process.env.VITE_BASE_URL
    }
  },
  meta: {
    titleTemplate: setName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'pgcm, 技术社区, 开发技术社区' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },
  alias: {
    '@/*': './*',
    '~/*': './public/*'
  },
  typescript: {
    strict: true
  },
  // build
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : [],
    terser: {
      terserOptions: {
        compress: {
          drop_console: false // 生产环境中删除console
        }
      }
    }
  },
  buildModules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    viewer: true,
    injectPosition: 0
  },
  // css
  css: ['~/assets/css/index.scss'],
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
