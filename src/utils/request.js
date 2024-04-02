// 1. 导入
import axios from 'axios'

// 2. 配置
// 创建实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})

// 请求拦截器

// 3. 导出
export default request
