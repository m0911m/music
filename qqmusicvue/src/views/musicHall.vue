<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
        <catalogues></catalogues>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar.vue"
import Swipe from "../components/common/Swipe.vue"
import Catalogues from "../components/common/Catalogues.vue"
export default {
    data(){
        return{
            msg:"",
            imgurl:""
        }
    },
    components:{
        "searchbar":SearchBar,
        "swipe":Swipe,
        "catalogues":Catalogues
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
</style>