import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
import Dynamic from './views/Dynamic.vue'
import Me from './components/Me.vue'
import Login from './components/common/Login.vue'
import Register from './components/common/Register.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {path:'/register',component:Register},
    {path:'/login',component:Login},
    {path:'/me',component:Me},
    {path:'/musicHall',component:musicHall},
    {path:'/dynamic',component:Dynamic}
  ]
})
