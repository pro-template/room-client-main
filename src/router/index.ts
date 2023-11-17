import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import { checkLoginStatusApi } from '@/api/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }
  ]
})
router.beforeEach(async (to, from) => {
  if (to.name === 'home') {
    // const res = await checkLoginStatusApi()

    // console.log('res', res)

    // if (!res.is_login) {
    //   return '/login'
    // }
    return true
  }
  if (to.name === 'login' || to.name === 'register') {
    // const res = await checkLoginStatusApi()
    // console.log('res', res)
    // if (res.is_login) {
    //   return '/'
    // }
    return true
  }
})

export default router
