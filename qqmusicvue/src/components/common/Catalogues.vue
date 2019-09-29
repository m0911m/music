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
                iconName:"icon-flyme_icon-",
                text:"歌手"
                },
                {
                iconName:"icon-paihang",
                text:"排行"
                },
                {
                iconName:"icon-leimupinleifenleileibie",
                text:"分类歌单"
                },{
                iconName:"icon-diantai",
                text:"电台"
                },{
                iconName:"icon-ting",
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
    .list>li>a{
        display:flex;
        flex-direction:column;
    }
    .icontext{
        font-size: 0.9rem;
        margin:0.5rem 0;
    }
</style>

