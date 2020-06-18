import { request } from './network'
// 人流量
export function getPeopleData () {
  return request({
    url: '/opc/getOnlinePeopleCount'
  })
}
// 电量
export const getSelectElectrical = (range) => {
  return request.post('/opc/selectElectrical', { range })
}
export const getSelectElectricalHistory = (range, type) => {
  return request({
    url: '/opc/selectElectricalHistory',
    method: 'post',
    data: {
      range,
      type
    }
  })
}
// 巡更
export const getPatrolSummaryDimensionByDay = (params) => {
  return request({
    url: '/manage/getPatrolSummaryDimensionByDay',
    method: 'post',
    data: params
  })
}
// 事件

export const getEvents = () => {
  return request({
    url: '/auth/getEvents'
  })
}
