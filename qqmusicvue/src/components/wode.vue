<template>
  <div>
    <searchbar msg="我的" :imgurl="require('../assets/woright.png')"></searchbar>
    <wpdeboard></wpdeboard>
  </div>
</template>
<script>
import SearchBar from './common/SearchBar'
import Wodeboard from './common/Wodeboard'

  export default{
      data(){
    return{
      msg:"",
      imgurl:""
    }
  }, 
    components:{
      "searchbar":SearchBar,
      "wpdeboard":Wodeboard
    }
  }
</script>
<style scoped>
  
</style>