<template>
  <div class="imgs">
    <div class="imgdiv">
    <img class="imgstyle" :src="require('../../assets/xihuan.png')" alt="">
    喜欢
    </div>
    <div class="imgdiv">
    <img class="imgstyle" :src="require('../../assets/zuijin.png')" alt="">
    最近
    </div>
    <div class="imgdiv">
    <img class="imgstyle" :src="require('../../assets/xiazai.png')" alt="">
    下载
    </div>
    <div class="imgdiv">
    <img class="imgstyle" :src="require('../../assets/yigoumai.png')" alt="">
    已购
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{


  }
}
</script>
<style scoped>
.imgs{
  display:flex;
  width:100%;
}
.imgdiv{
  display:flex;
  flex-direction :column;
}
.imgstyle{
  display:flex;
  height:2rem;
}
</style>