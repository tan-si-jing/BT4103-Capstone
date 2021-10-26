<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="longfrictionfactor" class="sectionHeader">&nbsp;&nbsp; 3 &nbsp; Longitudinal Friction Factor
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span>
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span>
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row" style="border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; padding-bottom: 2%;">
      <Collapsible chapt="3.1" title="Longitudinal Friction Factor given Design Speed" :levelDisplay="levelDisplay">
        <table id="speedTable">
          <!--thead class="table">
            <th style="text-align:center">Design Speed, V(km/h) </th>
            <th style="text-align:center">Longitudinal Friction Factor, F </th>
          </thead-->
          <tbody>
            <th style="text-align:center">Design Speed, V(km/h) </th>
            <th style="text-align:center">Longitudinal Friction Factor, F </th>
            <tr v-for="row in table" :key="row.id">
              <td style="text-align:center" v-bind:style="[row.des_speed === Number(this.designSpeed.substr(5,6)) ? 'font-weight: bold; color:black' : 'font-weight: normal; color:grey']"> {{ row.des_speed }} </td>
              <td style="text-align:center" v-bind:style="[row.des_speed === Number(this.designSpeed.substr(5,6)) ? 'font-weight: bold; color:black' : 'font-weight: normal; color:grey']"> {{ row.LFF}} </td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=203" target='_blank'>
            CDC 10.4.2.2.1 - Table 10.4 (page 203)</a>
        </p>
      </Collapsible>
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Collapsible from '../components/Collapsible.vue';

export default {
  components: {
    Collapsible
  },
  data(){
    return{
      designSpeed: this.$parent.choice.designSpeed,
      table: [],  
      levelDisplay: false
    }
  },
  methods:{
    filltable(speed){
      var speednum = Number(speed.substr(5,6))
      if (speednum == 40){
        console.log(speed)
        this.table = [
          { des_speed :40, LFF :0.56},
          { des_speed:50, LFF :0.52},   
        ]
      } else if (speednum == 50) {
        console.log(speednum)
        this.table = [
          { des_speed:40, LFF :0.56},
          { des_speed:50, LFF :0.52}, 
          { des_speed: 60, LFF :0.48},  
        ]
      } else if (speednum == 60) {
        console.log(speednum)
        this.table = [
          { des_speed:50, LFF :0.52},
          { des_speed: 60, LFF :0.48},   
          { des_speed :70, LFF :0.45},
        ]
      } else if (speednum == 70) {
        console.log(speednum)
        this.table = [
          { des_speed: 60, LFF :0.48},
          { des_speed :70, LFF :0.45},   
          { des_speed :80, LFF :0.43},   
        ]
      } else if (speednum == 80) {
        console.log(speed)
        this.table = [
          { des_speed :70, LFF :0.45},
          { des_speed :80, LFF :0.43},   
          { des_speed :90, LFF :0.41},
        ]
      } else {
        console.log(speednum)
        this.table = [
          { des_speed :80, LFF :0.43},
          { des_speed :90, LFF :0.41},   
        ]
      }
    },
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  },
  created(){
    this.filltable(this.designSpeed)
  }
}
</script>

<style scoped>
table {
  width: 65vw;
  height: auto;
  margin-top: 5vh;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  
}
.table thead td {
  background-color: #273B8C;
  color: white;
  height: 7.25vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size:22px;
  vertical-align: middle;
  
}
tbody tr td{
  background-color: #ffffff;
  
}
#speedTable {
  width: fit-content;
  box-shadow: none;
  margin-bottom: 1.5rem;
}
.sectionHeader {
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
}
.title-icon {
  font-size:0.95rem;
  color:lavender;
  cursor:pointer;
  padding: 0 1rem 0 1.5rem;
  border-left: inset;
  border-color: lightblue
}
</style>
