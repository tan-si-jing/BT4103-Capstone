<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">11 &nbsp; Super-Elevation</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible title="Desirable Super-Elevation Formula" chapt="11.1">
        <p> The desirable super-elevation can be derived from the following equation:</p>
        <div class="img-container2">
          <img src="../assets/10.4.2.5.1.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207" target='_blank'>
          CDC 10.4.2.5.1 - Super-elevation (page 207)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="11.2" title="Negative or Positive Super-elevation">
        <p>In cases where the negative or positive super-elevation derived is lower than the desirable crossfall, the desirable super-elevation shall be 
          pegged at the crossfall as shown in Table 10.6 to slope towards the inner radius of the carriageway.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.2 - Super-elevation (page 208)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="11.3" title="Rotation of Pavement">
        <p>For rotation of pavement to attain super-elevation, the length required to develop the 
          super-elevation shall satisfy the larger value obtained from the following two formulae:</p>
        <div class="img-container2">
          <img src="../assets/10.4.2.5.3.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.3 - Super-elevation (page 208)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="11.4" title="Effected Distance">
        <p>Where transition curve is provided, super-elevation shall be effected along the 
          length of the curve. For simple circular curve, about two-third of the super-elevation 
          development length shall be introduced on the tangent approach and one third on the curve.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.4 - Super-elevation (page 208)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="11.5" title="Percentage of Super-elevation">
        <p>The various percentages of super-elevation and the corresponding design speeds and radii are as shown in 
          the Figure 10.6. </p>
        <div class="img-container">
          <img src="../assets/Figure10.6.png">
        </div>
        <div class="img-container">
          <img src="../assets/Figure10.5.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.5 - Super-elevation (page 208)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=230" target='_blank'>
          CDC Figure 10.6 (page 230)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=229" target='_blank'>
          CDC Figure 10.5 (page 229)</a>
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
  padding-bottom: 2%;
}
</style>
