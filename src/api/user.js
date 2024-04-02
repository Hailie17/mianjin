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
