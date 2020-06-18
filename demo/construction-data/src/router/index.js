import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/datav'
  },
  {
    path: '/datav',
    name: 'Datav',
    component: () => import('../components/datav/index.vue')
  },
  {
    path: '/bim',
    name: 'Bim',
    component: () => import('../bim/securityBIM.vue')
  }
  // {
  //   path: '/bim',
  //   name: 'Bim',
  //   component: () => import('../bim/lightBIM.vue')
  // }
  // {
  //   path: '/latest',
  //   name: 'Latest',
  //   component: () => import('../views/Latest.vue')
  // },
  // {
  //   path: '/shanghai',
  //   name: 'SH',
  //   component: () => import('../views/SH.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes
})

export default router
