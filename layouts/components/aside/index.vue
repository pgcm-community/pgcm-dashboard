<template>
  <div class="aside-container">
    <div class="aside-main">
      <div class="header">
        <div class="title">
          <span style="cursor: pointer" @click="handleHome">PGCM</span>
          <div class="icon">
            <!--            <SvgIcon icon="search" size="22px" />-->
            <Search />
          </div>
        </div>
        <div class="tag">
          <div
            v-for="(item, index) in list"
            :key="index"
            :class="{ active: active === item.id, icon: true }"
            @click="handlePage(item)"
          >
            <SvgIcon
              :icon="item.icon"
              size="16px"
              :text="active === item.id ? item.name : ''"
              @click="handleType(item.id)"
            >
              <!--              <span v-show="active === item.id">{{ item.name }}</span>-->
            </SvgIcon>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-header">
          <span>当下热门模块</span>
          <SvgIcon icon="setting" @click="handleModules">所有模块</SvgIcon>
        </div>
        <div class="list">
          <div
            class="col"
            v-for="(item, index) in modules"
            :key="index"
            @click="handleModulesChange(item)"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>

      <Login v-if="!store.$state.isLogin" class="login" />

      <div class="footer">
        <div class="footer-user">
          <el-avatar />
          <SvgIcon icon="theme" size="22px" />
          <SvgIcon icon="message" size="22px" />
          <SvgIcon icon="search" size="22px" />
        </div>
        <div class="footer-supplement">
          <div class="bei">
            <a href="https://beian.miit.gov.cn">皖ICP备2022006484号</a>
            2022 ProgrammerCommunity
          </div>
        </div>
      </div>
    </div>

    <Search />
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import { ElAvatar } from 'element-plus'
  import { getToken } from '@/utils/auth'
  import { userStore } from '@/stores/user'
  import Login from './components/login.vue'

  const active = ref(1)

  const store = userStore()
  const token = getToken()
  const router = useRouter()
  const list = reactive([
    { id: 1, name: '主页', icon: 'home' },
    { id: 2, name: '活动', icon: 'activity' },
    { id: 3, name: '问题', icon: 'book' },
    { id: 4, name: '求职', icon: 'work' }
  ])

  const modules = reactive([
    { id: 1, name: '前端' },
    { id: 2, name: '后端' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Java' },
    { id: 5, name: 'Android' }
  ])

  onMounted(() => {
    // getModule()
  })
  // 回到首页
  function handleHome() {
    console.log('回到首页')
    router.push('/')
  }
  const handleType = (type: number) => {
    active.value = type
  }

  function handlePage(row: any) {
    router.push({})
  }

  // 打开所有模块选择页面
  function handleModules() {}

  function handleModulesChange(row: any) {
    console.log(row)
    router.push({
      path: '/modules',
      query: {
        id: row.id
      }
    })
  }

  function getModule() {
    getDictForType(2).then((res: ResponseType) => {
      console.log('------->', res)
    })
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
