<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="curvelength" class="sectionHeader">&nbsp;&nbsp; 13 &nbsp; Curve Length
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
      <Collapsible chapt="13.1" title="Crest Curve" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 13.1 -->
        <p> The minimum length of a crest curve in metre shall be the greater of:</p>
        <ol type="a"><!-- Ordered list -->
        <li> 0.6 times of the design speed (in km/h); or </li>
        <li> Curve length needed to provide the minimum stopping sight distance (refer to Figure 10.8) </li>
        <li> The desirable curve length can be derived from the following formulae: </li>
        </ol>
        <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;"> Crest Vertical Curve for Stopping Sight Distance</div>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.3.2.1.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.8.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References of sub section 13.1-->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
          CDC 10.4.3.2.1 - Crest Curve (page 210)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=232" target="_blank">
          CDC Figure 10.8 (page 232)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="13.2" title="Sag Curve" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 13.2 -->
        <p> The minimum length of a sag curve in metre shall be the greater of: </p>
        <ol type="a"><!-- Ordered list -->
        <li> 0.6 times of the design speed (in km/h); or </li>
        <li> Curve length needed to provide for riding comfort (refer to Figure 10.9); or </li>
        <li> Curve length needed to provide headlight sight distance (refer to Figure 10.10) </li>
        <li> The desirable curve length can be derived from the following formulae: </li>
        </ol>
        <div style="font-size:16px;margin-right:auto;margin-left:auto; width:50%;">Sag Curve for Headlight Sight Distance</div>
        <div class="img-container2">
          <ZoomImage imgSrc="10.4.3.2.2.png"/> <!-- Display zoomed image of CDC Figure -->
        </div> 
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.9.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <div class="img-container">
          <ZoomImage imgSrc="Figure10.10.png"/> <!-- Display zoomed image of CDC Figure -->
        </div>
        <!-- References of sub section 13.2-->
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
/** Collapsible to expand and collapse the sub-sections */
import Collapsible from '../components/Collapsible.vue';
/** ZoomImage to zoom onto the image */
import ZoomImage from '../components/ZoomImage.vue'

export default {
  components: {
    Collapsible,
    ZoomImage
  },
  data() {
    return {
      levelDisplay: false
    }
  },
  methods: {
    /** to expand to collapse all in the Section */
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
li {
  padding-left:0.5rem;
  margin: 10px 0
}
</style>
