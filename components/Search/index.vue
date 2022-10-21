<template>
  <teleport to="body" @click="handleClose">
    <div class="search-container">
      <div v-if="show" ref="modal" class="search-modal">
        <div class="searchBar">
          <input v-model="counter" type="text" @focus="handleInputFocus" />
          <SvgIcon icon="search" size="23px" />
        </div>

        <div v-show="isFocus" class="search-content">
          <div class="startSearch">No recent searches</div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PCard from '../PCard/index.vue'

  let modal = ref<HTMLElement>()
  const show = ref<boolean>(false)

  function handleDocumentClick(e: Event) {
    if (!show || !modal.value || !modal.value.contains(e.target)) return
    show.value = false
  }

  const props = defineProps({
    iconSize: {
      type: String,
      default: (): string => '22px'
    }
  })

  const emit = defineEmits({
    open: (evt: Event): Event => evt
  })

  const questionCount = ref<number>(1)
  // 文本框获取焦点后展开
  const isFocus = ref<boolean>(false)
  const value = ref<string>('')

  function handleOpen() {
    show.value = true
  }

  const counter = useCookie('counter')

  function handleInputFocus(evt: FocusEvent) {
    counter.value = counter.value || Math.round(Math.random() * 1000)
    console.log('获取到焦点了', evt)
    isFocus.value = true
  }

  function handleClose() {
    show.value = false
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
