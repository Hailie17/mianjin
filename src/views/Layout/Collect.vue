<template>
  <div class="collect-page">
    <!-- 标题 -->
    <van-nav-bar title="收藏" />
    <!-- 列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { collectLikeListAPI } from '@/api/article'
export default {
  name: 'collect-page',
  data() {
    return {
      current: 1,
      list: [],
      finished: false,
      loading: false
    }
  },
  methods: {
    async onLoad() {
      try {
        const res = await collectLikeListAPI({
          page: this.current,
          optType: 2
        })
        this.list.push(...res.data.data.rows)
        this.loading = false
        this.current++
        if (this.current > res.data.data.pageTotal) {
          this.finished = true
        }
      } catch (error) {
        if (error.response) {
          this.$toast(error.response.data.message)
        } else {
          this.$toast('数据获取失败')
        }
      }
    },
    changeSorter(sorter) {
      this.sorter = sorter
      this.current = 1
      this.list = []
      this.loading = true // 避免重复发请求
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.collect-page {
  margin-bottom: 50px;
}
</style>
