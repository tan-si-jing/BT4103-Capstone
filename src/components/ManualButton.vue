<template>
  <button type="button" class="btn btn-outline-secondary" @click="goToLink()">
    <font-awesome-icon icon="external-link-alt" id="external-link" style="margin-right:5px;"/>
    <span>
      {{name}}
    </span>
  </button>
</template>

<script>
export default {
  name: 'ManualButton',
  props: {
      link: String,
      name: String
  },
  methods:{
    goToLink(){
      //navigate to link
      window.open(this.link); 
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
  padding: 3%;
  text-align:left;
  display: flex;
  align-items: left;
}
</style>