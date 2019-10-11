<template>
    <div>
        <div class="title">
            <h3>{{msg}}</h3>
            <span class="more">
                <router-link to="">更多 ></router-link>
            </span>
        </div>
        <ul>
            <li v-for="(item,i) of list" :key="i">
                <router-link to="">
                    <!-- <img :src="require('../../assets/'+list[i].pic)" class="pic"> -->
                    <video src="../../assets/video/x.mp4" :id="`v3_${i}`" class="v3"></video>
                    <img :src="require('../../assets/'+list[i].smallpic)" class="smallpic" v-if="list[i].smallpic!=undefined">
                    <span class="text">{{list[i].text}}</span>
                    <span class="playCount">{{list[i].playCount}}</span>
                    <span class="title" @click="playVideo(i, $event)">{{list[i].title}}</span>                   <!--i实参 -->
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        msg:{default:""},
        list:{default:[]}
    },
    methods:{
        playVideo(index, $event){  //形参
            var v3=document.getElementById("v3_"+index);
            console.log("$event", $event);
            if(v3.paused){
                v3.play();
            }else{
                v3.pause();
            }
        }
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
    ul{
        display:flex;
        overflow:scroll;
    }
    li{
        position:relative;
    }
    ul>li:first-child{
    margin-left:calc(25vw - 5.4rem);

    } 
    ul>li:last-child{
        margin-right:calc(25vw - 5.4rem);
    }
    li .pic{
        width:13rem;height:6.9rem;
        margin:0 .24rem;
        border-radius:.3rem;
    }
    li .text{
        position:absolute;
        font-size:.8rem;
        color:#fff;
        top:5.5rem;
        left:2.6rem;
    }
    li .smallpic{
        position:absolute;
        width:1.5rem;
        top:5.1rem;
        left:0.7rem;
        border-radius:50%;
    }
    li .title{
        font-size:.9rem;
    }
    li .playCount{
        font-size:.75rem !important;
        position:absolute;
        top:5.5rem;
        right:.8rem;
        color:#fff;
        background:url(../../assets/shipin.png) no-repeat left center/auto 100%;
        padding-left:1rem;
    }
    li .v3{
        width:13rem;height:6.9rem;
        margin:0 .24rem;
        border-radius:.3rem;
        object-fit: cover;
    }
</style>