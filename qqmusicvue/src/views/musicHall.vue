<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar"
import Swipe from "../components/common/Swipe"
export default {
    data(){
        return{
            msg:"",
            imgurl:""
        }
    },
    components:{
        "searchbar":SearchBar,
        "swipe":Swipe
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
</style>