<template>
  <div>
    <div class="backgrowimg">
      <img :src="'http://localhost:1336' + imageHome" />
    </div>
    <div class="container">
      <H1 class="fonhome">{{ titie }}</H1>
      <div class="buttoncontennet">
        <h4 v-if="!isloggedin" @click="cicklogin()" class="login">Login</h4>
        <h4 v-if="!isloggedin" @click="register()" class="login">Register</h4>
        <h4 v-if="isloggedin" @click="logout()" class="login">Logout</h4>
      </div>
      <div class="buttoncontennet">
        <h4 @click="cicktest()" class="login">test1</h4>
      </div>
      <div class="search-input">
        <input
          v-model="datasearch"
          type="text"
          id="search-box"
          placeholder="Search..."
        />
        <button id="btn-search" @click="search()">
          <i class="fa fa-search" aria-hidden="true">ค้นหา</i>
        </button>
      </div>
      <div class="cenmovie">
        <div
          class="bok"
          v-for="(movie, index) in movies"
          :key="index"
          @click="cickmovie(movie.id)"
        >
          <img
            :src="'http://localhost:1336' + movie.image.formats.medium.url"
          />
          <h4>{{ movie.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isloggedin: false,
      titie: "",
      imageHome: "",
      movies: [],
      datasearch: "",
    };
  },
  mounted() {
    this.$axios.get("http://localhost:1336/homepage").then((res) => {
      this.titie = res.data.Fixhome.Hometitle;
      this.imageHome = res.data.Fixhome.Homeimage.formats.large.url;
    });
    // console.log(this.data());
    this.search();
    this.islogin();
  },

  methods: {
    logout() {
      localStorage.removeItem("dataall");
      this.islogin();
      this.movies = [];
    },

    islogin() {
      let login = localStorage.getItem("dataall");
      if (login) {
        this.isloggedin = true;
      } else {
        this.isloggedin = false;
      }
    },

    cickmovie(id) {
      this.$router.push("/" + id);
    },
    search() {
      let url = "http://localhost:1336/movies";
      let qparams = {
        slug_contains: this.datasearch,
      };
      let userdata = localStorage.getItem("dataall");
      userdata = JSON.parse(userdata);
      if (!userdata) {
        return;
      }
      this.$axios
        .get(url, {
          params: qparams,
          headers: {
            Authorization: "Bearer " + userdata.jwt,
          },
        })
        .then((res) => {
          this.movies = res.data;
        });
    },
    cicklogin() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    cicktest() {
      let userdata = localStorage.getItem("dataall");
      userdata = JSON.parse(userdata);
      if (!userdata) {
        alert("กรุณาLogin");
        this.$router.push("/login");
        return;
      }
      this.$router.push("/test");
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
.bok > img {
  width: 300px;
}
.search-input {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
}
.fonhome {
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
}
.cenmovie {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.login {
  /* border: 1px solid black; */
  text-align: center;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 20px;
}
.buttoncontennet {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>