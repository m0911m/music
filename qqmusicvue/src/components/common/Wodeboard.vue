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
    </div>
</template>
<script>
export default {
    data(){
        return {
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
</style>

