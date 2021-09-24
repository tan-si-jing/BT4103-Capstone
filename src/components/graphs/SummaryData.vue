<template>
  <div class="summary">
    <p class="figure"> {{ this.numVisits }} </p>
    <p class="description"> VISITS TODAY </p>
  </div>
</template>

<script>
export default {
  name: "SummaryData",
  data() {
    return {
      numVisits: 0
    }
  }
}
</script>

<style scoped>
* {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.summary {
  font-weight: bold;
  color: black;
  text-align: center;
}
.figure {
  font-size: 8vw;
}
.description {
  font-size: 1.5vw;
  letter-spacing: 0.2rem;
  color: #4f4f4f;
}
</style>