<template>
  <div class="sidebar">
    <div style="font-size:1.5rem;padding:5%;"><b>Chapters:</b></div>
    <SidebarButton name="Road Cross-Sections and Elements" @click="moveToSection('roadcselements', 2)"/>
      <SidebarButton name="Grade" @click="moveToSection('grade', 2)"/>
      <SidebarButton name="Longitudinal Friction Factor" @click="moveToSection('longfrictionfactor', 2)"/>
      <SidebarButton name="Side Friction Factor" @click="moveToSection('sidefrictionfactor', 2)"/>
      <SidebarButton name="Crossfall" @click="moveToSection('crossfall', 2)"/>
      <SidebarButton name="Corner Radius" @click="moveToSection('cornerradius', 2)"/>
      <SidebarButton name="Merging Angle" @click="moveToSection('mergingangle', 2)"/>
      <SidebarButton name="Lane Width" @click="moveToSection('lanewidth', 2)"/>
      <SidebarButton name="Signs" @click="moveToSection('signs', 2)"/>
      <SidebarButton name="Lateral Clearance" @click="moveToSection('lateralclearance', 3)"/>
      <SidebarButton name="Super-elevation" @click="moveToSection('superelevation', 3)"/>
      <SidebarButton name="Sight Distance" @click="moveToSection('sightdistance', 3)"/>
      <SidebarButton name="Curve Length" @click="moveToSection('curvelength', 3)"/>
      <SidebarButton name="Horizontal Alignment" @click="moveToSection('horizontalalignment', 4)"/>
      <SidebarButton name="Vertical Alignment" @click="moveToSection('verticalalignment', 4)"/>
      <SidebarButton name="Slip-road / Traffic Island" @click="moveToSection('sliproad', 4)"/>
      <SidebarButton name="Combination of Horizontal & Vertical Alignment" @click="moveToSection('combinedalignment', 5)"/>
  </div>

  <div class="result">
    <div class="contents">
    <h2 style="padding-top:2rem; width:65vw">Results</h2>
    <div id="roadcselements">
      <RoadCSElem></RoadCSElem>
    </div>
    <div id="grade">
      <Grade></Grade>
    </div>
    <div id="longfrictionfactor">
      <LongFrictFactor></LongFrictFactor>
    </div>
    <div id="sidefrictionfactor">
      <SideFrictFactor></SideFrictFactor>
    </div>
    <div id="crossfall">
      <Crossfall></Crossfall>
    </div>
    <div id="cornerradius">
      <CornerRadius></CornerRadius>
    </div>
    <div id="mergingangle">
      <MergingAngle></MergingAngle>
    </div>
    <div id="lanewidth">
      <LaneWidth></LaneWidth>
    </div>
    <div id="signs" style="margin-bottom: 5%;">
      <Signs></Signs>
    </div>
    </div>
    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="false" @click="contentpage"/>
        <PageCircle2 num="1" v-bind:isActive="true"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="false" @click="level5"/>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="back">
    <i class="bi bi-arrow-left"></i><span>Back to Search</span>
    </button>
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
import Signs from "./Signs.vue"
import PageCircle2 from '../components/PageCircle2.vue'
import SidebarButton from '../components/SidebarButton.vue'

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
  "Signs" : Signs,
  "PageCircle2": PageCircle2,
  "SidebarButton": SidebarButton,
},
methods: {
  contentpage() {
    this.$router.push({path: "/contentpage"})
  },
  level3() {
    this.$router.push({path: "/level3results"})
  },
  level4() {
    this.$router.push({path: "/level4results"})
  },
  level5() {
    this.$router.push({path: "/level5results"})
  },
  openStorage(){
        return JSON.parse(localStorage.getItem('choice'))
  },
  back() {
    this.$router.push({path: "/contentpage"})
  },
  scroll(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
      });
  },
  moveToSection(id, page) {
    if (page == 2) {
      this.scroll(id)
    }
    else if (page == 3) {
      this.level3()
      this.scroll(id)
    }
    else if (page == 4) {
      this.level4()
      this.scroll(id)
    }
    else {
      this.level5()
      this.scroll(id)
    }
  }
},
created(){
      const storedChoice = this.openStorage()
      if (storedChoice){
        this.choice = {
          ...this.choice,
          ...storedChoice
        }
      }
 },
data() {
  return {
    road: require("../assets/road.png"),
    mascot: require("../assets/mascot.png"),
    navOpen: false
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
.pages {
  display: flex;
  justify-content: center;
}
#back {
  font-size: 1rem;
  box-shadow:none;
  border:none;
  margin: 1% 5% 2.5%;
  padding:0.4% 0.8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:15%
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
  max-width: 13%;
  position: absolute;
  right: 4%;
  transform: rotateY(180deg);
  z-index: 2;
  bottom:1%
}
.result {
  float: right;
  width: 75%;
  background: #e0e0e0;
  position: relative;
}
.sidebar {
  width:25%;
  padding:1% 2.5% 2.5%;
  float:left;
  background: #e0e0e0;
  position:fixed;
  height:100vh;
  overflow-y:scroll;
}
.contents {
  margin-left:5vw;
}
/* Works on Firefox */
* {
  scrollbar-color: black grey;
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: lightgrey;
}
*::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 20px;
}
</style>