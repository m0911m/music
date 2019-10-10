<template>
    <div>
        <searchbar msg="音乐馆" :imgurl="require('../assets/music.png')"></searchbar>
        <swipe></swipe>
        <catalogues></catalogues>
        <cards></cards>
        <songlist msg="官方歌单" :songlist="songlist"></songlist>
        <songlist msg="达人歌单" :songlist="songlist1"></songlist>
        <mvlist :list="list"></mvlist>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar.vue"
import Swipe from "../components/common/Swipe.vue"
import Catalogues from "../components/common/Catalogues.vue"
import Cards from "../components/common/Cards.vue"
import Songlist from "../components/common/Songlist.vue"
import MVlist from "../components/common/MVlist.vue"
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
            ],
            songlist1:[
                {
                  pic: "you.jpg",  
                  iconName:"",
                  playCount:"1888万",
                  title:"下一首情歌"
                },
                {
                  pic: "you.jpg",  
                  iconName:"",
                  playCount:"148万",
                  title:"下一首情歌"
                },
                {
                  pic: "you.jpg",  
                  iconName:"",
                  playCount:"356万",
                  title:"下一首情歌"
                },
                {
                  pic: "you.jpg",  
                  iconName:"",
                  playCount:"500万",
                  title:"下一首情歌"
                },
                {
                  pic: "you.jpg",  
                  iconName:"",
                  playCount:"186万",
                  title:"下一首情歌"
                }
            ],
            list:[
                {
                  pic: "Lan.jpg",  
                  smallpic:"timg.jpg",
                  text:"国风专区",
                  title:"赏一首悠悠古韵"
                },
                {
                  pic: "Lan.jpg",  
                  smallpic:"timg.jpg",
                  text:"国风专区",
                  title:"赏一首悠悠古韵"
                },
                {
                  pic: "Lan.jpg",  
                  smallpic:"timg.jpg",
                  text:"国风专区",
                  title:"赏一首悠悠古韵"
                },
                {
                  pic: "Lan.jpg", 
                  smallpic:"timg.jpg", 
                  text:"国风专区",
                  title:"赏一首悠悠古韵"
                },
                {
                  pic: "Lan.jpg", 
                  smallpic:"timg.jpg", 
                  text:"国风专区",
                  title:"赏一首悠悠古韵"
                }
            ]
        }
    },
    components:{
        "searchbar":SearchBar,
        "swipe":Swipe,
        "catalogues":Catalogues,
        "cards":Cards,
        "songlist":Songlist,
        "mvlist":MVlist
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
    a{
      color:#000;
    }
</style>