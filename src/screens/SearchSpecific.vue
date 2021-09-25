<template>
  <div style="height:100vh; overflow: hidden; position:relative">
    <div class="header">
      <div class="center">
      <div class="pages">
          <PageCircle num="1" v-bind:isActive="true" @click="$router.go(-1)"/>
          <PageCircle num="2" v-bind:isActive="true"/>
      </div>
      <div class="question">
        <h5 style="text-align:center">Which section are you looking for? </h5>
      </div>
      </div>
      <img src="../assets/mascot.png" class="mascot"/>
      <img src="../assets/road.png" class="road"/>
    </div>
    <div class="options">
      <div class="input-group mx-auto" style="width: 55%;">
        <select class="form-select" @change="changeValue($event)">
          <option disabled selected value> -- Choose your section from the drop down list -- </option>
          <option value="Road Cross-Sections and Elements">Road Cross-Sections and Elements</option>
          <option value="Grade">Grade</option>
          <option value="Longitudinal Friction Factor">Longitudinal Friction Factor</option>
          <option value="Side Friction Factor">Side Friction Factor</option>
          <option value="Crossfall">Crossfall</option>
          <option value="Corner Radius">Corner Radius</option>
          <option value="Merging Angle">Merging Angle</option>
          <option value="Lane Width">Lane Width</option>
          <option value="Lateral Clearance">Lateral Clearance</option>
          <option value="Super-elevation">Super-elevation</option>
          <option value="Sight Distance">Sight Distance</option>
          <option value="Curve Length">Curve Length</option>
          <option value="Horizontal Alignment">Horizontal Alignment</option>
          <option value="Vertical Alignment">Vertical Alignment</option>
          <option value="Slip-road Traffic Island">Slip-road/ Traffic Island</option>
          <option value="Combination of Horizontal & Vertical Alignment">Combination of Horizontal & Vertical Alignment</option>
        </select>
        <button class="btn btn-outline-secondary w-25" type="button" @click="storeSpecParam(this.specific_param)" >Search</button>
      </div>
      <button id="back" type="button" class="btn btn-outline-secondary" @click="$router.go(-1)">
        <i class="bi bi-arrow-left"></i>
      </button>
    </div>
  </div>
</template>

<script>
import PageCircle from '../components/PageCircle.vue'
import database from '../firebase.js'
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  name: 'search2',
  props: ['roadDesign'],
  components: {
    PageCircle,
  },
  data() {
    return{
      specific_param:"",
    }
  },
methods:{
  changeValue(event){
    this.specific_param = event.target.value;
    console.log(event.target.value);
  },

  openStorage(){
    return JSON.parse(localStorage.getItem('choice'))
  },
  saveStorage(form){
    localStorage.setItem('choice',JSON.stringify(form))
  },
  updateChoice(input,value){
    this.choice[input] = []
    this.choice[input].push(value)

    let storedChoice = this.openStorage()
    if(!storedChoice) storedChoice = {}

    storedChoice[input] = []
    storedChoice[input].push(value)
    this.saveStorage(storedChoice)
    //Analytics
    var myparam = database.collection('search_parameters').doc("H1uwnxYevFozEeNv7SiY");
    myparam.update({
        [value]: firebase.firestore.FieldValue.increment(1)
    }).then(res => {
        this.specific_param = this.choice.specific_param.at(-1);
        window.location.reload();
        res;
    });
  },

  storeSpecParam(text){
    this.updateChoice('specific_param',text);
    this.displayParam();
    this.$router.push({name:'specific_results'})
  },
  displayParam(){
    console.log(this.choice.roadDesign)
    console.log(this.choice.specific_param[0])
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
