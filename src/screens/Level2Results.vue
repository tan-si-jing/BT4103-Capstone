<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div class="container">
      <RoadCSElem></RoadCSElem>
    </div>
    <div class="container">
      <Grade></Grade>
    </div>
    <div class="container">
      <LongFrictFactor></LongFrictFactor>
    </div>
    <div class="container">
      <SideFrictFactor></SideFrictFactor>
    </div>
    <div class="container">
      <Crossfall></Crossfall>
    </div>
    <div class="container">
      <CornerRadius></CornerRadius>
    </div>
    <div class="container">
      <MergingAngle></MergingAngle>
    </div>
    <div class="container">
      <LaneWidth></LaneWidth>
    </div>
    <div class="lastContainer">
      <LateralClearance></LateralClearance>
    </div>

  <img :src="road" class="road" />
  <img :src="mascot" class="mascot" />
</div>
</template>

<script>
import RoadCSElem from "./RoadCross-SectionsElements.vue"
import Grade from "./Grade.vue"
import LongFrictFactor from "./LongitudinalFrictionFactor.vue"
import SideFrictFactor from "./SideFrictionFactor.vue"
import Crossfall from "./Crossfall.vue"
import CornerRadius from "./CornerRadius.vue"
import MergingAngle from "./MergingAngle.vue"
import LaneWidth from "./LaneWidth.vue"
import LateralClearance from "./LateralClearance.vue"

export default {
name: "Level2Results",
components: {
  "RoadCSElem": RoadCSElem,
  "Grade": Grade,
  "LongFrictFactor": LongFrictFactor,
  "SideFrictFactor": SideFrictFactor,
  "Crossfall": Crossfall,
  "CornerRadius": CornerRadius,
  "MergingAngle": MergingAngle,
  "LaneWidth": LaneWidth,
  "LateralClearance": LateralClearance,
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
.lastContainer {
  margin-bottom: 10%;
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
  bottom: 0.5%;
  transform: rotateY(180deg);
  z-index: 2;
}
</style>