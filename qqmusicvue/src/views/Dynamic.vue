<template>
  <div>
    <dynamicbar :dynamicIcon="require('../assets/focus.png')"></dynamicbar>
    <swipe></swipe>
  </div>
</template>
<script>
import DynamicBar from '../components/common/DynamicBar.vue'
import Swipe from '../components/common/Swipe.vue'
export default {
  components:{
    "dynamicbar":DynamicBar,
    "swipe":Swipe
  }
}
</script>
