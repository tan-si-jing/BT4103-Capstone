<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">2 &nbsp; Grade</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="2.1" title="Main Carriageway">
        <p>The geometric design requirements of road shall be as shown in Table 10.9</p>
        <p>Notes:</p>
        <p>1) Minimum gradient for all roads is 0.4%.</p>
        <p>2) A road gradient of less than 0.4% may be used for widening of expressway.</p>
        <p>3) For tunnel, minimum road gradient of 0.2% may be used.</p>
        <p>4) For built-up area, a road gradient of less than 0.4% may be used to tie in with existing access.</p>
        <div class="img-container">
          <img src="../assets/Table10-9.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=209" target="_blank">
          CDC 10.4.3.1.1 - Main Carriageway (page 209)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="2.2" title="Interchange Ramp/Loop and Slip Road">
        <div class="img-container">
          <img src="../assets/Table10-10.png">
        </div>                
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
    height: 23vh;
}

</style>
