<template>
  <div class="container">
    <!-- 1.上面的小图片和用户名，关注 -->
    <!-- 1.1左上角的图标和用户名 -->
    <div class="top">
      <img :src="upic" alt="">
      <span>{{uname}}</span>
      <input type="text" :placeholder='focused?notyet:already' v-model="active">
    </div>
    <!-- 1.2右上角的+关注 -->
    <!-- 2.中间的大图 -->
    <!-- 3、下面的备注 -->
  </div>
</template>
<script>
export default {
  upic:{default:""},
  uname:{default:""},
  focused:false,
  notyet:{default:"+关注"},
  already:{default:"已关注"}
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
  
}
</style>

