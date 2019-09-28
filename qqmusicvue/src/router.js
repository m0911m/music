import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
import Dynamic from './views/Dynamic.vue'
import wode from './components/wode.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {path:'/wode',component:wode},
    {path:'/musicHall',component:musicHall},
    {path:'/dynamic',component:Dynamic}
  ]
})
