<template>
  <div :class="classList" :style="{ padding }">
    <div v-if="isAside || image" class="card-aside">
      <el-image :src="image" fit="contain" />
    </div>
    <div class="p-card-main">
      <div class="p-card-header">
        <div class="avatar">
          <el-image />
        </div>
        <slot name="header" />
      </div>
      <div class="p-card-content">
        <slot />
      </div>
      <div class="p-card-bottom">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Props from './card'

  export const props = defineProps(Props)
</script>

<script setup lang="ts" name="PCard">
  import { ElImage } from 'element-plus'
  import type { ComputedRef } from 'vue'

  import { computed } from 'vue'

  const classList: ComputedRef<object | string[]> = computed((): object | string[] => {
    const { isAside, avatar, image, padding, border, shadow, angle } = props

    return [
      'p-card',
      {
        'p-card-shadow': shadow,
        'p-card-angle': angle,
        'p-card-border': border,
        'p-card--aside': isAside,
        [`p-card--${padding}`]: padding,
        ['p-card--avatar']: avatar,
        ['p-card--image']: image
      }
    ]
  })
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
