<template>
    <div class="cards">
        <div class="card">
            <img src="" alt="">
            <div class="cardtext">
                <span>新歌新碟</span>
                <span>麻辣腿退休?NO!</span>
            </div>
        </div>
        <div class="card">
            <img src="" alt="">
            <div class="cardtext">
                <span>新歌新碟</span>
                <span>麻辣腿退休?NO!</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.cards{
    display:flex;
    justify-content:space-around;
    padding:1rem 0.5rem;
}
.card{
    display:flex;
    width:10.7rem;
    height:5rem;
    background-color:#31c27c;
    border-radius:5%;
}
.cardtext{
    display:inline-flex;
    flex-direction:column;
    align-items:flex-start;
}
</style>