import axios from 'axios'
export function request (config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
  instance.interceptors.request.use(config => {
    config.headers['token'] = 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJ1c2VySWQiOiIwMWE4MDlmM2ZhMjk0ZjJkYTNkYTY2MWM5MmRlMzMzNCJ9.2vrKm8t2MRc_BtBQ7tP83IqzGaEWBuMiuTjyu61-SkM'
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
