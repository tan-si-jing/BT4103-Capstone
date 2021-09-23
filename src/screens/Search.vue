<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true"/>
        <PageCircle num="2" v-bind:isActive="false"/>
        <PageCircle num="3" v-bind:isActive="false"/>
        <PageCircle num="4" v-bind:isActive="false"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question">
      <h5>Are you looking for a <u>specific section</u> or a <u>step-by-step</u> guide to road designing </h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="Specific Section" @click="this.$router.push({name:'searchspecific'})"/>
      <SearchParamButton text="Step-by-step Guide" @click="storeRoadDesign('StepbyStep');displayRoad()"/>
    </div>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'

export default {
  name: 'search',
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
  
  storeRoadDesign(text){
    this.updateChoice('roadDesign',text);
    this.$router.push({name:'search2'})
  },
  displayRoad(){
    console.log(this.choice.roadDesign)
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
