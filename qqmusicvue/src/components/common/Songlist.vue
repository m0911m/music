<template>
    <div>
        <div class="title">
            <h3>{{msg}}</h3>
            <span class="more">
                <router-link to="">
                更多 >
                </router-link>
            </span>
        </div>
        <ul>
            <li v-for="(item,i) of songlist" :key="i">
                <router-link to="">
                    <img :src="require('../../assets/'+songlist[i].pic)" alt="">
                    <span class="text">{{songlist[i].title}}</span>
                </router-link>        
                <span class="play-count">{{songlist[i].playCount}}</span>
                <span class="play"></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        msg:{default:""},
        songlist: {default: []}
    }
}
</script>
<style scoped>
.title{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:.5rem;
}
h3{
    margin-left: 1rem;
    font-size:1.1rem;
    margin-bottom:.6rem;
}
.more{
    margin-right: 1rem;
    font-size:0.9rem;
}
ul{
    display:flex;
    overflow:scroll; /*溢出滚动*/
}
li{
    position: relative;
    width:6.3rem;
    border-radius:0.3rem;
    margin:0 0.24rem;
    flex-shrink:0;    /*让项目们不因为空间小而收缩*/
    text-align:left;
}
ul>li:first-child{
    margin-left:calc(25vw - 5.1rem);

} 
ul>li:last-child{
    margin-right:calc(25vw - 5.1rem);

}
li img{
    width:100%;
    border-radius:.3rem;
}
li .play-count{
    font-size:.75rem !important;
    position:absolute;
    top:4.8rem;
    left:.3rem;
    color:#fff;
    background-image:url(../../assets/erji.png);
    background-position:left center;
    background-size:auto 100%;
    background-repeat:no-repeat;
    padding-left:.9rem;
}
li .play{
    position:absolute;
    width:1.5rem;height:1.5rem;
    background:url(../../assets/play.png) no-repeat center/100%;
    top:4.4rem;
    right:.3rem;
}   
li .text{
    font-size:0.9rem;
    display:inline-block;
    margin:.3rem 0;
}
</style>