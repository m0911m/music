<template>
    <div>
        <div class="title">
            <h3>官方歌单</h3>
            <span class="more">
                <router-link to="">
                更多 >
                </router-link>
            </span>
        </div>
        <ul>
            <li v-for="(item,i) of songlist" :key="i">
                <img :src="require('../../assets/'+songlist[i].pic)" alt="">
                <span class="iconfont"></span>
                <span class="iconfont play-count">{{songlist[i].playCount}}</span>
                <span></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            songlist:[
                {
                  pic: "uboy.png",  
                  iconName:"",
                  playCount:"1888万",
                },
                {
                  pic: "ugirl.png",  
                  iconName:"",
                  playCount:"148万",
                },
                {
                  pic: "uboy.png",  
                  iconName:"",
                  playCount:"356万",
                },
                {
                  pic: "uboy.png",  
                  iconName:"",
                  playCount:"500万",
                },
                {
                  pic: "uboy.png",  
                  iconName:"",
                  playCount:"186万",
                },
            ]
        }
    }
}
</script>
<style scoped>
.title{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
h3{
    margin-left: 1rem;
    font-size:1.1rem;
}
.more{
    margin-right: 1rem;
    font-size:0.9rem;
}
ul{
    display:flex;
    overflow:scroll;
}
li{
    position: relative;
    width:7rem;height:7rem;
    border-radius:0.3rem;
    margin:0 0.2rem;
    flex-shrink:0;
    background-color:aquamarine;
}
ul>li:first-child{
    margin-left:calc(25vw - 5.1rem);

} 
ul>li:last-child{
    margin-right:calc(25vw - 5.1rem);

}
li img{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
}
li .play-count{
    position: absolute;
    left: .5rem;
    bottom: .5rem;
    font-size: .75rem !important;
    color: #fff;
}
</style>