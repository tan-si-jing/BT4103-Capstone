<template>
  <div class="wrapper">
    <p class="header">Results</p>
    <div>
    <div class="container">
      <HorizontalAlignment></HorizontalAlignment>
    </div>
    <div class="Container">
      <VerticalAlignment></VerticalAlignment>
    </div>
    <div class="lastContainer">
      <SlipRoad></SlipRoad>
    </div>
    <div class="pages">
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="true"/>
        <PageCircle2 num="4" v-bind:isActive="false" @click="level5"/>
    </div>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="back"><i class="bi bi-arrow-left"></i></button>
  <img :src="road" class="road" />
  <img :src="mascot" class="mascot" />
</div>
</template>

<script>
import HorizontalAlignment from "./HorizontalAlignment.vue"
import VerticalAlignment from "./VerticalAlignment.vue"
import SlipRoad from "./SlipRoad.vue"
import PageCircle2 from '../components/PageCircle2.vue'

export default {
name: "Level4Results",
components: {
  "HorizontalAlignment" : HorizontalAlignment,
  "VerticalAlignment" : VerticalAlignment,
  "SlipRoad" : SlipRoad,
  "PageCircle2": PageCircle2
},
props: {},

methods: {
  level2() {
    this.$router.push({path: "/level2results"})
  },
  level3() {
    this.$router.push({path: "/level3results"})
  },
  level5() {
    this.$router.push({path: "/level5results"})
  },
  back() {
    this.$router.push({path: "/search5"})
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
</style>