<template>
  <div>
    <dynamicbar :dynamicIcon="require('../assets/focus.png')"></dynamicbar>
    <swipe></swipe>
    <dynamiccard uname="比三呆" :upic="require('../assets/uboy.png')"
      :bigimg="require('../assets/1747238.jpg')"
    ></dynamiccard>
  </div>
</template>
<script>
import DynamicBar from '../components/common/DynamicBar.vue'
import Swipe from '../components/common/Swipe.vue'
import DynamicCard from '../components/common/DynamicCard.vue'
export default {
  components:{
    "dynamicbar":DynamicBar,
    "swipe":Swipe,
    "dynamiccard":DynamicCard
  }
}
</script>
