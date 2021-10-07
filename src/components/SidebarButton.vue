<template>
  <button type="button" class="btn btn-light" v-bind:style="[isActive ? active : null ]">
    {{name}}
  </button>
</template>

<script>
//check state, and only buttons that == state will be active
export default {
  name: 'SidebarButton',
  props: {
    isActive: Boolean,
    name: String,
  },
  data() {
    return {
      active: {
        backgroundColor: 'none',
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
  color: black;
  font-size:1.15rem;
  text-align:left;
  background:none;
  border:none;
  box-shadow: none;
  padding: 2% 5%;
}
</style>