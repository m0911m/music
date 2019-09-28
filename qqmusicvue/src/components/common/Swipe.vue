<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
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
            banners:["1749276.jpg","1749533.jpg","1749743.jpg","1749758.jpg"]
        }
    }
}
</script>

<style>
.image{
    height:10rem;
}
</style>