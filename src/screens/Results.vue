<template>
  <div class="sidebar">
    <div style="font-size:1.5rem;padding:5%;"><b>Step-by-Step Guide:</b></div>
      <router-link to="/results/page1#roadcselements"><SidebarButton name="1.&nbsp;&nbsp; Road Cross-Sections and Elements"/></router-link>
      <router-link to="/results/page1#grade"><SidebarButton name="2.&nbsp;&nbsp; Grade"/></router-link>
      <router-link to="/results/page1#longfrictionfactor"><SidebarButton name="3.&nbsp;&nbsp; Longitudinal Friction Factor"/></router-link>
      <router-link to="/results/page1#sidefrictionfactor"><SidebarButton name="4.&nbsp;&nbsp; Side Friction Factor"/></router-link>
      <router-link to="/results/page1#crossfall"><SidebarButton name="5.&nbsp;&nbsp; Crossfall"/></router-link>
      <router-link to="/results/page1#cornerradius"><SidebarButton name="6.&nbsp;&nbsp; Corner Radius"/></router-link>
      <router-link to="/results/page1#mergingangle"><SidebarButton name="7.&nbsp;&nbsp; Merging Angle"/></router-link>
      <router-link to="/results/page1#lanewidth"><SidebarButton name="8.&nbsp;&nbsp; Lane Width"/></router-link>
      <router-link to="/results/page1#signs"><SidebarButton name="9.&nbsp;&nbsp; Signs"/></router-link>
      <router-link to="/results/page2#lateralclearance"><SidebarButton name="10. Lateral Clearance"/></router-link>
      <router-link to="/results/page2#superelevation"><SidebarButton name="11. Super-elevation"/></router-link>
      <router-link to="/results/page2#sightdistance"><SidebarButton name="12. Sight Distance"/></router-link>
      <router-link to="/results/page2#curvelength"><SidebarButton name="13. Curve Length"/></router-link>
      <router-link to="/results/page3#horizontalalignment"><SidebarButton name="14. Horizontal Alignment" /></router-link>
      <router-link to="/results/page3#verticalalignment"><SidebarButton name="15. Vertical Alignment"/></router-link>
      <router-link to="/results/page3#sliproad"><SidebarButton name="16. Slip-road / Traffic Island"/></router-link>
      <router-link to="/results/page4#combinedalignment"><SidebarButton name="17. Combination of Horizontal & Vertical Alignment"/></router-link>
      <HomeButton/>
      
  </div>
  
  <router-view></router-view>
</template>

<script>
import SidebarButton from '../components/SidebarButton.vue'
import HomeButton from '../components/HomeButton.vue'

export default {
name: "Level2Results",
props: ['id'],
components: {
  "SidebarButton": SidebarButton,
  "HomeButton": HomeButton
},
methods: {
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
  moveToSection(link) {
    this.$router.push({path: link})
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
</style>
