<template>
  <div
    :class="['p-icon']"
    :style="{ color: color, 'font-size': size }"
    @click="onClick"
  >
    <i>{{ icons[icon] }}</i>
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
      required: true,
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
    src: url('../../assets/fonts/icomoon Regular.ttf') format('truetype');
  }

  .p-icon {
    font-family: 'p-icon' !important;
    font-size: 16px;
    text-align: center;
  }

  i {
    cursor: pointer;
    line-height: 1;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: 8px;
  }
</style>
