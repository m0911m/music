<template>
  <div class="searchbar">
    <h3>{{msg}}</h3>
    <input class="search" type="text" placeholder="搜索" />
    <img :src="imgurl" class="rightimg" />
  </div>
</template>
<script>
export default {
  props:{
    msg:{default:""},
    imgurl:{default:""}
    }  
  }
</script>

<style>
.searchbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  align-items: center;
}
.rightimg {
  height: 25px;
  margin-right: 1rem;
}
h3 {
  margin: 0;
  margin-left: 0.7rem;
}
.search {
  border: none;
  outline: none;
  border-radius: 1.25rem;
  width: 13rem;
  height: 1.7rem;
  text-align: center;
  background: white url(/img/search.610139cf.png) no-repeat 36% center/auto 56%;
}
</style>