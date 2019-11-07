import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/sys/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
