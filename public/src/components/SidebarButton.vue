<template>
  <button type="button" class="btn btn-light">
    {{name}}
  </button>
</template>

<script>
//if element has data-isActive then set class as active
export default {
  name: 'SidebarButton',
  props: {
    name: String,
  },
}
</script>

<style scoped>
button {
  width: 100%;
  height:fit-content;
  display: inline;
  font-style: normal;
  font-weight: normal;
  color: black;
  font-size:1.15rem;
  text-align:left;
  background:none;
  border:none;
  box-shadow: none;
  padding: 2% 5%;
}
</style>