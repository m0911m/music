<template>
  <div class="container">
    <!-- 1.上面的小图片和用户名，关注 -->
    <!-- 1.1左上角的图标和用户名 -->
    <div class="top">
      <img :src="upic" alt="">
      <span>{{uname}}</span>
      <!-- 1.2右上角的+关注 -->
      <input type="text" placeholder="+关注" v-model="active">
    </div>
    <!-- 2.中间的大图 -->
    <div>
      <img :src="bigimg" alt="">
    </div>
    <!-- 3、下面的备注 -->
    <div>
      <span>###行走的CD机</span>

    </div>
  </div>
</template>
<script>
export default {
  upic:{default:""},
  uname:{default:""},
  bigimg:{default:""}
}
</script>
<style scoped>
.container{
  display:flex;
}
.top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.top>input{
  display:flex;
  width:3.25rem;
  justify-content:space-between;
  border-radius:1rem;
  border:1px solid #ddd;
  opacity: 0.75;
  padding:2px;
  font-size:0.8rem;
  text-align:center;
}
</style>

