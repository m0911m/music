<template>
  <div>
    <searchbar msg="我的" :imgurl="require('../assets/woright.png')"></searchbar>
    <xinxi></xinxi>
    <wpdeboard></wpdeboard>
  </div>
</template>
<script>
import SearchBar from './common/SearchBar'
import Wodeboard from './common/Wodeboard'
import Xinxi from './common/Xinxi'
  export default{
      data(){
    return{
      msg:"",
      imgurl:""
    }
  }, 
    components:{
      "xinxi":Xinxi,
      "searchbar":SearchBar,
      "wpdeboard":Wodeboard
    }
  }
</script>
<style scoped>
  
</style>