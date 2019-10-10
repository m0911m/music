<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(pic,i) of banners" :key="i">
                <router-link to="">
                <img :src="require(`../../assets/${pic}`)" class="image">
                </router-link>
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

<style scoped>
:global(.van-swipe-item) > a{
    display: block;
    padding: 0 calc(25vw - 5.1rem);
}
.image{
    width: 100%;
}
</style>