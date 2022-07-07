<template>
  <div class="search">
    <svg-icon icon="search" :size="iconSize" @click.stop="handleOpen()" />

    <div v-if="show" class="search-dialog">
      <div class="p-input">
        <input type="text" @focus="handleInputFocus" />
        <svg-icon icon="search" />
      </div>

      <div v-show="isFocus" class="content">
        <div class="title">
          <span>搜索到 {{ questionCount }}, {{}}</span>
          <div>所有结果</div>
        </div>
        <div class="question">
          <div class="question-title">问题</div>
        </div>
        <div class="answer"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    iconSize: {
      type: String,
      default: (): string => '22px'
    }
  })

  const show = ref<boolean>(false)
  const questionCount = ref<number>(1)
  // 文本框获取焦点后展开
  const isFocus = ref<boolean>(false)
  const value = ref<string>('')

  function handleOpen() {
    show.value = true
  }

  function handleInputFocus(evt: FocusEvent) {
    console.log('获取到焦点了', evt)
    isFocus.value = true
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
