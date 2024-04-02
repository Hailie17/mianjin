<template>
  <div class="login-page">
    <!-- 标题 -->
    <van-nav-bar title="注册" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="userRules" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <!-- 超链接 -->
    <router-link to="/login" class="link">已有账号？去登录</router-link>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  name: 'register-page',
  data() {
    return {
      username: '',
      password: '',
      userRules: [
        { required: true, message: '请填写用户名' }
        // { pattern: /~\w{2,10}$/, message: '请输入2-10位的用户名' }
      ]
    }
  },
  methods: {
    async onSubmit(values) {
      const res = await request({
        method: 'POST',
        url: '/h5/user/register',
        data: values
      })
      console.log(res)
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
