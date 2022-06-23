import { defineNuxtConfig } from 'nuxt';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [VueSetupExtend()],
  },
});
