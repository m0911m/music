import Vue from 'vue'
import Router from 'vue-router'
import musicHall from './views/musicHall.vue'
import Dynamic from './views/Dynamic.vue'
import Me from './components/Me.vue'
import Login from './components/common/Login.vue'
<<<<<<< HEAD
import Tuijian from './components/Tuijian.vue'
=======
import Register from './components/common/Register.vue'
>>>>>>> 7a87cd3e500e7bd1ea33fd059d93ee32a6cfed06
Vue.use(Router)


export default new Router({
  routes: [
<<<<<<< HEAD
    {path:'/Tuijian',component:Tuijian},
=======
    {path:'/register',component:Register},
>>>>>>> 7a87cd3e500e7bd1ea33fd059d93ee32a6cfed06
    {path:'/login',component:Login},
    {path:'/me',component:Me},
    {path:'/musicHall',component:musicHall},
    {path:'/dynamic',component:Dynamic}
  ]
})
