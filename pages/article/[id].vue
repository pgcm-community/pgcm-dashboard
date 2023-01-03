<template>
  <div class="article-main">
    <div class="header text-3xl leading-normal">
      <div class="icon">
        <SvgIcon icon="back" size="48px" @click="handleBack" />
      </div>
      这是一篇文章
    </div>

    <div class="content">
      <div class="html-body mr-5">
        <div v-html="showHtmlString" class="show-html">

        </div>
      </div>
      <div class="user-body">
        <div class="sup rounded-2xl mb-5">
          <div class="font-semibold text-2xl">被官方推荐</div>
          <div class="sup-button rounded-sm">查看推荐合集</div>
        </div>

        <div class="avatar-card">
          <div class="avatar">
            <el-avatar size="large" />
            <div>XiaoLi_1456</div>
          </div>
          <div class="time">发布于 {{ detail.time }}</div>

          <div class="first1">xx 阅读</div>

          <div class="button-body"><SvgIcon color="#FFFFFF" icon="eyes" />关注</div>

          <el-divider />

          <div class="tags-body">
            <div class="tags-header">标签</div>
            <div class="tags">
              <PTag
                v-for="(item, index) in tagsList"
                :key="index"
                color="rgba(241, 246, 255, 1)"
                fontcolor="#000000FF"
                round="6px"
                >{{ item.title }}
              </PTag>
            </div>
          </div>

          <el-divider />

          <div>收藏 点赞 分享 举报</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { ElAvatar, ElDivider } from 'element-plus'
  import { timestampFoDate } from '@/utils/tools'
  import { useRouter, ref } from '#imports'
  import markdown from "@/utils/markdown";

  let testData = '## 你好'
  const router = useRouter()

  const showHtmlString = markdown.render(testData)
  const tagsList = ref([
    { id: 1, title: 'vue' },
    { id: 2, title: '缓存' }
  ])

  const detail = ref({
    avatar: '牛的',
    time: timestampFoDate(1659628227)
  })

  function handleBack() {
    router.back()
  }

  onMounted(() => {})
</script>

<style scoped lang="scss">
  @import './article.scss';
</style>
