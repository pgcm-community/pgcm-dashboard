<template>
  <SvgIcon icon="search" size="22px" @click="handleOpen" />

  <teleport to="body">
    <div v-if="show" class="search-container">
      <div ref="modal" class="search-modal">
        <div class="searchBar" ref="searchBar">
          <input v-model="counter" type="text" placeholder="Search" />
          <SvgIcon icon="search" size="23px" />
        </div>

        <div class="search-content">
          <div class="startSearch">No recent searches</div>
        </div>
      </div>
      <div class="mohu"></div>
      <div class="mask"></div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { ref, onBeforeMount, onUnmounted } from 'vue'
  import PCard from '../PCard/index.vue'

  let modal = ref<HTMLElement>()
  const show = ref<boolean>(false)
  const searchBar = ref<HTMLElement>()

  // 添加esc 退出事件
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      show.value = false
    }
  }

  onBeforeMount(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  function handleOpen() {
    show.value = true
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
