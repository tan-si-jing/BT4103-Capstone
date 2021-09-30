<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">6 &nbsp; Corner Radius</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible title="Corner Radius" chapt="6.1">
        <p>The corner radius at an intersection affect the operation and safety of the intersection. The minimum radius 
            shall not be less than the values as shown in Table 10.8.</p>
        <div class="img-container">
          <img src="../assets/Table10-8.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=209" target="_blank">
            CDC 10.4.2.6 - Corner Radius (page 209)</a>
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