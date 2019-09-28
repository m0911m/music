<template>
  <div>
    <van-swipe :autoplay="3000" :width="400" @change="onChange">
      <van-swipe-item><img src="../../assets/1746014.jpg" style="height:200px;" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/1747083.jpg" style="width:100%; height:200px;" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/1747238.jpg" style="width:100%; height:200px;" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/1747869.jpg" style="width:100%; height:200px;" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../assets/1748028.jpg" style="width:100%; height:200px;" alt=""></van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{current+1}}/5</div>
    </van-swipe>
  </div>
</template>
<script>
export default{
  data(){
    return{
      current:0
    }
  },
  methods:{
    onChange(index){
      this.current-index;
    }
  }
}
</script>
<style scoped>

</style>