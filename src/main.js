// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.meta.requiresAuth) {
    console.log('need to login')
    const api = `${process.env.APIPATH}/api/user/check`
    axios.post(api).then(response => {
      // console.log(response.data)
      if (response.data.success) {
        // this.$router.push('/')
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
}
)
