<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="combinedalignment" class="sectionHeader">&nbsp;&nbsp; 17 &nbsp; Combination of Horizontal & Vertical Alignment
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
        <!-- if no curvature change selected, we inform that no relevant information has to be shown -->   
        <p style="font-size:20px;text-align:center" v-show="!isCurved">--No relevant information since no gradient change or curvature change selected--</p>
      
        <!--Else, we display the following below-->
        <Collapsible v-show="isCurved" title="Combination of Horizontal & Vertical Alignment" chapt="17.1" :levelDisplay="levelDisplay">
        <!-- Display content of sub section 17.1 -->
          <p>To avoid undesirable effect of poor combination of vertical and horizontal curve, the following principles shall be observed: </p>
          <ol type="a"><!-- Ordered List -->
          <li> The tangent point for both vertical and horizontal curve shall coincide; </li>
          <li> When condition (a) cannot be met, the vertical curve shall be completely within the horizontal curve and have common mid-point. 
            If the mid-point is unable to coincide, the distance between the midpoint of both curves shall be less than 0.25 times the length of the horizontal curve; </li>
          <li> Sharp horizontal curvature shall not be introduced near the top of a crest vertical curve, or near the bottom of a sag vertical curve; </li>
          <li> The zero crossfall point within super-elevation development length shall not coincide with the bottom of a sag vertical curve; and </li>
          <li> Both horizontal and vertical curves shall be kept as long as possible and where both are present, they shall not be 
            considered separately.</li>
          </ol>
          <!-- References of sub section 17.1-->
          <p style="font-size: 16px;"> Referenced from:
            <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=201" target="_blank">
              CDC 10.4.1.3 - Combination of Horizontal & Vertical Alignment (page 201)
            </a>
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

export default {
  components: {
    Collapsible
  },
  data() {
    return {
      levelDisplay: false,
      isCurved: this.$parent.choice.gradcurvchange === 'changeJunctionYes' ? true : false,
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
