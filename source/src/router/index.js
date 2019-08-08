import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: () => import('@/views/index')},

    { path: '/404', component: () => import('@/views/errorPage/page404')},
    { path: '*', redirect: '/404'}
  ]
})
