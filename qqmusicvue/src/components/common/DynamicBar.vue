<template>
  <div class="dynamictop">
    <h2>动态</h2>
    <input type="text" placeholder="精选 关注 ">
    <img :src="dynamicIcon" alt="">
  </div>
</template>
<script>
export default {
  props:{
    dynamicIcon:{default:""}
  }
}
</script>
<style scoped>
.dynamictop{
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items: center;
}
input{
  width: 9rem;
  height: 1.7rem;
  border-radius: 1.25rem;
  background-color:#ddd;
}
img{
  width:30px;
  margin-right:1.5rem
}
</style>

