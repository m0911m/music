<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
        <catalogues></catalogues>
        <cards></cards>
        <songlist></songlist>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar.vue"
import Swipe from "../components/common/Swipe.vue"
import Catalogues from "../components/common/Catalogues.vue"
import Cards from "../components/common/Cards.vue"
import Songlist from "../components/common/Songlist.vue"
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
        "catalogues":Catalogues,
        "cards":Cards,
        "songlist":Songlist
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
</style>