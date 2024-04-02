<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="标题" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="userRules" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 超链接 -->
    <router-link to="/register" class="link">还没有账号？去登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data() {
    return {
      username: '',
      password: '',
      userRules: [
        { required: true, message: '请填写用户名' },
        { pattern: /~\w{2,10}$/, message: '请输入2-10位的用户名' }
      ]
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  },
  mounted() {
    this.$toast('登录成功')
  }
}
</script>

<style lang="less" scoped>
.link {
  float: right;
  padding-right: 10px;
  font-size: 14px;
  color: #1989fa;
}
</style>
