<template>
    <div class="cards">
        <div class="card" v-for="(pic,i) of pics" :key="i">
            <img :src="require('../../assets/CsYa.jpg')" class="imgstyle">
            <div class="cardtext">
                <span>{{title}}</span>
                <span>{{subtitle}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pics:["CsYa.jpg","AfYu.jpg"],
            title:["新歌新碟","数字专辑"],
            subtitle:["麻辣鸡退休?NO!","限定记忆序章"]
        }
    }
}
</script>

<style>
.cards{
    display:flex;
    justify-content:space-around;
    padding:1rem 0.5rem;
}
.card{
    display:flex;
    width:10.7rem;
    height:5rem;
    background-color:#31c27c;
    border-radius:5%;
}
.cardtext{
    display:inline-flex;
    flex-direction:column;
    align-items:flex-start;
}
.imgstyle{
    width:3.5rem;
    height:3.5rem;
}
</style>