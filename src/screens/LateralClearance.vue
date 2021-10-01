<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">10 &nbsp; Lateral Clearance</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="10.1" title="Clear Lateral">
        <p>Minimum lateral clearance from the edge of road pavement (both at centre median and side table) to any adjacent 
          structure is shown in Table 10.17 unless otherwise specified in the Standard Details of Road Elements.</p>
        <p>Notes:</p>
          <p>1 If no Vehicular Impact Guardrail is installed. Applicable to both centre median and sidetable.</p>
          <p>2 Where Vehicular Impact Guardrail is installed.</p>
        <div class="img-container4">
          <img src="../assets/Table10-17.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=222" target='_blank'>
            CDC 10.7.1.1 - Lateral Clearance (page 222)</a>
        </p>
      </Collapsible>
      <Collapsible title="Minimum Lateral Clearance" chapt="10.2">
        <p>For an elevated road structure, the minimum lateral clearance between the edge of the road structure and any other structures shall be 3m.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=223" target='_blank'>
            CDC 10.7.1.2 - Lateral Clearance (page 223)</a>
        </p>
      </Collapsible>
      <Collapsible title="Directional Sign" chapt="10.3">
        <p>Directional sign shall generally be sited on the side next to the slow lane and clearly visible to the driver. It shall be 
          noted that in some cases (e.g.for a major right turning movement, or for very wide road) it may be appropriate to site sign 
          on the median if it is wide enough. The minimum lateral clearance from the edge of the vehicular impact guardrail to the 
          edge of the signboard shall be at least 600mm. The post/support of the signboard shall be at least 1000mm from the vehicular 
          impact guardrail. Where there is no vehicular impact guardrail next to the raise kerb, the minimum clearance between the edge of 
          signboard and the edge of road kerb shall be at least 600mm.</p> 
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=220" target='_blank'>
            CDC 10.5.11.5 - Lateral Clearance (page 220)</a>
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
    height: 26vh;
}
p {
  font-size:20px;
}
.tab1 {
 margin-right: 2.5em
}
.tab2 {
 margin-right: 1.7em
}
.tab3 {
  margin-right: 1em
}
.tab4 {
  margin-right:0.2em;
}
.tab5 {
  margin-right: 1.2em
}
.img-container2{
    width: 50%;
    height: auto;
    margin-left: 3em; 
    margin-top: 3%;
    margin-bottom:3%;
}
.img-container2 img{
    width: 100%;
    height: auto;
}
.img-container4{
    width: 80%;
    height: auto;
    margin-left: 3em; 
}
.img-container4 img{
    width: 100%;
    height: auto;
}
</style>

