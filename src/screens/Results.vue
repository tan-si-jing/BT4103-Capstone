<template>
  <div class="sidebar">
    <HomeButton/>
    <div style="font-size:1.5rem;padding:5%;border-top: ridge;"><b>Step-by-Step Guide:</b></div>
    <router-link to="/results/page1#roadcselements">
      <SidebarButton 
        name="1.&nbsp Road Cross-Sections and Elements" @click="updateSec('roadcselements')"
        data-secName="roadcselements" class="active"
      />
    </router-link>
    <router-link to="/results/page1#grade">
      <SidebarButton 
        name="2.&nbsp; Grade" @click="updateSec('grade')"
        data-secName="grade"
      />
    </router-link>
    <router-link to="/results/page1#longfrictionfactor">
      <SidebarButton 
        name="3.&nbsp Longitudinal Friction Factor" @click="updateSec('longfrictionfactor')"
        data-secName="longfrictionfactor"
      />
    </router-link>
    <router-link to="/results/page1#sidefrictionfactor">
      <SidebarButton 
        name="4.&nbsp Side Friction Factor" @click="updateSec('sidefrictionfactor')"
        data-secName="sidefrictionfactor"
      />
    </router-link>
    <router-link to="/results/page1#crossfall">
      <SidebarButton 
        name="5.&nbsp; Crossfall" @click="updateSec('crossfall')"
        data-secName="crossfall"  
      />
    </router-link>
    <router-link to="/results/page1#cornerradius">
      <SidebarButton 
        name="6.&nbsp; Corner Radius" @click="updateSec('cornerradius')"
        data-secName="cornerradius"
      />
    </router-link>
    <router-link to="/results/page1#mergingangle">
      <SidebarButton 
        name="7.&nbsp; Merging Angle" @click="updateSec('mergingangle')"
        data-secName="mergingangle"
      />
    </router-link>
    <router-link to="/results/page1#lanewidth">
      <SidebarButton 
        name="8.&nbsp; Lane Width" @click="updateSec('lanewidth')"
        data-secName="lanewidth"
      />
    </router-link>
    <router-link to="/results/page1#signs">
      <SidebarButton 
        name="9.&nbsp; Signs" @click="updateSec('signs')"
        data-secName="signs"
      />
    </router-link>
    <router-link to="/results/page2#lateralclearance">
      <SidebarButton 
        name="10. Lateral Clearance" @click="updateSec('lateralclearance')"
        data-secName="lateralclearance"
      />
    </router-link>
    <router-link to="/results/page2#superelevation">
      <SidebarButton 
        name="11. Super-elevation" @click="updateSec('superelevation')"
        data-secName="superelevation"
      />
    </router-link>
    <router-link to="/results/page2#sightdistance">
      <SidebarButton 
        name="12. Sight Distance" @click="updateSec('sightdistance')"
        data-secName="sightdistance"
      />
    </router-link>
    <router-link to="/results/page2#curvelength">
      <SidebarButton 
        name="13. Curve Length" @click="updateSec('curvelength')"
        data-secName="curvelength"
      />
    </router-link>
    <router-link to="/results/page3#horizontalalignment">
      <SidebarButton 
        name="14. Horizontal Alignment" @click="updateSec('horizontalalignment')"
        data-secName="horizontalalignment"
      />
    </router-link>
    <router-link to="/results/page3#verticalalignment">
      <SidebarButton 
        name="15. Vertical Alignment"  @click="updateSec('verticalalignment')"
        data-secName="verticalalignment"
      />
    </router-link>
    <router-link to="/results/page3#sliproad">
      <SidebarButton 
        name="16. Slip-road / Traffic Island" @click="updateSec('sliproad')"
        data-secName="sliproad"
      />
    </router-link>
    <router-link to="/results/page4#combinedalignment">
      <SidebarButton 
        name="17. Combination of Horizontal & Vertical Alignment" @click="updateSec('combinedalignment')"
        data-secName="combinedalignment"
      />
    </router-link>
    <div style="font-size:1.5rem;padding:5%;border-top: ridge; margin-top:5%">
    <ManualButton link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf" name="CDC Manual" />
    <ManualButton link="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/Content_Page_JULY_2020.pdf" name="SDRE Manual" />
    </div>
  </div> 
  <router-view @sec-change="updateSec"></router-view>
</template>

<script>
import SidebarButton from '../components/SidebarButton.vue'
import HomeButton from '../components/HomeButton.vue'
import ManualButton from '../components/ManualButton.vue'

export default {
  name: "Results",
  components: {
    "SidebarButton": SidebarButton,
    "HomeButton": HomeButton,
    "ManualButton": ManualButton
  },
  data() {
    return {
      road: require("../assets/road.png"),
      mascot: require("../assets/mascot.png"),
      currSection: 'roadcselements',
    }
  },
  methods: {
    updateSec(sec) {
      this.currSection = sec
    },
  },
  watch: {
    currSection: function(val) {
      var oldElList = document.querySelectorAll(".active")
      oldElList.forEach(function(currentValue) {
        currentValue.removeAttribute("class") 
      })
      oldElList.forEach(function(currentValue) {
        currentValue.setAttribute("class", "btn btn-light")
      })
      var newEl = document.querySelector(`[data-secName="${val}"]`)
      newEl.setAttribute("class", "btn btn-light active")
    },
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
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
a {
  color:transparent;
  text-decoration: none
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
