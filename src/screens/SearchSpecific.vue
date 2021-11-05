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
        <input list="specificFields" class="form-select" @change="changeValue($event)"  v-on:keyup.enter="storeSpecParam(this.specific_param)">
        <datalist id="specificFields">
          <option disabled selected value>-- Choose your section from the drop down list --</option>
          <option value="Classification of Road">Classification of Road</option>
          <option value="Combination of Horizontal & Vertical Alignment">Combination of Horizontal & Vertical Alignment</option>
          <option value="Corner Radius">Corner Radius</option>
          <option value="Corner Radius">Minimum Corner Radius</option>
          <option value="Crossfall">Crossfall</option>
          <option value="Crossfall">Crossfall of Carriageway</option>
          <option value="Curve Length">Curve Length</option>
          <option value="Curve Length">Crest Curve Formula</option>  
          <option value="Curve Length">Sag Curve Formula</option> 
          <option value="Design Speed">Design Speed</option>
          <option value="Design Speed">Interchange Ramp/ Loop and Slip Road</option>
          <option value="Grade">Grade</option>
          <option value="Grade">Critical Length of Grade</option> 
          <option value="Grade">Interchange Ramp/ Loop and Slip Road</option>
          <option value="Grade">Main Carriageway</option>
          <option value="Horizontal Alignment">Horizontal Alignment</option>
          <option value="Horizontal Alignment">Broken-back Curve</option>
          <option value="Horizontal Alignment">Compound Curve</option>
          <option value="Horizontal Alignment">Curve Alignment Markers (CAM)</option>
          <option value="Horizontal Alignment">Enhancement Measures for Horizontal Alignment</option>
          <option value="Horizontal Alignment">General Controls for Horizontal Alignment</option>
          <option value="Horizontal Alignment">Minimum Radius</option>
          <option value="Horizontal Alignment">Pavement Markers</option>
          <option value="Horizontal Alignment">Reverse Curve</option>
          <option value="Horizontal Alignment">Simple Curve</option>
          <option value="Horizontal Alignment">Transition Curve</option>
          <option value="Horizontal Alignment">Types of Horizontal Curve</option>
          <option value="Lane Width">Lane Width</option>
          <option value="Lane Width">Industrial Slip Road</option>
          <option value="Lane Width">Lane Width - Main Carriageway</option>
          <option value="Lane Width">Lane Width - Ramp or Loop</option>
          <option value="Lane Width">Road Signs & Markings At Intersections</option>
          <option value="Lane Width">Turning Lane</option>
          <option value="Lane Width">Typical Acceleration Lane At Expressway</option>
          <option value="Lane Width">Typical Deceleration Lane At Expressway</option>
          <option value="Lane Width">Width (of Paved Shoulder)</option>
          <option value="Lateral Clearance">Lateral Clearance</option>
          <option value="Lateral Clearance">Directional Signs</option>
          <option value="Lateral Clearance">Minimum Lateral Clearance</option>
          <option value="Lateral Clearance">(Lateral Clearance for) Roads</option>
          <option value="Longitudinal Friction Factor">Longitudinal Friction Factor</option>
          <option value="Merging Angle">Merging Angle</option>
          <option value="Merging Angle">Left Turn Slip Road</option>
          <option value="Road Cross-Sections and Elements">Road Cross-Sections and Elements</option>
          <option value="Road Cross-Sections and Elements">Drains & Culverts</option>
          <option value="Road Cross-Sections and Elements">Kerbs and Footpaths</option>
          <option value="Road Cross-Sections and Elements">Service Verge</option>
          <option value="Road Cross-Sections and Elements">Sidetable, Drain, Footpath and Divider</option>
          <option value="Road Cross-Sections and Elements">Typical Cross-Section</option>
          <option value="Side Friction Factor">Side Friction Factor</option>
          <option value="Sight Distance">Sight Distance</option>  
          <option value="Sight Distance">Intermmediate Sight Distance</option> 
          <option value="Sight Distance">Intersection Sight Distance</option> 
          <option value="Sight Distance">Offset Distance</option> 
          <option value="Sight Distance">Ovetaking Sight Distance</option> 
          <option value="Sight Distance">Stopping Sight Distance</option>
          <option value="Signs">Signs</option>
          <option value="Signs">Directional Sign</option>
          <option value="Signs">Signs - Cycling Path</option>
          <option value="Signs">Street Name Board</option> 
          <option value="Signs">Traffic Informatory Signs</option>
          <option value="Signs">Traffic Mandatory Signs</option>
          <option value="Signs">Traffic Prohibitory Signs</option>
          <option value="Signs">Traffic Warning Signs</option>
          <option value="Slip-road Traffic Island">Slip-road Traffic Island</option>
          <option value="Slip-road Traffic Island">Desirable Minimum Traffic Island</option>
          <option value="Slip-road Traffic Island">Signs & Markings at Slip-road/ Traffic Island</option>
          <option value="Super-Elevation">Super-Elevation</option>
          <option value="Super-Elevation">Desirable Super-Elevation Formula</option>
          <option value="Super-Elevation">If Super-Elevation less than Desirable Crossfall</option>
          <option value="Super-Elevation">Rotation of Pavement</option>
          <option value="Types of Road">Types of Road</option>
          <option value="Types of Road">Dual Road</option>
          <option value="Types of Road">Slip Road</option>
          <option value="Types of Road">Undivided Road</option>
          <option value="Vertical Alignment">Vertical Alignment</option>
          <option value="Vertical Alignment">Crest Curve</option>
          <option value="Vertical Alignment">Critical Length of Grade</option>
          <option value="Vertical Alignment">General Controls for Vertical Alignment</option>
          <option value="Vertical Alignment">Sag Curve</option>
          <option value="Vertical Alignment">Types of Vertical Curve</option>
      
        </datalist>
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
        ['numVisits']: firebase.firestore.FieldValue.increment(1) ,
        [this.choice.role + this.choice.roadDesign]: firebase.firestore.FieldValue.increment(1) ,
        [value]: firebase.firestore.FieldValue.increment(1),
        [this.choice.role + '-' + value]: firebase.firestore.FieldValue.increment(1)
        }).then(res => {
          this.specific_param = this.choice.specific_param.at(-1);
          window.location.reload();
          res;
      });
    },

    storeSpecParam(text){
      this.updateChoice('specific_param',text);
      this.displayParam();
      if (text == 'Road Cross-Sections and Elements') {
        this.$router.push({name:'dynamic_road'})
      } else if (text == 'Signs') {
        this.$router.push({name:'dynamic_signs'})
      } else {
        this.$router.push({name:'specific_results'})
      }
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
[list]::-webkit-calendar-picker-indicator {
  display: none !important;
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
