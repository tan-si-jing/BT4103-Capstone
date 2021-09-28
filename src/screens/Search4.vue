<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true" @click="$router.go(-3)"/>
        <PageCircle num="2" v-bind:isActive="true" @click="$router.go(-2)"/>
        <PageCircle num="3" v-bind:isActive="true" @click="$router.go(-1)"/>
        <PageCircle num="4" v-bind:isActive="true"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question">
      <h5>What is the <u>design speed</u> (km/h) of the road you're working on? </h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="40" @click="storeDesignSpeed('speed40');"/>
      <SearchParamButton text="50" @click="storeDesignSpeed('speed50');"/>
      <SearchParamButton text="60" @click="storeDesignSpeed('speed60');"/>
      <SearchParamButton text="70" @click="storeDesignSpeed('speed70');"/>
      <SearchParamButton text="80" @click="storeDesignSpeed('speed80');"/>
      <SearchParamButton text="90" @click="storeDesignSpeed('speed90');"/>
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
  name: 'search4',
  props: ['roadDesign','roadClass','roadType'],
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      designSpeed: '',
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

  storeDesignSpeed(text){
    this.updateChoice('designSpeed',text)
    this.displayDesignSpeed();
    this.$router.push({name:'search5'})
  },
  displayDesignSpeed(){
    console.log(this.choice.role)
    console.log(this.choice.roadDesign)
    console.log(this.choice.roadClass)
    console.log(this.choice.roadType)
    console.log(this.choice.designSpeed)
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
