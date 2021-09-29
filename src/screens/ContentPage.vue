<template>
  <div class="wrapper">
    <p class="header">Content Page for Step-by-Step Guide</p>
    <span v-if="!displayInfo" v-on:click="toggleDisplay()"><font-awesome-icon icon="angle-down" id="arrow"/></span>
    <span v-if="displayInfo" v-on:click="toggleDisplay()"><font-awesome-icon icon="angle-up" id="arrow"/></span>
    <div class="container" v-if="displayInfo">
        <PageOne></PageOne>
    </div>

    <div class="pages">
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="false" @click="level5"/>
    </div>

  <button id="back" type="button" class="btn btn-outline-secondary" @click="back"><i class="bi bi-arrow-left"></i></button>
  <img :src="road" class="road" />
  <img :src="mascot" class="mascot" />

</div>
</template>

<script>
import PageOne from "./Page1.vue"
import PageCircle2 from '../components/PageCircle2.vue'

export default {
name: "Results",
components: {
  "PageOne": PageOne,
  "PageCircle2": PageCircle2
},
props: {},
data() {
  return {
    displayInfo: true,
    road: require("../assets/road.png"),
    mascot: require("../assets/mascot.png"),
  };
},
methods: {
    toggleDisplay: function() {
        this.displayInfo = !this.displayInfo;
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
    level5() {
        this.$router.push({path: "/level5results"})
    },
    openStorage(){
        return JSON.parse(localStorage.getItem('choice'))
    },
    back() {
        this.$router.push({path: "/search5"})
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
.container {
  padding: 3% 11% 10%;
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
  position: relative;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  right: 4%;
  bottom: 10%;
  transform: rotateY(180deg);
  z-index: 2;
}
</style>