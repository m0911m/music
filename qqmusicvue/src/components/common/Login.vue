<template>
  <div class="bgColor">
    <!-- 上方 -->
    <!-- 登录,面板 -->
    <div class="upstyle">
      <!-- 左侧的头像 ,昵称-->
        <img :src="require('../../assets/uboy.png')" class="imgstyle" alt="">
        <a href="" class="fontstyle">余生请你指教</a>
      <!-- 右边的消息中心 图片 -->
    </div>

    <!-- 下方 -->
    <!-- 左侧 活动中心 -->
    <!-- 右侧 会员中心 -->
  </div>
</template>
<script>
export default{

}
</script>
<style scoped>
.bgColor{
  display: flex;
  background: lightgreen;
  align-items: center;
}
.upstyle{
  display:flex;
  align-items: center;
}
.imgstyle{
  display:flex;
  margin:0 1rem;
  border-radius:50%;
  height:3rem;
  width:3rem;
}
.fontstyle{
  font-size:0.875rem;
}
</style>