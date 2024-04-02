import request from '@/utils/request'

// 注册接口
// 按需导出
export function registerAPI(data) {
  return request({
    method: 'POST',
    url: '/h5/user/register',
    data: data
  })
}

// 登录
export function loginAPI(data) {
  return request.post('/h5/user/login', data)
}
