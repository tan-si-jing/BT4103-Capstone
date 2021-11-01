<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="superelevation" class="sectionHeader">&nbsp;&nbsp; 11 &nbsp; Super-Elevation
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
      <Collapsible title="Desirable Super-Elevation Formula" chapt="11.1" :levelDisplay="levelDisplay">
        <p> The desirable super-elevation can be derived from the following equation:</p>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.2.5.1.png"/>
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207" target='_blank'>
          CDC 10.4.2.5.1 - Super-elevation (page 207)</a>
        </p>

        <table102 class="tableImg"></table102><br>

        <p>The various percentages of super-elevation and the corresponding design speeds and radii are as shown in 
          the Figure 10.6. </p>
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.6.png"/>
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.5 - Super-elevation (page 208)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=230" target='_blank'>
          CDC Figure 10.6 (page 230)</a>,
        </p>

      </Collapsible>

      <Collapsible chapt="11.2" title="If super-elevation < desirable crossfall" :levelDisplay="levelDisplay">
        <p>In cases where the negative or positive super-elevation derived is lower than the desirable crossfall, the desirable super-elevation shall be 
          pegged at the crossfall to slope towards the inner radius of the carriageway.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.2 - Super-elevation (page 208)</a>
        </p>
      </Collapsible>

      <Collapsible chapt="11.3" title="Rotation of Pavement" :levelDisplay="levelDisplay">
        <p>For rotation of pavement to attain super-elevation, the length required to develop the 
          super-elevation shall satisfy the larger value obtained from the following two formulae:</p>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.2.5.3.png"/>
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.3 - Super-elevation (page 208)</a>
        </p>

        <p>Where transition curve is provided, super-elevation shall be effected along the 
          length of the curve. For simple circular curve, about two-third of the super-elevation 
          development length shall be introduced on the tangent approach and one third on the curve.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
          CDC 10.4.2.5.4 - Super-elevation (page 208)</a>
        </p>

        <div class="img-container">
          <ZoomImage imgSrc="Figure10.5.png"/>
        </div>
        <p style="font-size: 16px;"> Referenced from:
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
import table102 from '../components/table/table10.2 -superelevation.vue'
import ZoomImage from '../components/ZoomImage.vue'

export default {
  components: {
    Collapsible,
    table102,
    ZoomImage
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
.tableImg {
  width:80%;
  box-shadow: none;
  margin-left:auto;
  margin-right:auto;
}
</style>
