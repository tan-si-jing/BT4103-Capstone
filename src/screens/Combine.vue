<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="header">&nbsp;&nbsp; 17 &nbsp; Combination of Horizontal & Vertical Alignment
      <span class="title-icon" @click=levelCollapse() style="cursor:pointer;">
        <span v-if="!levelDisplay"><u>Expand All</u> &nbsp;&nbsp;<font-awesome-icon icon="angle-down" id="arrow"/>&nbsp;&nbsp;</span>
        <span v-if="levelDisplay"><u>Collapse All</u> &nbsp;&nbsp;<font-awesome-icon icon="angle-up" id="arrow"/>&nbsp;&nbsp;</span>
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">
        <Collapsible title="Combination of Horizontal & Vertical Alignment" chapt="17.1" :levelDisplay="levelDisplay">
          <p>To avoid undesirable effect of poor combination of vertical and horizontal curve, the following principles shall be observed: -</p>
          <p>a) the tangent point for both vertical and horizontal curve shall coincide; </p>
          <p>b) when condition (a) cannot be met, the vertical curve shall be completely within the horizontal curve and have common mid-point. 
            If the mid-point is unable to coincide, the distance between the midpoint of both curves shall be less than 0.25 times the length of the horizontal curve; </p>
          <p>c) sharp horizontal curvature shall not be introduced near the top of a crest vertical curve, or near the bottom of a sag vertical curve; </p>
          <p>d) the zero crossfall point within super-elevation development length shall not coincide with the bottom of a sag vertical curve; and </p>
          <p>e) both horizontal and vertical curves shall be kept as long as possible and where both are present, they shall not be 
            considered separately.</p>
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
#header {
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
}
.title-icon {
  font-size:0.95rem;
  color:lavender
}
</style>
