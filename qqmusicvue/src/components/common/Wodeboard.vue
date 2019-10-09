<template>
    <div>
        <ul class="list">
            <li v-for="(icon,i) of catalogues" :key="i">
                <router-link to="">
                    <span :class="`iconfont ${icon.iconName}`"></span>
                    <span class="icontext">{{icon.text}}</span> 
                </router-link>
            </li>
        </ul>
        <div class="card">
            <h3>智能分类</h3>
            <div class="zhineng">
                <router-link class="shite" to="" v-for="(item,i) of siet" :key="i">{{siet[i]}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            siet:["情歌","许嵩","世纪之初","治愈"],
          catalogues:[{
              iconName:"icon-recommend",
              text:"喜欢"
              },
              {
              iconName:"icon-gequmanyou",
              text:"最近"
              },
              {
              iconName:"icon-gequbaocun",
              text:"本地"
              },{
              iconName:"icon-QQMusic",
              text:"已购"
              },
            ]
        }
    }
}
</script>
<style>
.list{
    display:flex;
    justify-content:space-around;
}
.iconfont{
    font-size: 1.7rem !important;
    color: #31c27c;
    margin-top:0.8rem;
}
.list>li>a{
    display:flex;
    flex-direction:column;
}
.icontext{
    font-size: 0.9rem;
    margin:0.5rem 0;
}
.card{
    display:flex;
    text-align:left;
    flex-direction: column;
}
.card>h3{
    margin-left:1rem;
}
.zhineng{
    display:flex;
}
.shite{
    margin-left:2rem;
}
</style>

