<template>
  <div id="myCard" class="myCard">
    <div @click="handleFlip" id="container" class="container">
      <div id="face" class="face">正面</div>
      <div id="back" class="back">反面</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const flag = ref(false)

  function handleFlip() {
    let container = document.getElementById('container') as any
    container.style.transform = flag.value ? 'rotateY(180deg)' : ''
    flag.value = !flag.value
  }
</script>

<style scoped>
  .myCard {
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  .container {
    position: relative;
    transition: all 0.5s;
    width: 160px;
    height: 250px;
    padding: 20px;
    transform-style: preserve-3d;
  }
  .face,
  .back {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .face {
    z-index: 1;
    background-color: antiquewhite;
  }
  .back {
    transform: rotateY(180deg);
    background-color: aqua;
  }
</style>
