<template>
  <div class="wrapper">
    <p class="header">Content Page for Step-by-Step Guide</p>
    <span v-if="!displayInfo1" v-on:click="toggleDisplay1()"><font-awesome-icon icon="angle-down" id="arrow"/></span>
    <span v-if="displayInfo1" v-on:click="toggleDisplay1()"><font-awesome-icon icon="angle-up" id="arrow"/></span>
    <div class="container" v-if="displayInfo1">
        <PageOne></PageOne>
    </div>

    <span v-if="!displayInfo2" v-on:click="toggleDisplay2()"><font-awesome-icon icon="angle-down" id="arrow"/></span>
    <span v-if="displayInfo2" v-on:click="toggleDisplay2()"><font-awesome-icon icon="angle-up" id="arrow"/></span>
    <div class="container" v-if="displayInfo2">
        <PageTwo></PageTwo>
    </div>

    <span v-if="!displayInfo3" v-on:click="toggleDisplay3()"><font-awesome-icon icon="angle-down" id="arrow"/></span>
    <span v-if="displayInfo3" v-on:click="toggleDisplay3()"><font-awesome-icon icon="angle-up" id="arrow"/></span>
    <div class="container" v-if="displayInfo3">
        <PageThree></PageThree>
    </div>

    <span v-if="!displayInfo4" v-on:click="toggleDisplay4()"><font-awesome-icon icon="angle-down" id="arrow"/></span>
    <span v-if="displayInfo4" v-on:click="toggleDisplay4()"><font-awesome-icon icon="angle-up" id="arrow"/></span>
    <div class="container" v-if="displayInfo4">
        <PageFour></PageFour>
    </div>

    <div class="pages">
        <PageCircle2 num="0" v-bind:isActive="true"/>
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
import PageTwo from "./Page2.vue"
import PageThree from "./Page3.vue"
import PageFour from "./Page4.vue"
import PageCircle2 from '../components/PageCircle2.vue'

export default {
name: "Results",
components: {
  "PageOne": PageOne,
  "PageTwo": PageTwo,
  "PageThree": PageThree,
  "PageFour": PageFour,
  "PageCircle2": PageCircle2
},
props: {},
data() {
  return {
    displayInfo1: true,
    displayInfo2: true,
    displayInfo3: true,
    displayInfo4: true,
    road: require("../assets/road.png"),
    mascot: require("../assets/mascot.png"),
  };
},
methods: {
    toggleDisplay1: function() {
        this.displayInfo1 = !this.displayInfo1;
    },
    toggleDisplay2: function() {
        this.displayInfo2 = !this.displayInfo2;
    },
    toggleDisplay3: function() {
        this.displayInfo3 = !this.displayInfo3;
    },
    toggleDisplay4: function() {
        this.displayInfo4 = !this.displayInfo4;
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