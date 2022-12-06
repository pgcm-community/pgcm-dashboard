<template>
  <div :class="['p-icon']" :style="{ color: color, 'font-size': size }" @click="onClick">
    <i>{{ icons[icon] }}</i>
    <div class="text" v-if="text">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts" name="SvgIcon">
  import { reactive } from 'vue'
  import iconsList from './icons'

  const icons = reactive(iconsList)

  interface onClickInstance {
    (evt: PointerEvent): void
  }

  defineProps({
    color: {
      type: String,
      default: '#333333'
    },
    size: {
      type: String,
      default: '16px'
    },
    icon: {
      type: String,
      required: true,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  })

  const emits = defineEmits({
    click: (event: Event): Event => event
  })

  const onClick: onClickInstance = (evt: PointerEvent): void => {
    emits('click', evt)
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'p-icon';
    src: url('@/assets/fonts/icomoon-Regular.ttf') format('truetype');
  }

  .p-icon {
    font-family: 'p-icon' !important;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      //flex: 0 0 auto;
      cursor: pointer;
      line-height: 1;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
</style>
