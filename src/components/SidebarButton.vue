<template>
  <button type="button" class="btn btn-light" :abled=!isActive v-bind:style="[isActive ? active : inactive]">
    {{name}}
  </button>
</template>

<script>
export default {
  name: 'SidebarButton2',
  props: {
    isActive: Boolean,
    name: String,
  },
  data() {
    return {
      active: {
        backgroundColor: 'none',
        color:'black',
        cursor: 'default'
      },
      inactive: {
        backgroundColor: 'none',
        color:'black'
      },
    };
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
  font-size:1.15rem;
  text-align:left;
  background:none;
  border:none;
  box-shadow: none;
  padding: 2% 5%;
}
</style>