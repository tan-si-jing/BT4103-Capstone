<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="crossfall" class="sectionHeader">&nbsp;&nbsp; 5 &nbsp; Crossfall <!-- Section 5 -->
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span> <!-- Expand all button -->
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span> <!-- Collapse all button -->
      </span>
      </td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible title="Definition" chapt="5.1" :levelDisplay="levelDisplay"> <!-- Sub section 5.1 -->
      <!-- Display content of sub section 5.1 -->
        <p>Crossfall is the slope, measured at the right angle to the alignment of the carriageway.</p>
        <!-- References for 5.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=199" target="_blank">
          CDC 10.2.2 - Definition: Crossfall (page 199)</a>
        </p>
      </Collapsible>
      <Collapsible title="Crossfall of Carriageway" chapt="5.2" :levelDisplay="levelDisplay"> <!-- Sub section 5.2 -->
       <!-- Display content of sub section 5.2 -->
        <p>The crossfall of traffic lane and shoulder of straight section is provided to facilitate surface water drainage 
            to the side drain and the design requirements shall be as shown in Table 10.6.</p>
        <Table1006 class="tableImg"></Table1006> <!-- Table 10.6 -->
        <br>
         <!-- References for 5.2 -->
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
/** Collapsible to expand and collapse the sub-sections */
import Collapsible from '../components/Collapsible.vue';
/** Import respective table image */
import Table1006 from '../components/table/table10.6.vue';

export default {
  components: {
    Collapsible,
    Table1006
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
  height: 23vh;
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
