<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true"/>
        <PageCircle num="2" v-bind:isActive="true"/>
        <PageCircle num="3" v-bind:isActive="true"/>
        <PageCircle num="4" v-bind:isActive="false"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question">
      <h5>Are you working on <u>Undivided (x-lane) Road</u>, <u>Slip Road</u> or <u>Dual (x-lane) Road</u>? Please select below. </h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="Undivided (x-lane) Road" @click="storeRoadType('UndividedRoad');displayRoadType()"/>
      <SearchParamButton text="Slip Road" @click="storeRoadType('SlipRoad');displayRoadType()"/>
      <SearchParamButton text="Dual (x-lane) Road" @click="storeRoadType('DualRoad');displayRoadType()"/>
    </div>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'

export default {
  name: 'SearchParams',
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      roadDesign: '',
      roadClass:'',
      roadType: '',
    }
  },
methods:{
  storeRoadType(text){
    this.roadType = text;
    this.$router.push('Search4')
  },
  displayRoadType(){
    console.log(this.roadType)
  },
}
}
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-around;
  padding: 0 15%
}
.options {
  background-color: #FAFAFA;
  height: 55%;
  padding-top:10%
}
.header {
  background-color: #E0E0E0;
  height: 45%;
}
.center {
  display:flex;
  align-items: center;
  flex-direction: column;
}
.road {
  height:19vh;
  width:102vw;
  transform: rotate(-2deg);
  position: absolute;
  top: 40%;
  left: -0.5%;
  z-index:1;
}
.mascot {
  height: 20vh;
  position: absolute;
  top: 30%;
  left: 22.5%;
  z-index:2;
}
.question {
  background-color:white;
  height: fit-content;
  width:35%;
  padding: 1.25rem 2rem;
  border-radius:1.5rem
}
.pages {
    display: flex;
    margin: 3% 0
}
</style>
