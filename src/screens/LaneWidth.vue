<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="lanewidth" class="sectionHeader">&nbsp;&nbsp; 8 &nbsp; Lane Width
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
      <Collapsible chapt="8.1" title="Lane Width - Main Carriageway" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 8.1 -->
        <p>The typical lane width for a major road is 3.2m and the absolute minimum shall be 3m if there are constraints. 
          In addition,</p>
        <ol type="a">
        <li> For lane adjacent to kerb, an additional width of 0.3m shall be provided.</li>
        <li> (a) is not applicable if shoulder width indicated in Clause 10.5.4 are provided.</li>
        <li> Consideration shall also be given to widen the lane further for swept path and other safety requirements on 
          sharp horizontal curve.</li>
        <li>The recommended desirable lane width shall be as shown in Table 10.12.</li>
        </ol>
        <p><u>Notes:</u></p>
        <ol>
        <li> Typical lane width for an expressway is 3.5m.</li>
        <li> Actual lane width to be determined in consultation with Land Transport Authority</li>
        </ol>       
        <Table1012 class="tableImg"></Table1012>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
            CDC 10.5.2.1 - Main Carriageway (page 212)</a>
        </p>
      </Collapsible>
      <Collapsible v-show="isEorS" chapt="8.2" title="Lane Width - Ramp or Loop" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 8.2, v-show to display this information only if user selects expressway of slip road -->
          <p>The minimum lane width for ramp or loop is 3.7m per lane. The total width of the ramp or loop shall include the 
            paved shoulder width specified in Clause 10.5.4. However, consideration shall be given to widen the lane width 
            for the swept path of a heavy vehicle (refer to Figure 10.1).</p>
          <div class="img-container">
            <ZoomImage imgSrc="Figure10-1.png"/>
          </div>
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=213" target='_blank'>
              CDC 10.5.2.2 - Ramp or Loop (page 213)</a>,
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=225" target='_blank'>
              CDC Figure 10.1 (page 225)</a>
          </p>
        </Collapsible>
      <Collapsible chapt="8.3" title="Road Signs & Markings At Intersections" :levelDisplay="levelDisplay">
      <!-- Display content of sub section 8.3 -->
        <div class="img-container">
          <ZoomImage imgSrc="SDRE-Chap8-RMS9.png"/>
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=10" target="_blank">
            SDRE Chapter 8 - 9 (page 10)</a>
        </p>
        </Collapsible>
        <Collapsible chapt="8.4" title="Typical Acceleration Lane At Expressway" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 8.4 -->
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS6.png"/>
          </div>
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=7" target="_blank">
              SDRE Chapter 8 - 6 (page 7)</a>
          </p>
        </Collapsible>
        <Collapsible chapt="8.5" title="Typical Deceleration Lane At Expressway" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 8.5 -->
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS7.png"/>
          </div>
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=8" target="_blank">
              SDRE Chapter 8 - 7 (page 8)</a>
          </p>
        </Collapsible>
        <Collapsible v-show="isSlip" chapt="8.6" title="Industrial Slip Road" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 8.6, v-show on top filters to show this information if user chose slip road -->
          <p v-show="isSlip">For industrial area and slip road leading in/out of industrial area as shown in Urban Redevelopment Authority 
            (URA) Conceptual Land Use Plan (refer to URA’s website), the slip road width shall be increased to cater for 
            the swept path of a heavy vehicle (refer to Figure 10.1). The design requirements for various radii of slip
            roads are shown in Table 10.13:</p>
          <div v-show="isSlip">
            <Table1013 class="tableImg"></Table1013><br>
          </div>
          <p v-show="isSlip"><u>Notes:</u></p>
          <p v-show="isSlip"><ol><li>Additional 0.3m lane width shall be added next to parapet/ barrier</li></ol></p>
          <p v-show="isSlip" style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
              CDC 10.5.2.4.3 - Slip Road (page 214)</a>
          </p>
        </Collapsible>
        <Collapsible chapt="8.7" title="Turning Lane" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 8.7 -->
          <p>The turning lane at the intersection is to provide storage space for turning vehicle so as not to impede the main 
            traffic flow (refer to Figure 10.11). The desirable minimum width of the turning lane shall be 3.5m and absolute 
            minimum width shall be 3m. The turning lane shall be 70m long or sufficiently long to store the likely number of 
            vehicles at any interval waiting to complete the turn, whichever is greater. A minimum of 30m taper is required for 
            the transition. </p>
          <p>To accommodate traffic lights, the desirable minimum and absolute minimum width of the centre divider at a junction 
            separating the right turning lane from the opposing traffic flow shall be 1.3m and 1.0m respectively.</p>
          <div class="img-container">
            <ZoomImage imgSrc="Figure10-11.png"/>
          </div>
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=213" target='_blank'>
              CDC 10.5.2.3 - Turning Lane (page 213)</a>,
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=235" target='_blank'>
              CDC Figure 10.11 (page 235)</a>
          </p>
        </Collapsible>
        <Collapsible chapt="8.8" title="Width" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 8.8 -->
          <p>The width of the paved shoulder shall be as shown in Table 10.14. </p>
          <Table1014 class="tableImg"></Table1014><br>
          <p><u>Notes:</u></p>
          <p><sup>1</sup> 1.0m in tunnel</p>
          <p><sup>2</sup> Only applicable to viaduct, tunnel and associated depressed road. Paved shoulder is not required on flyover, underpass 
            and associated depressed road.</p>
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215" target='_blank'>
              CDC 10.5.4.1 - Paved Shoulder (page 215)</a>
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
/** Import coded tables from components/table subfolder */
import Table1014 from '../components/table/table10.14.vue';
import Table1013 from '../components/table/table10.13.vue';
import Table1012 from '../components/table/table10.12.vue';
/** ZoomImage to zoom onto the image */
import ZoomImage from '../components/ZoomImage.vue'

export default {
  name:'LaneWidth',
  components: {
    Collapsible,
    Table1014,
    Table1013,
    Table1012,
    ZoomImage
  },
  data(){
    return{
      choice:{
        role: "",
        roadDesign: "",
        roadClass: "",
        roadType: "",
        designSpeed: "",
        grad_curv_change:"",
        specific_param:"",
      },
      /*isSlip checks if the exisitng user's road Type selected is Slip Road or not, and returns True or False respectively*/
      isSlip: this.$parent.choice.roadType === 'slipRoad' ? true : false,
      /*isSlip checks if the exisitng user has selected expressway or sliproad, and returns True or False respectively*/
      isEorS: this.$parent.choice.roadType === 'slipRoad' ? true : this.$parent.choice.roadClass === 'Expressways'? true : this.$parent.choice.roadClass === 'Semi Expressway'? true : false ,
      levelDisplay: false
    }
  },
  methods:{
    openStorage(){
      return JSON.parse(localStorage.getItem('choice'))
    },
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  },
  mounted(){
    const storedChoice = this.openStorage()
    if (storedChoice){
      this.choice = {
        ...this.choice,
        ...storedChoice
      }
    }
    console.log("Lane Width: " + this.isSlip)
  },
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
li {
  padding-left:0.5rem;
  margin: 10px 0
}
</style>

