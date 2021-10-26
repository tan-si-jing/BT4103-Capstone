<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true" @click="$router.push('search')"/>
        <PageCircle num="2" v-bind:isActive="true" @click="$router.push('search2')"/>
        <PageCircle num="3" v-bind:isActive="true" @click="$router.push('search3')"/>
        <PageCircle num="4" v-bind:isActive="true" @click="$router.push('search4')"/>
        <PageCircle num="5" v-bind:isActive="true"/>
    </div>
    <div class="question">
      <h5>Is there <u>gradient change</u> or <u>curvature change</u> at/near junctions? </h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="Yes" v-bind:isActive="true" @click="storeChange('changeJunctionYes')"/>
      <SearchParamButton text="No" v-bind:isActive="true" @click="storeChange('changeJunctionNo')"/>
    </div>
    <button id="back" type="button" class="btn btn-outline-secondary" @click="$router.push('search4')">
      <i class="bi bi-arrow-left"></i>
    </button>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'
import database from '../firebase.js'
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'search5',
  props: ['roadDesign','roadClass','roadType','designSpeed'],
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      gradcurvchange:'',
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

  storeChange(text){
    this.gradcurvchange= text
    this.updateChoice('gradcurvchange',text);
    this.displayChange();
    this.updateFirebase();
    this.$router.push({path: '/results/page1'})
  },
  displayChange(){
    console.log(this.choice.role)
    console.log(this.choice.roadDesign)
    console.log(this.choice.roadClass)
    console.log(this.choice.roadType)
    console.log(this.choice.designSpeed)
    console.log(this.choice.gradcurvchange)
  },
  updateFirebase(){
    //update parameters to firebase
    var myparam = database.collection('search_parameters').doc("H1uwnxYevFozEeNv7SiY");
    myparam.update({
      ['numVisits']: firebase.firestore.FieldValue.increment(1) ,
      [this.choice.role + this.choice.roadDesign]: firebase.firestore.FieldValue.increment(1) ,
      [this.choice.role + '-' + this.choice.roadClass]: firebase.firestore.FieldValue.increment(1) ,
      [this.choice.roadClass]: firebase.firestore.FieldValue.increment(1),
      [this.choice.roadType]: firebase.firestore.FieldValue.increment(1),
      [this.choice.designSpeed]: firebase.firestore.FieldValue.increment(1),
      [this.choice.gradcurvchange]: firebase.firestore.FieldValue.increment(1)
    })
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
  width: 60%
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
  width: auto;
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
