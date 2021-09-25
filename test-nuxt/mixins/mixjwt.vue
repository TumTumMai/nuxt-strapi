

// <script>
// export default {
//   data() {
//     return {
//       timeoutid: "",
//     };
//   },

//   methods: {
//     async refreshToken() {
//       //   let url = "http://localhost:1336/auth/refreshToken";
//       let Token = localStorage.getItem("dataall");
//       if (!Token) {
//         return;
//       }
//       let url = "http://localhost:1336/auth/refreshToken";

//       Token = JSON.parse(Token);
//       let body = {
//         token: Token.refresh,
//         renew: true,
//       };

//       const res = await this.$axios.post(url, body, {
//         headers: {
//           Authorization: "Bearer " + Token.jwt,
//         },
//       });
//       let callbackjwt = res.data.jwt;
//       let callbackrefresh = res.data.refresh;
//       Token.jwt = callbackjwt;
//       Token.refresh = callbackrefresh;
//       localStorage.setItem("dataall", JSON.stringify(Token));
//       this.timeoutToken(callbackjwt);
//     },
//     timeoutToken(jwt) {
//       const paylod = this.parseJwt(jwt);
//       const exp = new Date(paylod.exp * 1000); //เปลี่ยนจาก วิ ให้เป็น มิลลิ
//       let timeRemaining = exp.getTime() - new Date().getTime() - 10000;
//       clearTimeout(this.timeoutid);
//       this.timeoutid = setTimeout(() => {
//         console.log("asfdasfasfadfadsads");

//         this.refreshToken();
//       }, 5000);
//     },
//     parseJwt(jwt) {
//       const base64Url = jwt.split(".")[1];
//       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map(function (c) {
//             return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//           })
//           .join("")
//       );

//       return JSON.parse(jsonPayload);
//     },
//   },
// };
//
</script>

