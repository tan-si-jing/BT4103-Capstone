<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div class="container">
      <SuperElevationTable></SuperElevationTable>   
    </div>
  </div>
  <div>
    <img :src="mascot" class="mascot" />
    <img :src="road" class="road" />
  </div>
</template>

<script>
import SuperElevation from "./SuperElevation.vue"

export default {
name: "Results",
components: {
  "SuperElevationTable": SuperElevation
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
  right: 10%;
  bottom: 10%;
  transform: rotateY(180deg);
  z-index: 2;
}
</style>