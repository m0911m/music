<template>
  <div class="bgColor">
    <!-- 上方 -->
    <!-- 登录,面板 -->
    <div class="upstyle">
      <!-- 左侧的头像 ,昵称-->
        <img :src="require('../../assets/uboy.png')" class="imgstyle" alt="">
        <a href="" class="fontstyle">余生请你指教</a>
      <!-- 右边的消息中心 图片 -->
      <router-link to="">
        <span class="iconfont icon-xiaoxi"></span>
      </router-link>
    </div>
    <div class="downstyle">
      <!-- 下方 -->
      <!-- 左侧 活动中心 -->
      <router-link class="left" to="">
        <span class="iconfont icon-huodongzhongxin"></span>
        <span>活动中心</span>
      </router-link>
      <!-- 右侧 会员中心 -->

    </div>
  </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.bgColor{
  display: flex;
  margin:0 1rem;
  border-radius: 0.3rem;
  background: lightgreen;
  align-items: center;
  flex-wrap: wrap;
}
.upstyle{
  display:flex;
  align-items: center;
}
.imgstyle{
  display:flex;
  margin:1rem 1rem;
  border-radius:50%;
  height:3rem;
  width:3rem;
}
.fontstyle{
  font-size:0.875rem;
}
.iconfont{
  font-size: 1.7rem !important;
  color: #31c27c;
  margin-top:0.8rem;
  margin-left:8rem;
}
.downstyle{
  display:flex;
  padding-bottom:1rem;
}
.left{
  display: flex;
  flex-direction: column;
  margin-left: 0px;
}
.icon-huodongzhongxin:before{
  margin-left:-128px;
}
</style>