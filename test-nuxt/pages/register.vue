<template>
  <div class="bgpage">
    <div class="headder">
      <img
        class="imgclass"
        src="http://localhost:1336/uploads/medium_maxresdefault_08f373d18d.jpeg"
      />
      <div class="container runlogin">
        <div class="test1 row">
          <div class="col col-5">
            <div class="bgcard">
              <div class="group">
                <div class="centerbokre">
                  <div class="bokregi">
                    <input
                      type="text"
                      placeholder="Usename"
                      v-model="form.username"
                    />
                    <input
                      type="text"
                      class="input-style-nonborder mt-3"
                      placeholder="Email"
                      v-model="form.email"
                    />
                    <input
                      type="password"
                      class="input-style-nonborder mt-3"
                      placeholder="Passworld"
                      v-model="form.password"
                    />
                  </div>
                </div>
                <br />
                <div class="form-group row">
                  <div class="d-flex justify-content-center w-100">
                    <div class="pointer">
                      <button @click="register()" class="button">
                        ลงทะเบียน
                      </button>
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
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },

  mounted() {},
  methods: {
    register() {
      let url = "http://localhost:1336/auth/local/register";
      let body = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        confirmed: false,
        blocked: false,
      };
      this.$axios
        .post(url, body)
        .then((res) => {
          alert("Register Sucsess");
          this.$router.push("/login");
        })
        .catch((error) => alert("Register Failure"));
    },
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
  justify-content: center;
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

.container {
  padding: 3%;
  font-family: Prompt;
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
.bokregi {
  display: flex;
  flex-direction: column;
}
.centerbokre {
  justify-content: center;
}
</style>
