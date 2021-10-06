<template>
  <div class="wrapper">
    <div class="login-card">
      <p class="header">Admin Login</p>

      <form @submit.prevent="login()" style="padding:0 12.5%">
        <p class="parameter">Email Address:</p>
        <div class="inputField">
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            required
          />
        </div>

        <p class="parameter">Password:</p>
        <div class="inputField">
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        
        <div class="buttonField">
        <button type="submit" class="loginButton">Login</button>
        </div>

      </form>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="$router.go(-1)">
    <i class="bi bi-arrow-left"></i><span style="margin-left:1rem">Back to Home</span>
    </button>
    <img :src="road" class="road" />
    <img :src="mascot" class="mascot" />
  </div>
</template>

<script>
import { auth } from "../firebase.js";

export default {
  name: "AdminLogin",
  props: {},
  data() {
    return {
      email: "",
      password: "",
      road: require("../assets/road.png"),
      mascot: require("../assets/mascot.png"),
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
            this.$router.replace({ path: "/dashboard" });
            console.log("Login");
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            alert(
              "The email you entered is invalid. Please check your email and try again."
            );
          } else if (error.code == "auth/user-not-found") {
            alert(
              "The email you entered does not appear to belong to an account. Please check your email and try again."
            );
          } else if (error.code == "auth/wrong-password") {
            alert(
              "Incorrect password. Please check your password and try again."
            );
          }
        });
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
#back {
  position:absolute;
  top:5%;
  left:5%;
  font-size: 1rem;
  box-shadow:none;
  border:none;
  padding:0.4% 0.8%;
  display: flex;
  align-items: center;
}
.wrapper {
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.login-card {
  background-color: #fafafa;
  width: 30vw;
  height: 60vh;
  margin-top: 10vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.header {
  font-size: 4vh;
  margin: 10% 0 5%;
  text-align:center
}
/** input username and password */
.parameter {
  font-size: 2.5vh;
}
.inputField {
  margin: 0.25rem 0 1rem;
}
input {
  width: 100%;
  height: 2.5rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: inset 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0.75rem
}
input:focus {
  outline: 0;
}
/** login button */
.buttonField {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
}
.loginButton {
  font-size: 1rem;
  color: #fafafa;
  background-color: #21677d;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px 5px;
  width: 30%;
  height: 50%;
}
button:active {
  opacity: 0.6;
  transform: translateY(3px);
}
/** road image */
.road {
  max-width: 100%;
  width:100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  left: 10%;
  bottom: 14%;
  z-index: 2;
}
</style>