<template>
  <div class="sidebar">
    <div style="font-size:1.5rem;padding:5%;"><b>Step-by-Step Guide:</b></div>
      <SidebarButton name="1.&nbsp;&nbsp; Road Cross-Sections and Elements" @click="moveToSection('roadcselements', 2)"/>
      <SidebarButton name="2.&nbsp;&nbsp; Grade" @click="moveToSection('grade', 2)"/>
      <SidebarButton name="3.&nbsp;&nbsp; Longitudinal Friction Factor" @click="moveToSection('longfrictionfactor', 2)"/>
      <SidebarButton name="4.&nbsp;&nbsp; Side Friction Factor" @click="moveToSection('sidefrictionfactor', 2)"/>
      <SidebarButton name="5.&nbsp;&nbsp; Crossfall" @click="moveToSection('crossfall', 2)"/>
      <SidebarButton name="6.&nbsp;&nbsp; Corner Radius" @click="moveToSection('cornerradius', 2)"/>
      <SidebarButton name="7.&nbsp;&nbsp; Merging Angle" @click="moveToSection('mergingangle', 2)"/>
      <SidebarButton name="8.&nbsp;&nbsp; Lane Width" @click="moveToSection('lanewidth', 2)"/>
      <SidebarButton name="9.&nbsp;&nbsp; Signs" @click="moveToSection('signs', 2)"/>
      <SidebarButton name="10. Lateral Clearance" @click="moveToSection('lateralclearance', 3)"/>
      <SidebarButton name="11. Super-elevation" @click="moveToSection('superelevation', 3)"/>
      <SidebarButton name="12. Sight Distance" @click="moveToSection('sightdistance', 3)"/>
      <SidebarButton name="13. Curve Length" @click="moveToSection('curvelength', 3)"/>
      <SidebarButton name="14. Horizontal Alignment" @click="moveToSection('horizontalalignment', 4)"/>
      <SidebarButton name="15. Vertical Alignment" @click="moveToSection('verticalalignment', 4)"/>
      <SidebarButton name="16. Slip-road / Traffic Island" @click="moveToSection('sliproad', 4)"/>
      <SidebarButton name="17. Combination of Horizontal & Vertical Alignment" @click="moveToSection('combinedalignment', 5)"/>
  </div>

  <div class="result">
    <div class="contents">
    <h2 style="padding-top:2rem; width:65vw">Results</h2>
    <div id="lateralclearance">
      <LateralClearance></LateralClearance>
    </div>
    <div id="superelevation">
      <SuperElevation></SuperElevation>
    </div>
    <div id="sightdistance">
      <SightDistance></SightDistance>
    </div>
    <div id="curvelength" style="margin-bottom: 5%;">
      <CurveLength></CurveLength>
    </div>
    </div>
    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="false" @click="contentpage"/>
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="true"/>
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
import LateralClearance from "./LateralClearance.vue"
import SuperElevation from "./SuperElevation.vue"
import SightDistance from "./SightDistance.vue"
import CurveLength from "./CurveLength.vue"
import PageCircle2 from '../components/PageCircle2.vue'
import SidebarButton from '../components/SidebarButton.vue'

export default {
name: "Level3Results",
props: {
  id : String
},
components: {
  "LateralClearance" : LateralClearance,
  "SuperElevation" : SuperElevation,
  "SightDistance" : SightDistance,
  "CurveLength" : CurveLength,
  "PageCircle2": PageCircle2,
  "SidebarButton": SidebarButton
},

methods: {
  contentpage() {
    this.$router.push({path: "/contentpage"})
  },
  level2() {
    this.$router.push({path: "/level2results"})
  },
  level4() {
    this.$router.push({path: "/level4results"})
  },
  level5() {
    this.$router.push({path: "/level5results"})
  },
  back() {
    this.$router.push({path: "/search5"})
  },
  openStorage(){
        return JSON.parse(localStorage.getItem('choice'))
  },
  scroll(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
      });
  },
  moveToSection(cur_id, page) {
    if (page == 3) {
      this.scroll(cur_id)
    }
    else if (page == 2) {
      this.$router.push({name: "level2results", params: {id: cur_id}})
    }
    else if (page == 4) {
      this.$router.push({name: "level4results", params: {id: cur_id}})
    }
    else {
      this.$router.push({name: "level5results", params: {id: cur_id}})
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
mounted() {
  if (this.$props.id != null) {
    this.scroll(this.$props.id);
  }
},
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