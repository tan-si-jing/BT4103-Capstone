<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div>

    <div class="sidebar">
      <SidebarButton2 name="Road Cross-Sections and Elements" @click="moveToSection('roadcselements', 2)"/>
      <SidebarButton2 name="Grade" @click="moveToSection('grade', 2)"/>
      <SidebarButton2 name="Longitudinal Friction Factor" @click="moveToSection('longfrictionfactor', 2)"/>
      <SidebarButton2 name="Side Friction Factor" @click="moveToSection('sidefrictionfactor', 2)"/>
      <SidebarButton2 name="Crossfall" @click="moveToSection('crossfall', 2)"/>
      <SidebarButton2 name="Corner Radius" @click="moveToSection('cornerradius', 2)"/>
      <SidebarButton2 name="Merging Angle" @click="moveToSection('mergingangle', 2)"/>
      <SidebarButton2 name="Lane Width" @click="moveToSection('lanewidth', 2)"/>
      <SidebarButton2 name="Signs" @click="moveToSection('signs', 2)"/>
      <SidebarButton2 name="Lateral Clearance" @click="moveToSection('lateralclearance', 3)"/>
      <SidebarButton2 name="Super-elevation" @click="moveToSection('superelevation', 3)"/>
      <SidebarButton2 name="Sight Distance" @click="moveToSection('sightdistance', 3)"/>
      <SidebarButton2 name="Curve Length" @click="moveToSection('curvelength', 3)"/>
      <SidebarButton2 name="Horizontal Alignment" @click="moveToSection('horizontalalignment', 4)"/>
      <SidebarButton2 name="Vertical Alignment" @click="moveToSection('verticalalignment', 4)"/>
      <SidebarButton2 name="Slip-road/ Traffic Island" @click="moveToSection('sliproad', 4)"/>
      <SidebarButton2 name="Combination of Horizontal & Vertical Alignment" @click="moveToSection('combinedalignment', 5)"/>
    </div>

    <div class="result">
    <div class="lastContainer" id="combinedalignment">
      <Combine></Combine>
    </div>
    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="false" @click="contentpage"/>
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="true"/>
    </div>
    </div>

    </div>

    <button id="back" type="button" class="btn btn-outline-secondary" @click="back"><i class="bi bi-arrow-left"></i></button>
  <img :src="road" class="road" />
  <img :src="mascot" class="mascot" />
</div>
</template>

<script>
import Combine from "./Combine.vue"
import PageCircle2 from '../components/PageCircle2.vue'
import SidebarButton2 from '../components/SidebarButton2.vue'

export default {
name: "Level5Results",
components: {
  "Combine" : Combine,
  "PageCircle2": PageCircle2,
  "SidebarButton2": SidebarButton2
},
props: {},

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
  height:140vh;
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
    justify-content: center;
}

#back {
  font-size: 1.5rem;
  box-shadow:none;
  border:none;
  margin-bottom:2%;
  margin-right:45%;
  padding:0.4% 0.8%;
}

/** road image */
.road {
  max-width: 100%;
  width:100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  right: 4%;
  bottom:4.5%;
  transform: rotateY(180deg);
  z-index: 2;
}

.sidebar {
    padding-top: 50px;
    width: 20%;
    align-items: left;
    float: left;
    overflow: auto;
    position: fixed;
    
}


.result {
  flex-grow: 1;
  float: left;
  margin-left: 22vw;
}
</style>