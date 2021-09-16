<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div class="container">
      <ResultsTable></ResultsTable>    
    </div>


  <img :src="road" class="road" />
  <img :src="mascot" class="mascot" />
</div>
</template>

<script>
import ResultsTable from "./ResultsTable.vue"
export default {
name: "Results",
components: {
  "ResultsTable": ResultsTable
},
props: {},
data() {
  return {
    road: require("../assets/road.png"),
    mascot: require("../assets/mascot.png"),
  };
},
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
.wrapper {
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.header {
  font-size: 5vh;
  margin: 2% 60% 0% 0%;
  text-align:center
}
.container {
  padding: 3% 11% 10%;
}



/** road image */
.road {
  max-width: 100%;
  position: relative;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  right: 4%;
  bottom: 10%;
  transform: rotateY(180deg);
  z-index: 2;
}
</style>