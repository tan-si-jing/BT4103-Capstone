<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="grade" class="sectionHeader">&nbsp;&nbsp; 2 &nbsp; Grade
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span>
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span>
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="2.1" title="Main Carriageway" :levelDisplay="levelDisplay">
        <p>The geometric design requirements of road shall be as shown in Table 10.9</p>
        <table id="gradeTable">
          <!--thead class="table">
            <th style="text-align:center">Design Speed, V(km/h) </th>
            <th style="text-align:center">Longitudinal Friction Factor, F </th>
          </thead-->
          <tbody>
            <th style="text-align:center">Road Category </th>
            <th style="text-align:center">Maximum Grade (%), Desirable </th>
            <th style="text-align:center">Maximum Grade (%), Absolute </th>
            <tr v-for="row in table1" :key="row.id">
              <td style="text-align:center"> {{ row.roadcat }} </td>
              <td style="text-align:center"> {{ row.MGD}} </td>
              <td style="text-align:center">  {{ row.MGA}} </td>
            </tr>
          </tbody>
        </table>

        <p><u>Notes:</u></p>
        <ol>
        <li> Minimum gradient for all roads is 0.4%.</li>
        <li> A road gradient of less than 0.4% may be used for widening of expressway.</li>
        <li> For tunnel, minimum road gradient of 0.2% may be used.</li>
        <li> For built-up area, a road gradient of less than 0.4% may be used to tie in with existing access.</li>
        </ol>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=209" target="_blank">
          CDC 10.4.3.1.1 - Main Carriageway (page 209)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="2.2" title="Interchange Ramp / Loop and Slip Road" :levelDisplay="levelDisplay">
        <Table1010 class="tableImg"></Table1010><br>        
        <p style="font-size: 16px;"> Referenced from:
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
          CDC 10.4.3.1.2 - Interchange Ramp/Loop and Slip Road (page 210)</a>
        </p>
      </Collapsible>
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Collapsible from '../components/Collapsible.vue';
import Table1010 from '../components/table/table1010.vue';

export default {
  components: {
    Collapsible,
    Table1010,
  },
  data() {
    return {
      levelDisplay: false,
      table1:[],
      roadcat:this.$parent.choice.roadClass,
    }
  },
  methods: {
    filltable(cat){
      var categ = String(cat)
      if(categ == 'Expressways'){
        console.log(categ)
        this.table1 = [
          {roadcat:'1-Expressways' + categ,MGD : 4,MGA : 5},
        ]
      }else if(categ == 'Semi Expressway'){
        console.log(categ)
        this.table1 = [
          {roadcat:'1A-Semi Expressway' + categ,MGD : 5,MGA : 6},
        ]
      }else if(categ == 'majorArterial'){
        console.log(categ)
        this.table1 = [
          {roadcat:'2-Major Arterial',MGD : 5,MGA : 6},
        ]
      }else if(categ == 'minorArterial'){
        console.log(categ)
        this.table1 = [
          {roadcat:'3-Minor Arterial',MGD : 6,MGA : 8},
        ]
      }else if(categ == 'primaryAccess'){
        console.log(categ)
        this.table1 = [
          {roadcat:'4-Primary Access',MGD : 6,MGA : 8},
        ]
      }else{
        console.log(categ)
        this.table1 = [
          {roadcat:'5-Local Access',MGD : 6,MGA : 8},
        ]
      }
    },
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  },
  created(){
    this.filltable(this.roadcat)
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
tbody tr{
  background-color: #ffffff;
}
tbody tr:last-child td{ 
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px; 
  padding-bottom: 2%;
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
.tableImg {
  width:80%;
  box-shadow: none;
  margin-left:auto;
  margin-right:auto;
}
li {
  padding-left:0.5rem;
  margin: 10px 0
}
#gradeTable {
  width: fit-content;
  box-shadow: none;
  margin-bottom: 1.5rem;
}
</style>
