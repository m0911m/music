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
// 2:单引入mint-ui库中样式文件
import "mint-ui/lib/style.css"
// 3:将mint-ui注册vue实例
Vue.use(MintUI)
// 4.引入字体图标文件
import "./font/iconfont.css"


// 5.引入axios模块
import axios from "axios"
// 6.配置服务器的基础路径
axios.defaults.baseURL="http://127.0.0.1:3000"
// 7.配置保存session信息
axios.defaults.withCreadentials=true
// 8.注册axios->vue
Vue.prototype.axios=axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
