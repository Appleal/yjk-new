import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import { getToken } from '@/common/js/storage'
import { ERR_CEASE, BASE_ENV, ERR_ERROR } from '@/api/config'
import { Loading, Message } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 路由跳转之前，判断 token是否存在，不存在跳转到登录页
  const token = getToken()
  if (token === 'null' || token === null) {
    if (to.path === '/login') {
      next()
      return
    } else {
      next('/login')
    }
    return
  } else {
    // token存在，放请求接口的请求头
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  next()
})
axios.interceptors.request.use(function(config) {
  // 打包之后，请求接口需要添加前缀 '/prod'
  if (process.env.NODE_ENV === 'production') {
    // 正式环境需要 /prod
    if (BASE_ENV === 'pro') {
      config.url = '/prod' + config.url
    } else {
      config.url = config.url
    }
  }
  return config
}, function(error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function(response) {
  // token失效，跳转到登录页
  if (response.data.code === ERR_CEASE) {
    Message.error('登录失效，请重新登录！')
    router.push('/login')
  }
  // 请求报错
  if (response.data.code === ERR_ERROR) {
    Message.error('系统发生错误，重新登录！')
  }
  return response
}, function(error) {
  return Promise.reject(error)
})
Vue.use(Loading.directive)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
