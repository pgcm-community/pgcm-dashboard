<template>
  <div :class="cls" :style="style">
    <span class="p-text">
      <slot />

      <SvgIcon v-if="closable" @click="handleClose">x </SvgIcon>
    </span>
  </div>
</template>

<script lang="ts">
  import Tags from './tag-sup'
  import { defineComponent, computed } from "vue";
  import SvgIcon from "@/components/SvgIcon/index.vue";

  const { Props, Emits } = Tags
  export default defineComponent({
    name: "PTag",
    components: SvgIcon,
    props: Props,
    emits: Emits,
    setup(props, { emit }) {
      let style = {
        borderRadius: props.round
      }

      const cls = computed(() => [
        'p-tag',
        `p-tag-${props.type}`,
        {
          [`p-tag-${props.size}`]: props.size
        }
      ])

      if (props.color || props.fontcolor) {
        style = Object.assign(style, {
          backgroundColor: props.color,
          color: props.fontcolor || '#fff',
          border: `1px solid ${props.color}`
        })
      }

      const handleClose = (evt: Event): void => {
        evt.stopPropagation()
        emit('close', evt)
      }
      return {
        cls,
        style,
        handleClose
      }
    }
  })
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
