import axios from 'axios'
// 登录
export function login({ userName, password }) {
  const url = '/yjk-consult/consultant/login'
  return axios.post(url, {
    username: userName,
    pwd: password
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
