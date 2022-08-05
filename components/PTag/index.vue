<template>
  <div :class="cls" :style="style">
    <span class="p-text">
      <slot />

      <SvgIcon
        v-if="closable"
        @click="handleClose"
      >x
      </SvgIcon>
    </span>
  </div>
</template>

<script setup lang="ts" name="PTag">
  import { computed } from 'vue'
  import { Props, Emits } from './tag'
  import SvgIcon from '../SvgIcon'

  const props = defineProps(Props)
  const emits = defineEmits(Emits)

  const style = {
    borderRadius: props.round
  }

  const cls = computed(() => [
    'p-tag',
    `p-tag-${props.type}`,
    {
      [`p-tag-${props.size}`]: props.size
    }
  ])

  const handleClose = (evt: Event): void => {
    evt.stopPropagation()
    emits('close', evt)
  }
</script>

<style scoped></style>
