import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {path:'/musicHall',component:musicHall}
  ]
})
