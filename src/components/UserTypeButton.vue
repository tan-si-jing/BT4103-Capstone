<template>
  <div>
    <!-- button in homepage to indicate user type-->
    <router-link :to=link>
    <button type="button" class="btn btn-outline-dark" style="button">
      <i :class="['bi-' + icon]" style="font-size: 4rem"></i>
    </button>
    </router-link>
    <h6>{{ label }}</h6>
  </div>
</template>

<script>
export default {
  name: 'UserTypeButton',
  props: {
    label: String,
    icon: String,
    link: String
  }
}
</script>

<style scoped>
button {
  height: 9rem;
  width: 9rem;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  border-color: transparent;
}
button:hover {
  background-color: #40AAAD;
  color: white;
  border-color: transparent;
}
h6 {
  padding-top: 0.5rem;
  text-align:center
}
</style>
