import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 功能:引入第三方组件库mint-ui
// 1:完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
// 2:单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
// 3:将mint-ui注册vue实例
Vue.use(MintUI)
// 1:引入vant组件Swipe
import { Swipe, SwipeItem } from 'vant';
// 2:单引入vant库中样式文件
import "vant/lib/index.css"
// 3:将Swipe/SwipeItem注册vue实例
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
