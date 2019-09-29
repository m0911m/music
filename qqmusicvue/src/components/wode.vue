<template>
  <div>
    <searchbar msg="我的" :imgurl="require('../assets/woright.png')"></searchbar>
    <login></login>
    <wpdeboard></wpdeboard>
  </div>
</template>
<script>
import SearchBar from './common/SearchBar'
import Wodeboard from './common/Wodeboard'
import Login from './common/Login'
  export default{
      data(){
    return{
      msg:"",
      imgurl:""
    }
  }, 
    components:{
      "login":Login,
      "searchbar":SearchBar,
      "wpdeboard":Wodeboard
    }
  }
</script>
<style scoped>
  
</style>