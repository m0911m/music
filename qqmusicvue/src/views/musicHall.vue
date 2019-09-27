<template>
    <div>
        <searchbar></searchbar>
        <swipe></swipe>
    </div>
</template>
<script>
import SearchBar from "../components/common/SearchBar"
import Swipe from "../components/common/Swipe"
export default {
    components:{
        "searchbar":SearchBar,
        "swipe":Swipe
    }
}
</script>
<style>
    body{
        background-color:#f3f3f3;
    }
</style>