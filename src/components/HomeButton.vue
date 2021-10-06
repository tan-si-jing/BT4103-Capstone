<template>
  <button type="button" class="btn btn-light" :abled=!isActive v-bind:style="[isActive ? active : inactive]"
    @click="goToHome()">
    <font-awesome-icon icon="home" id="home" />
    Home
  </button>
</template>

<script>
export default {
  name: 'HomeButton',
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      active: {
        backgroundColor: 'none',
        color:'#505050',
        cursor: 'default'
      },
      inactive: {
        backgroundColor: 'none',
        color:'#505050'
      },
    };
  },
   methods:{
    goToHome(){
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
  color: #FFFFFF;
  font-size:1rem;
  text-align:right;
  background:none;
  border:none;
  box-shadow: none;
  padding: 2% 5%;
  margin-top: 10px;
}
</style>