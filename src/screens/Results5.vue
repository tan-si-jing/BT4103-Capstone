<template>
  <div class="result">
    <div class="contents">
    <h2 style="padding-top:2rem; width:65vw">Results</h2>
    <div id="combinedalignment" style="margin-bottom: 5%;" class="section">
      <Combine/>
    </div>
    </div>
    <div class="bottom">
    <div class="pages">
        <PageCircle2 num="1" v-bind:isActive="false" @click="level2"/>
        <PageCircle2 num="2" v-bind:isActive="false" @click="level3"/>
        <PageCircle2 num="3" v-bind:isActive="false" @click="level4"/>
        <PageCircle2 num="4" v-bind:isActive="true"/>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="back">
    <i class="bi bi-arrow-left"></i><span>Back to Search</span>
    </button>
    <div class="imageStack">
    <div id="bottomImg">
    <img :src="road" class="road" />
    </div>
    <div id="topImg">
    <img :src="mascot" class="mascot" />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Combine from "./Combine.vue"
import PageCircle2 from '../components/PageCircle2.vue'

export default {
    name: "Level5Results",
    props: ['id'],
    components: {
        "Combine" : Combine,
        "PageCircle2": PageCircle2,
    },
    methods: {
        level2() {
            this.$router.push({path: "/results/page1"})
        },
        level3() {
            this.$router.push({path: "/results/page2"})
        },
        level4() {
            this.$router.push({path: "/results/page3"})
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
.imageStack{
  display: grid;
  position: relative;
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
  max-width: 16%;
  position: absolute;
  right: 4%;
  transform: rotateY(180deg);
  z-index: 2;
  bottom:30%
}
.result {
  float: right;
  width: 75%;
  background: #e0e0e0;
  /*min-height: 100vh;*/
  position:fixed;
  bottom:0;
  top:0;
  right:0;
  overflow:auto;

}
.contents {
  margin-left:5vw;
 min-height:78vh;
}
.bottom {
  position:relative;
  bottom:0;
}
</style>