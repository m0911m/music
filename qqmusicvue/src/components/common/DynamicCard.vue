<template>
  <div class="container">
    <ul >
      <li v-for="(item,i) of iconlist" :key="i">
        <img :src="require('../../assets/'+item.iconpic)" alt="">
        <p>{{item.username}}</p>
        <!-- <img :src="require('../../assets/nan.jpg')" alt="">
        <img :src="require('../../assets/uboy.png')" alt=""> -->
      </li>
    </ul>
    <div v-for="(item,i) of list" :key="i" class="card">
      <!-- 1.上面的小图片和用户名，关注 -->
      <!-- 1.1左上角的图标和用户名 -->
      <div class="top">
        <div class="leftText">
          <img :src="require('../../assets/'+list[i].upic)" alt="">
          <div class="uname">{{list[i].uname}}</div>
        </div>
        <!-- 1.2右上角的+关注 -->
        <input type="text" placeholder="+关注" >
      </div> 
      <div class="text">{{list[i].utext}}</div>
      <!-- 2.中间的大图 -->
      <div class="middle">
        <img :src="require('../../assets/'+list[i].mpic)" alt="">
      </div>
      <!-- 3、下面的备注 -->
      <div class="bottom"> 
        <span class="bs">{{list[i].btext}}</span>
        <div class="icon">
          <img :src="require('../../assets/msg.png')" alt=""><span>12</span>
          <img :src="require('../../assets/zan.png')" alt=""><span>55</span>
          <img :src="require('../../assets/slh.png')" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      iconlist:[
        {
          iconpic:"01.jpg",
          username:"泥鳅Niko"
        },
        {
          iconpic:"02.jpg",
          username:"Marsh"
        },
        {
          iconpic:"03.jpg",
          username:"Ayasa"
        },
        {
          iconpic:"uboy.png",
          username:"西彬呀"
        },
        {
          iconpic:"u1.jpg",
          username:"付小远"
        },
        {
          iconpic:"ugirl.png",
          username:"泥鳅Niko"
        }
      ],
      list:[
        {
          upic:"ugirl.png",
          uname:"月月酱",
          utext:"╔into You╝ 想给你所有的美好",
          mpic:"north.jpg",
          btext:"#ACG"
        },
        {
          upic:"uboy.png",
          uname:"木易舟",
          utext:"焦迈奇《我的名字》很好听",
          mpic:"young.jpg",
          btext:"为你推荐"
        }
      ]
    }
  }
}
</script>
<style scoped>
.container{
  display:flex;
  flex-wrap:wrap;
}
ul{
  display: flex;
  overflow:scroll;
}
/* li{
  display: flex;
} */
ul :first-child{
  margin-left:5px;
}
ul img{
  display:flex;
  margin:5px 8px;
  width:3.5rem;
  border-radius:2.5rem;
  border:1px solid lightcoral;
}
.card{
  box-sizing: border-box;
  padding-bottom:15px;
  border-bottom:1px solid #ddd;
}
.top{
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin:5px 8px;
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
.text{
  display: flex;
  align-items:left;
  margin:0.4rem 0.7rem;
}
.middle{
  display:flex;
  margin:5px 12px;
}
.middle img{
  display: flex;
  width:22rem;
  height:12rem;
  border-radius:0.3rem;
  margin-bottom:8px;
}
.bottom{
  display:flex;
  margin-top:0.5rem;
  opacity:0.65;
  font-size:0.45rem;
}
.bottom .bs{
  margin-left:0.25rem;
  margin-right:9rem;
}
.icon span{
  margin-right:0.3rem;
  margin-left:0.15rem;
  margin-top:0.15rem;
}

.bottom img{
  width:1.55rem;
  margin-left:.75rem;
  align-items:center;
}
</style>

