<template>
  <div class="wrapper">
    <div class="login-card">
      <p class="header">Admin Login</p>

      <form @submit.prevent="login()">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  width: 30vw;
  height: 60vh;
  margin-top: 10vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
  z-index: 999;
}

.header {
  font-size: 4vh;
  align-self: center;
  margin-bottom: 10%;
}

/** input username and password */
.parameter {
  margin-left: 10%;
  font-size: 2.5vh;
  margin-bottom: 10px;
}

.inputField {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 6%;
}

input {
  width: 75%;
  padding: 0 20px;
  align-items: center;
  border: none;
  border-radius: 10px;
  height: 5vh;
  background-color: white;
  box-shadow: inset 1px 1px 6px #b8b8b8, inset -1px -1px 6px #ffff;
}
input:focus {
  border-bottom: solid 1px black;
  outline: 0;
}

/** login button */
.buttonField {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
}

button {
  font-size: 2.5vh;
  color: #fafafa;
  background-color: #21677d;
  align-items: center;
  width: 30%;
  height: 5vh;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
