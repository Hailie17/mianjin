<template>
  <div class="article-page">
    <!-- 导航栏 -->
    <nav class="my-nav van-hairlie--bottom">
      <a href="#" :class="{ active: sorter === 'weight_desc' }" @click="changeSorter('weight_desc')">推荐</a>
      <a href="#" :class="{ active: sorter === null }" @click="changeSorter(null)">最新</a>
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
      </div>
    </nav>
    <!-- 列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ArticleItem v-for="item in list" :key="item.id" :item="item"></ArticleItem>
    </van-list>
  </div>
</template>

<script>
import { articleAPI } from '@/api/article'
export default {
  name: 'article-page',
  data() {
    return {
      current: 1,
      sorter: 'weight_desc',
      list: [],
      finished: false,
      loading: false
    }
  },
  methods: {
    async onLoad() {
      try {
        const res = await articleAPI({
          current: this.current,
          sorter: this.sorter
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
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
