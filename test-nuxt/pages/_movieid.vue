<template>
  <div>
    <div class="backgrowimg">
      <img :src="'http://localhost:1336' + imgbackgrod" />
    </div>

    <h1 class="fontcocle">{{ titel }}</h1>
    <div v-html="content"></div>
    <div class="fontcocle">{{ description }}</div>
    <img :src="'http://localhost:1336' + imgmovie" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      titel: "",
      content: "",
      description: "",
      imgmovie: "",
      imgbackgrod: "",
    };
  },
  mounted() {
    let movieis = this.$route.params.movieid;
    console.log(this.$route);
    this.$axios.get("http://localhost:1336/movies/" + movieis).then((res) => {
      this.titel = res.data.title;
      console.log(this.titel);
      this.content = res.data.content;
      this.description = res.data.description;
      this.imgmovie = res.data.image.formats.medium.url;
    });

    this.$axios.get("http://localhost:1336/moviedetel").then((res) => {
      this.imgbackgrod = res.data.Img.formats.medium.url;
    });
  },
};
</script>

<style scoped >
.backgrowimg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: blur(5px);
}
.backgrowimg > img {
  width: 100%;
}
.fontcocle {
  color: white;
}
</style>