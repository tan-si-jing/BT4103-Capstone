<template>
  <div class="wrapper">
    <div class="login-card">
      <p class="header">Admin Login</p>

      <form @submit.prevent="login()" style="padding:0 12.5%">
        <p class="parameter">Username:</p>
        <div class="inputField">
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
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
        <button type="submit">Login</button>
        </div>

      </form>
    </div>

    <img :src="road" class="road" />
    <img :src="mascot" class="mascot" />
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      authuser: "user1",
      authpassword: "12345",
      road: require("../assets/road.png"),
      mascot: require("../assets/mascot.png"),
    };
  },
  methods: {
    login() {
      if (this.username != this.authuser) {
        alert("Incorrect username. Please check your username and try again.");
      } else if (this.password != this.authpassword) {
        alert("Incorrect password. Please check your password and try again.");
      } else {
        console.log("Login successful");
        //this.$router.replace({ name: "Analytics" });
      }
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
button {
  font-size: 1rem;
  color: #fafafa;
  background-color: #21677d;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.75rem 2rem;
}
button:active {
  opacity: 0.6;
  transform: translateY(3px);
}
/** road image */
.road {
  max-width: 100%;
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