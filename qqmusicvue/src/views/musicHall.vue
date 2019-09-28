<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
        <catalogues></catalogues>
        <cards></cards>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar"
import Swipe from "../components/common/Swipe.vue"
import Catalogues from "../components/common/Catalogues.vue"
import Cards from "../components/common/Cards.vue"
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
        "cards":Cards
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
</style>