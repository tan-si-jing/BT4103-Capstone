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
    <div id="combinedalignment" style="margin-bottom: 5%;">
      <Combine></Combine>
    </div>
    </div>
    <div class="bottom">
    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="false" @click="contentpage"/>
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="true"/>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="back">
    <i class="bi bi-arrow-left"></i><span>Back to Search</span>
    </button>
    <img :src="road" class="road" />
    <img :src="mascot" class="mascot" />
    </div>
  </div>
</template>

<script>
import Combine from "./Combine.vue"
import PageCircle2 from '../components/PageCircle2.vue'
import SidebarButton from '../components/SidebarButton.vue'

export default {
name: "Level5Results",
props: ['id'],
components: {
  "Combine" : Combine,
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
  level3() {
    this.$router.push({path: "/level3results"})
  },
  level4() {
    this.$router.push({path: "/level4results"})
  },
  back() {
    this.$router.push({path: "/search5"})
  },
  scroll(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
      });
  },
  moveToSection(id, page) {
    if (page == 5) {
      this.scroll(id)
    }
    else if (page == 2) {
      this.level2()
      this.scroll(id)
    }
    else if (page == 3) {
      this.level3()
      this.scroll(id)
    }
    else {
      this.level4()
      this.scroll(id)
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
  max-width: 15%;
  position: absolute;
  right: 4%;
  transform: rotateY(180deg);
  z-index: 2;
  bottom:15%;
}
.result {
  float: right;
  width: 75%;
  background: #e0e0e0;
  min-height: 100vh;
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
.bottom {
  position:absolute;
  bottom:0
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