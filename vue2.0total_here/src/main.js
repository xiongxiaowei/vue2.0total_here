// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import ElementUI from 'element-ui'
import vueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './store1/index'
import Loadings from './components/loading'
import Loadingss from './components/loading/index1'
require('./assets/css/base.css')
/* 全局引入base文件 */
Vue.use(Loadings)
Vue.use(Loadingss)
Vue.use(VueRouter)
Vue.use(vueResource)
const router = new VueRouter({
  mode: 'history',
  /* 切换路劲模式，变成history模式 */
  scrollBehavior: () => ({
    y: 0
  }),
  /* 滚动条滚动行为，不加这个就会默认记忆原来滚动条的位置 */
  routes
})
Vue.use(ElementUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
