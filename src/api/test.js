import request from '@/utils/request'

export function getInformationData(params) {
  return request({
    url: 'student/getInformation',
    method: 'get',
    params
  })
}
