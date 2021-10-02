<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div>

    <div class="sidebar">
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
      <SidebarButton name="Slip-road/ Traffic Island" @click="moveToSection('sliproad', 4)"/>
      <SidebarButton name="Combination of Horizontal & Vertical Alignment" @click="moveToSection('combinedalignment', 5)"/>
    </div>

    <div class="container" id="roadcselements">
      <RoadCSElem></RoadCSElem>
    </div>
    <div class="container" id="grade">
      <Grade></Grade>
    </div>
    <div class="container" id="longfrictionfactor">
      <LongFrictFactor></LongFrictFactor>
    </div>
    <div class="container" id="sidefrictionfactor">
      <SideFrictFactor></SideFrictFactor>
    </div>
    <div class="container" id="crossfall">
      <Crossfall></Crossfall>
    </div>
    <div class="container" id="cornerradius">
      <CornerRadius></CornerRadius>
    </div>
    <div class="container" id="mergingangle">
      <MergingAngle></MergingAngle>
    </div>
    <div class="container" id="lanewidth">
      <LaneWidth></LaneWidth>
    </div>
    <div class="lastContainer" id="signs">
      <Signs></Signs>
    </div>

    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="false" @click="contentpage"/>
        <PageCircle2 num="1" v-bind:isActive="true"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="false" @click="level5"/>
    </div>

  </div>

  <button id="back" type="button" class="btn btn-outline-secondary" @click="back"><i class="bi bi-arrow-left"></i></button>
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
  "SidebarButton": SidebarButton
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
      this.level3();
      this.scroll(id);
    }
    else if (page == 4) {
      this.level4();
      this.scroll(id);
    }
    else {
      this.level5();
      this.scroll(id);
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
  margin-bottom: 5%;
}

.pages {
    display: flex;
    /*margin-bottom: 5%;*/
    justify-content: center;
}


#back {
  font-size: 1.5rem;
  box-shadow:none;
  border:none;
  margin-bottom:2%;
  margin-right:80%;
  padding:0.4% 0.8%;
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
  bottom: 0.5%;
  transform: rotateY(180deg);
  z-index: 2;
}

.sidebar {
    position:sticky;
    top: 30px;
    height: 20vh;
    width: 20%;
    align-items: left;
}

</style>