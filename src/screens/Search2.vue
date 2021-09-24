<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true" @click="$router.go(-1)"/>
        <PageCircle num="2" v-bind:isActive="true"/>
        <PageCircle num="3" v-bind:isActive="false"/>
        <PageCircle num="4" v-bind:isActive="false"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question">
      <h5>What <u>class of road</u> are you working on?</h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="1 - Expressways"  @click="storeRoadClass('1');displayRoadClass()"/>
      <SearchParamButton text="1A - Semi Expressway"  @click="storeRoadClass('1A');displayRoadClass()"/>
      <SearchParamButton text="2 - Major Arterial"  @click="storeRoadClass('2');displayRoadClass()"/>
      <SearchParamButton text="3 - Minor Arterial"  @click="storeRoadClass('3');displayRoadClass()"/>
      <SearchParamButton text="4 - Primary Access"  @click="storeRoadClass('4');displayRoadClass()"/>
      <SearchParamButton text="5 - Local Access"  @click="storeRoadClass('5');displayRoadClass()"/>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="$router.go(-1)">
      <i class="bi bi-arrow-left"></i>
    </button>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'

export default {
  name: 'search2',
  props: ['roadDesign'],
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      choice:{
        roadDesign: "",
        roadClass: "",
        roadType: "",
        designSpeed: "",
        grad_curv_change:""
      }
    }
  },
  methods:{
    openStorage(){
      return JSON.parse(localStorage.getItem('choice'))
    },
    saveStorage(form){
      localStorage.setItem('choice',JSON.stringify(form))
    },
    updateChoice(input,value){
      this.choice[input] = value

      let storedChoice = this.openStorage()
      if(!storedChoice) storedChoice = {}

      storedChoice[input] = value
      this.saveStorage(storedChoice)
    },

    storeRoadClass(text){
      this.updateChoice('roadClass',text);
      this.$router.push({name: 'search3'})
    },
    displayRoadClass(){
      console.log(this.choice.roadDesign)
      console.log(this.choice.roadClass)
    },
  },
  created(){
    const storedChoice = this.openStorage()
    if (storedChoice){
      this.choice = {
        ...this.choice,
        ...storedChoice
      }
    }
  }
}
</script>

<style scoped>
#back {
  position:absolute;
  width:fit-content;
  height:fit-content;
  font-size: 1.5rem;
  top:85%;
  left:5%;
  box-shadow:none;
  border:none;
}
.button-group {
  display: flex;
  justify-content: space-around;
  padding: 0 15%;
  flex-wrap: wrap;
  row-gap: 1em;
}
.options {
  background-color: #FAFAFA;
  height: 55%;
  align-items: center;
  padding-top:5%;
  display: flex;
  justify-content: space-around;
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
