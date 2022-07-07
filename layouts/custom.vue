<template>
  <div class="pgcm-body">
    <aside>
      <PAside />
    </aside>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  import PAside from './components/aside/index.vue'
</script>

<style scoped>
  @import '../styles/layout.scss';
</style>
