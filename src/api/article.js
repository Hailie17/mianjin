import request from '@/utils/request'

// 文章列表
export function articleAPI(params) {
  return request({
    url: '/h5/interview/query',
    method: 'GET',
    params: params
  })
}

// 文章详情
export function detailAPI(id) {
  return request({
    url: '/h5/interview/show',
    method: 'GET',
    params: {
      id: id
    }
  })
}
