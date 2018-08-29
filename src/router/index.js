import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/views/Login/Login'], resolve)
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
