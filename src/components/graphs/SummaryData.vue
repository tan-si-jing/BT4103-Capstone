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
.summary {
  font-weight: bold;
  color: black;
}
.figure {
  font-size: 8vw;
}
.description {
  font-size: 125%;
  letter-spacing: 0.2rem;
  color: #4f4f4f;
}
</style>