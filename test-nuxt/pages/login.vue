<template>
  <div class="bgpage">
    <div class="headder">
      <img
        class="imgclass"
        src="http://localhost:1336/uploads/medium_maxresdefault_08f373d18d.jpeg"
      />
      <div class="container runlogin">
        <div class="test1 row">
          <div class="col">
            <div class="bgcard">
              <div class="group">
                <div class="form-group row">
                  <div class="col-sm-12">
                    <input
                      type="text"
                      class="input-style-nonborder mt-3"
                      placeholder="Username"
                      v-model="form.identifier"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <input
                      type="password"
                      class="input-style-nonborder mt-5"
                      placeholder="Password"
                      v-model="form.password"
                    />
                    <div class="d-flex justify-content-between mt-4">
                      <div></div>
                    </div>
                    <br />
                    <br />
                    <button @click="login()" class="button">เข้าสู่ระบบ</button>
                  </div>
                  <div class="d-flex justify-content-center w-100">
                    <p class="font-weight-lightbold">ยังไม่มีบัญชี?</p>
                    <div class="pointer">
                      <p @click="register()" class="font-weight-bold">
                        ลงทะเบียน
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixinsjwt from "@/mixins/mixjwt.vue";
export default {
  middleware: "authenticatedLogin",
  mixins: [mixinsjwt],
  data() {
    return {
      form: {
        identifier: "",
        password: "",
      },
    };
  },

  mounted() {},
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      let url = "http://localhost:1336/auth/local";
      let body = {
        identifier: this.form.identifier,
        password: this.form.password,
      };

      this.$axios
        .post(url, body)
        .then((res) => {
          localStorage.setItem("dataall", JSON.stringify(res.data));
          // this.timeoutToken(res.data.jwt);
          alert("Login Sucsess");
          this.$router.push("/");
        })
        .catch((error) => alert("Login Failure"));
    },
    ////////////////////////

    // //////////////////
  },
};
</script>
<style  scoped>
.bgpage {
  min-height: 100vh;
  align-items: center;
}
.test1 {
  align-items: center;
}
.pointer {
  cursor: pointer;
}
.bgcard {
  text-align: center;
  background: #fff;
  width: 115%;
  padding: 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}

.headder {
  height: 100vh;
  background-size: cover;
}

.group {
  margin-top: 50px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
}

.button {
  font-family: Prompt;
  width: 210px;
  height: 50px;
  left: 875px;
  top: 649px;
  color: #fff;
  background-color: #f49300;
  border-color: transparent;
  border-radius: 6px;
}

.container {
  padding: 3%;
  font-family: Prompt;
}
.font-weight-lightbold {
  color: #848484;
  color: white;
}

.imgclass {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.font-weight-bold {
  color: white;
}
</style>
