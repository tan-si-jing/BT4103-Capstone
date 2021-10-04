<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">5 &nbsp; Crossfall</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible title="Definition" chapt="5.1">
        <p>Crossfall is the slope, measured at the right angle to the alignment of the carriageway.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=199" target="_blank">
          CDC 10.2.2 - Definition: Crossfall (page 199)</a>
        </p>
      </Collapsible>
      <Collapsible title="Crossfall of Carriageway" chapt="5.2">
        <p>The crossfall of traffic lane and shoulder of straight section is provided to facilitate surface water drainage 
            to the side drain and the design requirements shall be as shown in Table 10.6.</p>
        <div class="img-container4">
            <img src="../assets/Table10-6.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207" target="_blank"> 
          CDC 10.4.2.4 - Crossfall of Carriageway (page 207)</a>
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
