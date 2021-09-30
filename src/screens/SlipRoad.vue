<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">16 &nbsp; Slip-road/ Traffic Island</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible title="" chapt="16.1">
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
      <Collapsible chapt="16.2" title="">
        <p>Where there is a high concentration of pedestrian at the road intersection adjacent to school, shopping centre, hospital, food centre, the dimension 
          of the traffic island shall be increased based on 0.3&#13217; standing place per person. The number of pedestrians shall include those who are waiting 
          to cross the road at the island before the start of the pedestrian crossing signal.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=214" target='_blank'>
          CDC 10.5.3.2 - Traffic Island (page 214)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="16.3" title="Road Signs & Marking at Intersections">
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
  }
}
</script>

<style scoped>
table {
    width: 70vw;
    height: auto;
    margin-top: 5vh;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
}
.table thead td {
    background-color: #273B8C;
    color: white;
    height: 6vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size:22px;
    text-indent:1.5%;
     vertical-align: middle;
}
tbody tr{
    background-color: #ffffff;
}
tbody tr:last-child td{ 
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px; 
    height: 31vh;
}
.tab3 {
  margin-right: 1em
}
</style>
