import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import '../../assets/js/common'
Vue.use(Router)
// 创建一个路由器实例
// 并且配置路由规则
const router = new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['./components/index'], resolve)
    },
    {
      path: '/index',
      component: resolve => require(['./components/index'], resolve)
    },
    {
      path: '/game',
      component: resolve => require(['./components/game'], resolve)
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
