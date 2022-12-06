<template>
  <div class="page-container">
    <div class="col">
      <div class="col-header">主页</div>
      <div class="col-content">
        <div class="col-bar">
          <div>当前热门问题</div>
          <div style="cursor: pointer" @click="router.push('/ranking')">查看详细排行</div>
        </div>
        <div class="col-main">
          <div v-for="(item, index) in ques" :key="index" class="issue-row">
            <div class="issue-body">
              <div :class="{ 'left-back': index < 3, left: true }">{{ index + 1 }}</div>
              <div class="right">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="row-module">
        <div class="row-module-header">底下热门模块</div>
        <div class="row-content">
          <div class="card">
            <div class="card-header">
              <div class="text">前端</div>
              <div class="right"></div>
            </div>
            <div class="card-main">
              <div class=""></div>
              <div class=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="col-header-spec">
        <div class="left">来自 PGCM 社区的内容</div>
        <div class="right">
          <SvgIcon icon="allect" />
          选择你的偏好内容
        </div>
      </div>

      <div class="row-content">
        <div class="tabs">
          <div
            v-for="(item, index) in articleTypeList"
            :key="index"
            :class="['tab-item', { active: item.id === active }]"
            @click="handleType(item.id)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="article-content">
          <PCard v-for="(item, index) in articleList" :key="index" :image="item.image">
            <template #header>
              <div @click="handleArticleDetail(item.id)">{{ item.title }}</div>
            </template>
            <div class="main">
              <div class="main-content">{{ item.disd }}</div>
              <div class="main-bottom">
                <SvgIcon icon="eyes">{{ item.view }}</SvgIcon>
                <SvgIcon icon="givelike">{{ item.give }}</SvgIcon>
                <SvgIcon icon="allect">{{ item.collect }}</SvgIcon>
              </div>
            </div>
          </PCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from '#imports'

  const router = useRouter()
  const active = ref(1)
  const articleTypeList = ref([
    { id: 1, title: '你的偏好' },
    { id: 2, title: '最新' },
    { id: 3, title: '精选' },
    { id: 4, title: '阅读量排行' }
  ])

  const ques = ref([
    { id: 1, text: '如何理解闭包?' },
    { id: 2, text: '如何理解闭包?' },
    { id: 3, text: '如何理解闭包?' },
    { id: 4, text: '如何理解闭包?' },
    { id: 5, text: '如何理解闭包?' },
    { id: 6, text: '如何理解闭包?' }
  ])

  const articleList = ref([
    {
      id: 1,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 801,
      give: 300,
      collect: 100,
      image: 'https://xiaoli-wyy.oss-cn-hongkong.aliyuncs.com/%E5%86%85%E6%B5%8B.png'
    },
    {
      id: 2,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 802,
      give: 300,
      collect: 100,
      image: 'https://xiaoli-wyy.oss-cn-hongkong.aliyuncs.com/%E5%86%85%E6%B5%8B.png'
    },
    {
      id: 3,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 803,
      give: 300,
      collect: 100,
      image: 'https://xiaoli-wyy.oss-cn-hongkong.aliyuncs.com/%E5%86%85%E6%B5%8B.png'
    },
    {
      id: 4,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 800,
      give: 300,
      collect: 100
    },
    {
      id: 5,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 800,
      give: 300,
      collect: 100
    },
    {
      id: 6,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 800,
      give: 300,
      collect: 100
    },
    {
      id: 7,
      title: 'PGCM —— 一个全新的程序员社区',
      disd: '欢迎来到 Programme Community ，这里是你自由交流的平台，与他人共享你的智慧，共同建设更好的开源世界。接下来就是示例文本了：刘东：微软研发集团的品牌、收入等对于研发人员的吸引力是可想而知的。但是，我感到，将3000多名全球顶尖的技术，这里是你自由交流的平台，与他人共享你的智慧，这里是你自由交流的平台，与他人共享你的智慧，这将3000多名全球',
      view: 800,
      give: 300,
      collect: 100
    }
  ])

  // 颜色对象
  function Color(r: string | number, g: string | number, b: string | number) {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    return 'rgba(' + r + ',' + g + ',' + b + ',0.8)'
  }

  function handleType(type: number) {
    active.value = type
  }

  function handleArticleDetail(id: number) {
    router.push({
      path: `/article/${id}`
    })
  }
</script>

<style scoped lang="scss">
  @import './index.scss';
</style>
