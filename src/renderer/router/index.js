import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/pages/login/index'), hidden: true },
  { path: '/404', component: () => import('@/pages/404'), hidden: true },
  { path: '*', redirect: '/login', hidden: true }
]
export default new Router({
  routes: constantRouterMap,
  scrollBehavior: () => ({
    y: 0
  })
})
