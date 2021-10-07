<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="horizontalalignment" class="sectionHeader">&nbsp;&nbsp; 14 &nbsp; Horizontal Alignment
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
      <Collapsible chapt="14.1" title="Horizontal Curve" :levelDisplay="levelDisplay">
        <p> The various types of horizontal curve used are as shown in Figure 10.4</p>
        <div class="img-container">
          <img src="../assets/Figure10.4.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205" target='_blank'>
          CDC 10.4.2.3 - Horizontal Curve (page 205)</a>,
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=228" target='_blank'>
          CDC Figure 10.4 (page 228)</a>
        </p>
      </Collapsible>
      <Collapsible title="Simple Curve" chapt="14.2" :levelDisplay="levelDisplay">
        <p>This is an arc of constant radius which achieves the desirable deflection without using a transition curve. 
            This type of curve shall be used whenever possible.</p>
        <p style="font-size: 16px;"> Referenced from:
        <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205" target='_blank'>
          CDC 10.4.2.3.1 - Simple Curve (page 205)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="14.3" title="Compound Curve" :levelDisplay="levelDisplay">
        <p>A compound curve consists of two or more curves with deflections in the same direction immediately 
            adjacent to each other. In general, the use eof compound curve is not favoured. Where it is necessary, 
            the following guidelines shall be applied: - </p>
        <p>a) curve shall have radii greater than 1000m. </p>
        <p>b) where radii less than 1000m have to be used, the design speed for each curve shall 
              desirably be within 10km/h of each other. </p>
        <p>c) on main road, the ratio of the radius of the flatter curve to the sharper curve shall not exceed 1.5:1; and </p>
        <p>d) at junction intersection and ramp, the ratio of the radius of the flatter curve to the sharper curve can be up to 2:1</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205" target='_blank'>
            CDC 10.4.2.3.2 - Compound Curve (page 205)</a>
        </p>
      </Collapsible>
      <Collapsible title="Reverse Curve" chapt="14.4" :levelDisplay="levelDisplay">
        <p>A reverse curve consists of two curves of deflections in the opposite direction which are 
          joined by a relatively short tangent distance. Reverse curve shall not be used unless there is sufficient 
          distance between the curves to introduce full super-elevation of the two curves. In general, the use of 
          reverse curve is not favoured. Where it is necessary, the following guidelines shall be applied. </p>
        <p>a) the tangent distance in metre between the reverse curves shall not be less than 0.6 times the design speed in km/h. </p>
        <p>b) up to 50% of the transition may be placed in the curve; and </p>
        <p>c) where it is not possible to provide the minimum tangent distance in (a), the radius of each curve shall not be 
          less than minimum radius of V&#178;/127 f, where V is the design speed in km/h and f is the side friction factor.</p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=206" target='_blank'>
              CDC 10.4.2.3.3 - Reverse Curve (page 206)</a>
        </p>
      </Collapsible>
      <Collapsible title="Broken-back Curve" chapt="14.5" :levelDisplay="levelDisplay">
        <p>Broken-back curve consists of two curves with deflections in the same direction that is joined by a short tangent 
          distance. In general, the use of broken-back curve is not favoured. Where it is necessary, the length of tangent 
          in metre shall not be less than 3 times the design speed in km/h. Where such a minimum length of tangent cannot be obtained, 
          the alignment shall be changed, either to increase the straight section, or eliminate it entirely by the use of a compound curve, 
          or transition curve between the two curves.
        </p>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=206" target='_blank'>
            CDC 10.4.2.3.4 - Broken-back Curve (page 206)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="14.6" title="Transition Curve" :levelDisplay="levelDisplay">
        <p>Transition curve is normally used to join a straight line to a circular curve, although it may be omitted when large 
          radius curve is used. The most frequently used form of transition is the clothoid which curvature changes at a uniform 
          rate along the curve. The following design requirements shall be adopted:</p>
        <p>a) Where the design speed is up to 60km/h, no transition curve is required. Where the design speed is more than 60km/h, 
          transition curve is not required if the associated shift in circular arc is less than 0.20m.</p>
        <p>b) The length of the transition curve and shift can be derived from the following: - </p>
        <div class="img-container2">
          <img src="../assets/10.4.2.3.5.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=206" target='_blank'>
            CDC 10.4.2.3.5 - Transition Curve (page 206)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="14.7" title="Main Carriageway" :levelDisplay="levelDisplay">
        <p> The geometric design requirement of road shall be as follows: - </p>
        <div class="img-container4">
          <img src="../assets/Table10.2.png">
        </div>  
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=202" target='_blank'>
            CDC 10.4.2.1.1 - Main Carriageway (page 202)</a>
        </p>
      </Collapsible>
      <Collapsible chapt="14.8" title="Pavement Markings For Sharp Curve" :levelDisplay="levelDisplay">
        <div class="img-container">
          <img src="../assets/SDRE-Chap8-RMS12.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=13" target="_blank">
            SDRE Chapter 8 - 12 (page 13)</a>
        </p>
      </Collapsible>
      <Collapsible title="Curve Alignment Markers (CAM)" chapt="14.9" :levelDisplay="levelDisplay">
        <div class="img-container">
          <img src="../assets/SDRE-Chap8-RMS13.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=14" target="_blank">
            SDRE Chapter 8 - 13 (page 14)</a>
        </p>
      </Collapsible>
      <Collapsible title="Horizontal Alignment" chapt="14.10" :levelDisplay="levelDisplay">
        <p> There are several general controls that shall be considered when designing the horizontal alignment. </p>
        <p>a) Where it becomes necessary to introduce curve of lower standard than the design requirement, 
          the respective design speed between the successive geometric elements shall not differ by more than 10km/h; </p>
        <p>b) Where the radius of a curve is below the design requirement, additional lane width shall be provided to accommodate heavy 
          vehicle (refer to Figure 10.1) off-tracking within the curve; </p>
        <p>c) Curve shall be sufficiently long to avoid the appearance of a kink. Curve shall be at least 150m long for a central angle of 5°, 
          and the minimum length shall be increased by 30m for each degree decrease in the central angle; </p>
        <p>d) Opening for vehicle turning at centre median along horizontal curve shall not be provided if the intersection 
          sight distance is not achievable; and </p>
        <p>e) on a horizontal curve, there shall be no obstruction i.e. longitudinal barrier, tree, shrub, embankment, 
          other structure or building that restrict the driver’s sight distance. If the required sight distance cannot be achieved, 
          then lane widening shall be provided. </p>
        <div class="img-container">
          <img src="../assets/Figure10.1.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=200" target='_blank'>
            CDC 10.4.1.1 - Horizontal Alignment (page 200)</a>,
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=225" target='_blank'>
            CDC Figure 10.1 (page 225)</a>
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
</style>
