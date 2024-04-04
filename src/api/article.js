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

// 点赞 收藏
export function collectAndLickAPI(data) {
  return request.post('/h5/interview/opt', data)
}

// 收藏列表
export function collectLikeListAPI(params) {
  return request({
    url: '/h5/interview/opt/list',
    params: params
  })
}
