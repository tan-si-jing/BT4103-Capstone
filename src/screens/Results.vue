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
  name: "Results",
  components: {
    "SidebarButton": SidebarButton,
    "HomeButton": HomeButton
  },
  data () {
    return {
      shortSectionObserver: null,
      longSectionObserver: null,
      road: require("../assets/road.png"),
      mascot: require("../assets/mascot.png"),
    }
  },
  mounted () {
    this.observeSections()
  },
  methods: {
    observeSections() {
      try {
        this.shortSectionObserver.disconnect()
        this.longSectionObserver.disconnect()
      } catch (error) {console.log(error)}

      this.shortSectionObserver = new IntersectionObserver(this.sectionObserverHandler, {
        rootMargin: "-25% 0% -25% 0%",
        threshold: 0.8
      })
      this.longSectionObserver = new IntersectionObserver(this.sectionObserverHandler, {
        rootMargin: "-10% 0% -10% 0%",
        threshold: 0.8
      })
      this.expandedSectionObserver = new IntersectionObserver(this.sectionObserverHandler, {
        rootMargin: "0% 0% 0% 0%",
        threshold: 0
      })
      // Observe each section
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        if (section.clientHeight  < 0.50*window.innerHeight ) {
          this.shortSectionObserver.observe(section)
        } else if (section.clientHeight > window.innerHeight) {
          this.expandedSectionObserver.observe(section)
        } else {
          this.longSectionObserver.observe(section)
        }
      })
    },
    sectionObserverHandler (entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          console.log(sectionId)
          // Push sectionId to router here 
          //this.$router.replace({ path: this.$route.path, hash: `#${sectionId}` })
        }
      }
    }
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
