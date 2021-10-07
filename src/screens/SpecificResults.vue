<template>
  <div class="wrapper">
    <p class="header">Specific Results Page</p>
    <br>
    <br>
    <div class="container">
      <DynamicTable></DynamicTable>   
    </div>
  </div>
  <div class="imageStack">
    <div id="bottomImg">
    <img :src="road" class="road" />
    </div>
    <div id="topImg">
    <img :src="mascot" class="mascot" />
    </div>
  </div>
</template>

<script>
import DynamicTable from "./Dynamic-SpecificSearch.vue"

export default {
name: "Results",
components: {
  "DynamicTable": DynamicTable
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
  min-height:80vh;
}
.container {
  width: 80vw;
}

.header {
  font-size: 5vh;
  margin: 2% 60% 0% 0%;
  text-align:center
}

/** road image */
.road {
  max-width: 100%;
  width:100%;
  position: relative;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  right: 4%;
  bottom: 30%;
  transform: rotateY(180deg);
  z-index: 2;
}

.imageStack{
  display: grid;
  position: relative;
 
}

</style>