import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
// import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: {
      title: '新书上市'
    },
    component: () => import('../components/BooksNew.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach(to => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // 判断该路由是否需要登录权限
    if (store.state.user.user) { // 路由需要验证，判断用户是否已经登录
      return true
    } else {
      return {
        path: '/login',
        query: { redirect: to.fullPath }
      }
    }
  } else {
    return true
  }
})
*/

router.beforeEach(() => {
   return true
})

// 设置页面的标题
router.afterEach((to) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
})

export default router
