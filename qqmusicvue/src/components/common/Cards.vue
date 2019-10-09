<template>
  <div class="cards">
    <div class="card" :style="`background-color:${card.cardcolor}`"
      v-for="(card,i) of cards" :key="i">
      <router-link to>
        <img :src="require(`../../assets/${card.pic}`)" class="imgstyle" />
        <div class="cardtext">
          <span class="title">{{card.title}}</span>
          <span class="subtitle">{{card.subtitle}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          pic: "CsYa.jpg",
          title: "新歌新碟",
          subtitle: "麻辣鸡退休?NO!",
          cardcolor: "#3bc79a"
        },
        {
          pic: "AfYu.jpg",
          title: "数字专辑",
          subtitle: "限定记忆序章",
          cardcolor: "#fbc53f"
        }
      ]
    };
  }
};
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0.5rem;
}
.card a{
  display: flex;
  width: 10.7rem;
  height: 4.7rem;
}
.card{
    border-radius: 0.3rem;
}
.cardtext {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff; 
}
.imgstyle {
  width: 3rem;
  height: 3rem;
  margin: 0.7rem 0 0 0.7rem;
}
.title {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.9rem 0 0.5rem 0.4rem;
}
.subtitle {
  font-size: 0.8rem;
  margin-left: 0.4rem;
}
</style>