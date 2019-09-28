<template>
    <div>
        <ul class="list">
            <li v-for="(icon,i) of catalogues" :key="i">
                <span :class="`iconfont ${icon.iconName}`"></span>
                <span class="icontext">{{icon.text}}</span> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            catalogues:[{
                iconName:"icon-home",
                text:"歌手"
                },
                {
                iconName:"icon-home",
                text:"排行"
                },
                {
                iconName:"icon-home",
                text:"分类歌单"
                },{
                iconName:"icon-home",
                text:"电台"
                },{
                iconName:"icon-home",
                text:"一起听"
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
    .list>li{
        display:flex;
        flex-direction:column;
    }
    .icontext{
        font-size: 0.9rem;
        margin:0.5rem 0;
    }
</style>

