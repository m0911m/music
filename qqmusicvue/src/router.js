import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
Vue.use(Router)

//将组建Vantswipe.vue引入router.justify
import Vantswipe from "./components/common/Vantswipe.vue"

export default new Router({
  routes: [
    {path:"/Vantswipe",component:Vantswipe},
    {path:'/musicHall',component:musicHall}
  ]
})
