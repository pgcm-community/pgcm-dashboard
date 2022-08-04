<template>
  <div class="aside-container">
    <div class="aside-main">
      <div class="header">
        <div class="title">
          <span>PGCM</span>
          <div class="icon">
            <!--            <svg-icon icon="search" size="22px" />-->
            <Search />
          </div>
        </div>
        <div class="tag">
          <div
            v-for="(item, index) in list"
            :key="index"
            :class="{ active: active === item.id, icon: true }"
          >
            <SvgIcon :icon="item.icon" size="18px" @click="handleType(item.id)">
              <span v-show="active === item.id">{{ item.name }}</span>
            </SvgIcon>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <span>当下热门模块</span>
          <SvgIcon icon="setting">所有模块</SvgIcon>
        </div>
        <div class="list">
          <div class="col" v-for="o in 6">
            <span style="cursor: pointer">前端</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'

  const active = ref(1)
  const list = reactive([
    { id: 1, name: '主页', icon: 'home' },
    { id: 2, name: '活动', icon: 'activity' },
    { id: 3, name: '问题', icon: 'book' },
    { id: 4, name: '求职', icon: 'work' }
  ])

  const handleType = (type: number) => {
    active.value = type
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
