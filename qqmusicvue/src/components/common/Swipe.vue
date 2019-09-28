<template>
    <div>
        <van-swipe :width="400" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(pic,i) of banners" :key="i">
                <img :src="require(`../../assets/${pic}`)" class="image">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return{
            banners:["1746014.jpg","1747083.jpg","1747238.jpg","1747869.jpg","1748028.jpg"]
        }
    }
}
</script>

<style>
.image{
    height:10rem;
}
</style>