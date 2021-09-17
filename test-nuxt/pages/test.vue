<template>
  <div>
    <div>
      <h1>test</h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "authenticated",
  //   created() {
  //     let userdata = localStorage.getItem("dataall");
  //     console.log(userdata);
  //     userdata = JSON.parse(userdata);
  //     if (!userdata) {
  //       alert("กรุณาLogin");
  //       this.$router.push("/login");
  //       return;
  //     }
  //   },
};
</script>

<style>
</style>