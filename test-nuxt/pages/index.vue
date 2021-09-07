<template>
  <div>
    <div class="backgrowimg">
      <img :src="'http://localhost:1336' + imageHome" />
    </div>
    <H1>{{ titie }}</H1>
    <!-- ////ถ้าเป็นตัวแปลsrcต้องมี:หน้าsrc -->

    <div
      class="bok"
      v-for="(movie, index) in movies"
      :key="index"
      @click="cickmovie(movie.id)"
    >
      <img :src="'http://localhost:1336' + movie.image.formats.medium.url" />
      <h4>{{ movie.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titie: "",
      imageHome: "",
      movies: [],
    };
  },
  mounted() {
    this.$axios.get("http://localhost:1336/homepage").then((res) => {
      this.titie = res.data.Fixhome.Hometitle;
      this.imageHome = res.data.Fixhome.Homeimage.formats.large.url;
    });
    this.$axios.get("http://localhost:1336/movies").then((res) => {
      this.movies = res.data;
    });
  },

  methods: {
    cickmovie(id) {
      this.$router.push("/" + id);
    },
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

.bok {
  /* border: 1px solid black; */
  margin-bottom: 20px;
  cursor: pointer;
}
</style>