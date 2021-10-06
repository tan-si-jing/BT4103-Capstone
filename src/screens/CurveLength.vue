<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">13 &nbsp; Curve Length</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="13.1" title="Crest Curve">
        <p> The minimum length of a crest curve in metre shall be the greater of:</p>
        <p>a) 0.6 times of the design speed (in km/h); or </p>
        <p>b) curve length needed to provide the minimum stopping sight distance (refer to Figure 10.8) </p>
        <p>c) the desirable curve length can be derived from the following formulae: -</p>
        <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;"> Crest Vertical Curve for Stopping Sight Distance</div>
        <div class="img-container2">
          <img src="../assets/10.4.3.2.1.png">
        </div>
        <div class="img-container">
          <img src="../assets/Figure10.8.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
          CDC 10.4.3.2.1 - Crest Curve (page 210)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=232" target="_blank">
          CDC Figure 10.8 (page 232)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="13.2" title="Sag Curve">
        <p> The minimum length of a sag curve in metre shall be the greater of: - </p>
        <p>a) 0.6 times of the design speed (in km/h); or </p>
        <p>b) curve length needed to provide for riding comfort (refer to Figure 10.9); or </p>
        <p>c) curve length needed to provide headlight sight distance (refer to Figure 10.10) </p>
        <p>d) the desirable curve length can be derived from the following formulae: - </p>
       <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;">Sag Curve for Headlight Sight Distance</div>
        <div class="img-container2">
          <img src="../assets/10.4.3.2.2.png">
        </div> 
        <div class="img-container">
          <img src="../assets/Figure10.9.png">
        </div>
        <div class="img-container">
          <img src="../assets/Figure10.10.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=211" target="_blank">
          CDC 10.4.3.2.2 - Sag Curve (page 211)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=233" target="_blank">
          CDC Figure 10.9 (page 233)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=234" target="_blank">
          CDC Figure 10.10 (page 234)</a>
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
.tab3 {
  margin-right: 1em
}
.arrow {
  background: none;
  border: none;
  cursor: pointer;
  color:black;
  font-size:20px;
}
.description-box{
  margin-bottom:5%;
}
</style>
