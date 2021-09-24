<template>
  <div>
    <button type="button" class="btn btn-outline-dark" :disabled=!isActive v-bind:style="[isActive ? active : inactive]">
      {{num}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageCircle',
  props: {
    num: String,
    isActive: Boolean
  },
  data() {
    return {
      active: {
        backgroundColor: '#273B8C',
        color:'white'
      },
      inactive: {
        backgroundColor: 'white',
        color:'black'
      }
    };
  }
}
</script>

<style scoped>
.btn {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  border:none;
  padding:0;
  margin: 0 0.5rem
}
</style>
