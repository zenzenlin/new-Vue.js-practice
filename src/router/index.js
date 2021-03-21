import Vue from 'vue'
import Router from 'vue-router'
// 官方的元件
import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child from '@/components/pages/child'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
import Menu from '@/components/pages/menu'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/Dashboard'
import Product from '@/components/Product'
// 自訂的元件
Vue.use(Router)
// 啟用的方式
// 匯出給entry(main.js)使用
export default new Router({
  routes: [
    // 新增路徑及對應的元件物件
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Product,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/page',
      // name: 'page',
      // component: Page,
      components: {
        default: Page,
        menu: Menu
      },
      children: [
        {
          path: '',
          name: 'child',
          component: child
        },
        {
          path: 'child2',
          name: 'child2',
          component: child2
        },
        {
          path: 'child3/:id',
          name: 'child3',
          component: child3
        }
      ]
    }
  ]
})
