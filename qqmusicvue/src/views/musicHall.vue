<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
        <catalogues></catalogues>
        <cards></cards>
        <songlist msg="官方歌单" :songlist="songlist"></songlist>
        <songlist msg="达人歌单" :songlist="songlist"></songlist>
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
            imgurl:"",
            songlist:[
                {
                  pic: "f8.jpg",  
                  iconName:"",
                  playCount:"1888万",
                  title:"下一首情歌"
                },
                {
                  pic: "f8.jpg",  
                  iconName:"",
                  playCount:"148万",
                  title:"下一首情歌"
                },
                {
                  pic: "f8.jpg",  
                  iconName:"",
                  playCount:"356万",
                  title:"下一首情歌"
                },
                {
                  pic: "f8.jpg",  
                  iconName:"",
                  playCount:"500万",
                  title:"下一首情歌"
                },
                {
                  pic: "f8.jpg",  
                  iconName:"",
                  playCount:"186万",
                  title:"下一首情歌"
                },
            ]
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