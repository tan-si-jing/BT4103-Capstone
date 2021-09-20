<template>
  <button v-on:click.prevent="logout()">Logout</button>
</template>

<script>
import { auth } from "../firebase.js";

export default {
  name: 'LogoutButton',
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
button {
  font-size: 1rem;
  color: #ffffff;
  background-color: #758f9a;
  border: none;
  border-radius: 5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 7rem;
  height: 3rem;
}
button:active {
  opacity: 0.6;
  transform: translateY(3px);
}
</style>