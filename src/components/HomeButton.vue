<template>
  <button type="button" class="btn btn-outline-secondary" @click="goToHome()">
    <font-awesome-icon icon="home" id="home" style="margin-right:1rem;"/>Home
  </button>
</template>

<script>
export default {
  name: 'HomeButton',
  methods:{
    // redirects to home page
    goToHome(){
      //navigate to homepage
      this.$router.push('/'); 
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  height:fit-content;
  display: inline;
  font-style: normal;
  font-weight: normal;
  color: darkslategrey;
  font-size:1rem;
  border: none;
  box-shadow: none;
  padding: 5%;
  text-align:left;
}
</style>