<template>
  <div>
    <div class="title">
      <h4>26小时快讯</h4>
    </div> 
      <ul>
        <li v-for="(item,i) of list" :key="i">
          <img :src="require('../../assets/'+list[i].pic)" alt="">
          <p>{{list[i].text}}</p>
          <p>{{list[i].subtxt}}</p>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {
          pic:"love.jpg",
          text:"爱江山更爱美人",
          subtxt:"曼殊",
        },
        {
          pic:"you.jpg",
          text:"《新西游记》",
          subtxt:"历代级的装扮",
        },
        {
          pic:"north.jpg",
          text:"霉霉Lover流媒体创新高",
          subtxt:"超级Saly",
        }
      ]
    }
  }
}
</script>
<style scoped>
.title{
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin:-8px 0px;
}
  h4{
    margin-left:1rem;
    font-size:1.25rem;
  }
  ul{
    display:flex;
    overflow:scroll;
    box-sizing:border-box;
    padding-bottom:15px;
    border-bottom:1px solid #ccc;
  }
  li{
    width:9rem;height:9rem;
    margin-left:5px;
  }
  li img{
    display:flex;
    width:9rem;height:5rem;
    border-radius:0.4rem;
  }
</style>
