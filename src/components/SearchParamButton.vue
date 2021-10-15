<template>
  <div>
    <button type="button" class="btn btn-outline-dark" style="button">
      {{text}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchParamButton',
  props: {
    text: String
  }
}
</script>

<style scoped>
button {
  height: 3.5rem;
  width: 20vw;
  border-radius: 1rem;
  background-color: #40AAAD;
  color: white;
  box-shadow: 1.5px 1.5px 3px rgba(0, 0, 0, 0.2);
  border: none;
}
button:hover {
  background-color: white;
  color: black;
  border: none;
}
h6 {
  padding-top: 0.5rem;
  text-align:center
}
</style>
//router-link to="/search"/router-link