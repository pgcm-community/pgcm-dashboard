<template>
  <div :class="classList" :style="{ padding }">
    <div v-if="isAside || image" class="card-aside">
      <el-image v-if="image" :src="image" fit="contain" />
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
  import Props from './interface'
  import { defineComponent, computed } from 'vue'
  import type { ComputedRef } from 'vue'
  import { ElImage } from 'element-plus'

  export default defineComponent({
    name: 'PCard',
    components: { ElImage },
    props: Props,
    setup(props) {
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
      return {
        classList,
        ...props
      }
    }
  })
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
