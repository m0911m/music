<template>
  <div>
    <searchbar msg="推荐" :imgurl="require('../assets/music.png')"></searchbar>
    <songslist></songslist>
  </div>
</template>
<script>
  import SearchBar from './common/SearchBar'
  import Songslist from './common/Songslist'
  export default {
    data(){
      return{
        msg:"",
        imgurl:""
      }
    },
    components:{
      "searchbar":SearchBar,
      "songslist":Songslist
    }
  }
</script>