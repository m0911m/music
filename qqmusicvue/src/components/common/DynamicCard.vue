<template>
  <div class="container">
    <!-- 1.上面的小图片和用户名，关注 -->
    <!-- 1.1左上角的图标和用户名 -->
    <div class="top">
      <div class="leftText">
        <img :src="upic" alt="">
        <div class="uname">{{uname}}</div>
      </div>
      <!-- 1.2右上角的+关注 -->
      <input type="text" placeholder="+关注" >
    </div> 
    <div class="text">{{utext}}</div>
    <!-- 2.中间的大图 -->
    <div class="middle">
      <img :src="mpic" alt="">
    </div>
    <!-- 3、下面的备注 -->
    <div class="bottom"> 
      <span>#ACG</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    upic:{default:""},
    uname:{default:""},
    utext:{default:""},
    mpic:{default:""}
  }
}
</script>
<style scoped>
.top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin-right:0.75rem;
}
input{
  display:flex;
  width:3.25rem;
  justify-content:space-between;
  border-radius:1rem;
  border:1px solid #ddd;
  opacity: 0.75;
  margin-left:12rem;
  font-size:0.8rem;
  text-align:center;
}
.leftText{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.leftText>img{
  width:2rem;
  border-radius: 1rem;
  margin: 0.5rem 0.25rem;
}
.uname{
  
  align-items:center;
}
.text{
  display: flex;
  align-items:left;
  margin:0.2rem 0.25rem;
}
.middle{
  display:flex;
  margin-top:0.75rem;
  margin-left:0.5rem;
}
.middle img{
  display: flex;
  width:22rem;
  border-radius:0.3rem;
}
</style>

