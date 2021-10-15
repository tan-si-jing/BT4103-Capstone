<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="sliproad" class="sectionHeader">&nbsp;&nbsp; 16 &nbsp; Slip-road / Traffic Island
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
      <Collapsible title="Traffic Island" chapt="16.1" :levelDisplay="levelDisplay">
        <p> The desirable minimum dimension and the approach nose of the traffic island shall be as shown in the Figure 10.12. </p>
        <div class="img-container">
          <img src="../assets/Figure10.12.png">
        </div> 
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=214" target='_blank'>
          CDC 10.5.3.1 - Traffic Island (page 214)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=236" target='_blank'>
          CDC Figure 10.12 (page 236)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="16.2" title="Traffic Stuff" :levelDisplay="levelDisplay">
        <p>Where there is a high concentration of pedestrian at the road intersection adjacent to school, shopping centre, hospital, food centre, the dimension 
          of the traffic island shall be increased based on 0.3&#13217; standing place per person. The number of pedestrians shall include those who are waiting 
          to cross the road at the island before the start of the pedestrian crossing signal.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=214" target='_blank'>
          CDC 10.5.3.2 - Traffic Island (page 214)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="16.3" title="Road Signs & Marking at Intersections" :levelDisplay="levelDisplay">
        <div class="img-container">
          <img src="../assets/SDRE-Chap8-RMS9.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=10" target="_blank">
          SDRE Chapter 8 - 9 (page 10)</a>
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
  data() {
    return {
      levelDisplay: false
    }
  },
  methods: {
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
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
</style>
