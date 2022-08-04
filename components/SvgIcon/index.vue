<template>
  <div class="p-icon" @click="onClick" :style="{ color: color, 'font-size': size }">
    {{ icons[icon] }}
    <slot />
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
      required: true
    }
  })
  const emits = defineEmits({
    click: (event: Event): Event => event
  })

  const onClick: onClickInstance = (evt: PointerEvent): void => {
    emits('click', evt)
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'p-icon';
    src: url('../../assets/fonts/icomoon.ttf') format('truetype');
  }

  @font-face {
    font-family: 'p-icon';
    src: url('../../assets/fonts/icomoon2.ttf') format('truetype');
  }

  .p-icon {
    font-family: 'p-icon' !important;
    line-height: 1;
    font-style: normal;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    cursor: pointer;
  }
</style>
