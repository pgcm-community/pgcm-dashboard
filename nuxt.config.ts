import { defineNuxtConfig } from 'nuxt'
import { viteMockServe } from 'vite-plugin-mock'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'

const lifecycle = process.env.npm_lifecycle_event

export default defineNuxtConfig({
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
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: '/'
        }
      ]
    },
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
