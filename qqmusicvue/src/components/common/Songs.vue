<template>
  <div class="rootstyle" @click="itemClick(id)">
    <div class="imgandlablestyle">
      <img :src="imgurl" alt="" class="imgstyle">
      <div class="rightOfImg">
        <span class="title">经典怀旧女声:时过境迁往事已成云烟</span>
        <span class="subtitle">233万人收藏</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    //接收父元素数据
    id:{default:""},
    imgurl:{default:""},
    title:{type:String,default:""},
    subtitle:{type:String,default:""},
    itemClick:{type:Function}
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
  .rootstyle{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imgandlablestyle{
    display: flex;
  }
  .imgstyle{
    display: flex;
    width: 100px;
    height: 100px;
    padding: 5px;
    border-radius: 15px;
  }
  .rightOfImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
  }
  .title{
    color:#000;
    font-size: 15px;
    font-weight: 900;
  }
  .subtitle{
    color:#333;
    font-size: 5px;
    margin-top:15px;
    margin-left: -175px;
    text-align: left;
  }
</style>