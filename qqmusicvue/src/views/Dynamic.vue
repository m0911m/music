<template>
  <div>
    <dynamicbar :dynamicIcon="require('../assets/focus.png')"></dynamicbar>
    <swipe></swipe>
    <dynamiccard ></dynamiccard>
    <dynamicscroll></dynamicscroll>
  </div>
</template>
<script>
import DynamicBar from '../components/common/DynamicBar.vue'
import Swipe from '../components/common/Swipe.vue'
import DynamicCard from '../components/common/DynamicCard.vue'
import DynamicScroll from '../components/common/DynamicScroll.vue'
export default {
  components:{
    "dynamicbar":DynamicBar,
    "swipe":Swipe,
    "dynamiccard":DynamicCard,
    "dynamicscroll":DynamicScroll
  }
}
</script>
