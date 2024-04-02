// 1. 导入
import axios from 'axios'

// 2. 配置
// 创建实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('mobile-token')
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 3. 导出
export default request
