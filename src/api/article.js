import request from '@/utils/request'

export function articleAPI(params) {
  request({
    url: '/h5/interview/query',
    method: 'GET',
    params: params
  })
}
