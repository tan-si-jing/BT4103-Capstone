<template>
  <div :data-bs-toggle="isActive?'':'tooltip'">
    <button type="button" class="btn btn-outline-dark" :disabled=!isActive v-bind:style="[isActive ? active : inactive]">
      {{text}}
    </button>
  </div>
</template>

<script>
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

export default {
  name: 'SearchParamButton',
  props: {
    text: String,
    isActive: Boolean
  },
  data() {
    return {
      active: {},
      inactive: {
        backgroundColor: 'grey',
        color:'white'
      }
    };
  },
  mounted() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipEl) {
      tooltipEl.setAttribute("data-bs-placement","top")
      tooltipEl.setAttribute("data-bs-html","true")
      tooltipEl.setAttribute("title","Work in Progress! <i class='bi bi-cone-striped'></i>")
      tooltipEl.setAttribute("tabindex","0")
      return new Tooltip(tooltipEl)
    })
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