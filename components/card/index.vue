<template>
  <div :class="['p-card']" :style="{ padding }">
    <div v-if="image" class="image">
      <el-image :src="image" />
    </div>
    <div class="p-card-main">
      <div class="p-card-header">
        <slot name="header" />
      </div>
      <div class="p-card-content">
        <slot name="content" />
      </div>
      <div class="p-card-bottom">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="PCard">
  import { ElImage } from 'element-plus'
  import { Props } from './interface'

  const props = defineProps<Props>()
</script>

<style scoped lang="scss"></style>
