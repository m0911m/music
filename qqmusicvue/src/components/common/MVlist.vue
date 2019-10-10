<template>
    <div>
        <div class="title">
            <h3>分类歌单</h3>
            <span class="more">
                <router-link to="">更多 ></router-link>
            </span>
        </div>
        <ul>
            <li v-for="(item,i) of list" :key="i">
                <img :src="require('../../assets/'+list[i].pic)">
                <img :src="require('../../assets/'+list[i].smallpic)" class="smallpic">
                <span class="text">{{list[i].text}}</span>
                <span class="title">{{list[i].title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        msg:{default:""},
        list:{default:[]}
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
    li img{
        width:10rem;
        margin:0 .24rem;
        border-radius:.3rem;
    }
    li .text{
        position:absolute;
        font-size:.8rem;
        color:#fff;
        top:4.15rem;
        left:2.6rem;
    }
    li .smallpic{
        position:absolute;
        width:1.5rem;
        top:3.8rem;
        left:0.5rem;
        border-radius:50%;
    }
    li .title{
        font-size:.9rem;
    }
</style>