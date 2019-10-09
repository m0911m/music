import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
import Dynamic from './views/Dynamic.vue'
import Wode from './components/wode.vue'
import Login from './components/common/Login.vue'
import Tuijian from './components/Tuijian.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {path:'/Tuijian',component:Tuijian},
    {path:'/login',component:Login},
    {path:'/wode',component:Wode},
    {path:'/musicHall',component:musicHall},
    {path:'/dynamic',component:Dynamic}
  ]
})
