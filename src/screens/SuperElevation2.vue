<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">11 &nbsp; Super-Elevation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">

                <div class="title" @click="collapse()">
                  <div class="title-text">
                    <b class="tab2">11.1</b>Desirable Super-Elevation Forumla
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">11.1</b><b>Desirable Super-Elevation Forumla</b></p-->
                <p> The desirable super-elevation can be derived from the following equation:</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.5.1.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207" target='_blank'>
                  CDC 10.4.2.5.1 - Super-elevation (page 207)</a></p>

                </div>
                <div class="title" @click="collapse1()">
                  <div class="title-text">
                    <b class="tab2">11.2</b>Negative or Positive Super-elevation
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo1"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo1"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo1" style="font-size: 20px; margin-top: 1%;">
                <!--p style="padding-top:3%"><b class="tab2">11.2</b><b>Negative or Positive Super-elevation</b></p-->
                    <p>In cases where the negative or positive super-elevation derived is lower than the desirable crossfall, the desirable super-elevation shall be 
                      pegged at the crossfall as shown in Table 10.6 to slope towards the inner radius of the carriageway.</p>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
                  CDC 10.4.2.5.2 - Super-elevation (page 208)</a></p>
                </div>

                <div class="title" @click="collapse2()">
                  <div class="title-text">
                    <b class="tab2">11.3</b>Rotation of Pavement
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo2"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo2"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo2" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">11.3</b><b>Rotation of Pavement</b></p-->
                    <p>For rotation of pavement to attain super-elevation, the length required to develop the 
                      super-elevation shall satisfy the larger value obtained from the following two formulae:</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.5.3.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
                  CDC 10.4.2.5.3 - Super-elevation (page 208)</a></p>
                </div>

                <div class="title" @click="collapse3()">
                  <div class="title-text">
                    <b class="tab2">11.4</b>Effected Distance
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo3"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo3"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo3" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">11.4</b><b>Effected Distance</b></p-->
                    <p>Where transition curve is provided, super-elevation shall be effected along the l
                      ength of the curve. For simple circular curve, about two-third of the super-elevation 
                      development length shall be introduced on the tangent approach and one third on the curve.</p>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
                  CDC 10.4.2.5.4 - Super-elevation (page 208)</a></p>
                </div>

                <div class="title" @click="collapse4()">
                  <div class="title-text">
                    <b class="tab2">11.5</b>Percentage of Super-elevation
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo4"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo4"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo4" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">11.5</b><b>Percentage of Super-elevation</b></p-->
                    <p>The various percentages of super-elevation and the corresponding design speeds and radii are as shown in 
                    the Figure 10.6. </p>
                    <div class="img-container">
                        <img src="../assets/Figure10.6.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.5.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
                  CDC 10.4.2.5.5 - Super-elevation (page 208)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=230" target='_blank'>
                  CDC Figure 10.6 (page 230)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=229" target='_blank'>
                  CDC Figure 10.5 (page 229)</a></p>
                  </div>
                        
            </div>
          </td>
          </tr>
          <!--tr>
          <td scope="row"></td>
          </tr>
          <tr>
          <td scope="row">
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            <div class="grid-container">
              Reference from:
              <div class="grid-item inner-grid-container">
                <div class="grid-item">
                  <span id = "manuals"> Manuals </span>
                  <br>Civil Design Criteria (CDC)
                </div>   
                
                <div class="grid-item">
                  <span id = "chapter"> Chapter/ Section </span>
                  <br>CDC Chapter 10 / <br>Section 10.4.2.5
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207">CDC 10.4.2.5 (page 207)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208">CDC 10.4.2.5 (page 208)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=230">CDC Figure 10.6 (page 230)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=229">CDC Figure 10.5 (page 229)</a>
                  </div>   
              </div>
            </div>      
          </td>
          </tr-->
        </tbody>
      </table>
</template>

<script>
export default {
  data() {
    return {
    displayInfo: false,
    displayInfo1: false,
    displayInfo2: false,
    displayInfo3: false,
    displayInfo4: false,
    }
  },
  methods:{
      collapse: function() {
        this.displayInfo = !this.displayInfo;
    },
        collapse1: function() {
        this.displayInfo1 = !this.displayInfo1;
    },
    collapse2: function() {
        this.displayInfo2 = !this.displayInfo2;
    },
    collapse3: function() {
        this.displayInfo3 = !this.displayInfo3;
    },
    collapse4: function() {
        this.displayInfo4 = !this.displayInfo4;
    },
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
    height: 31vh;
}

.content{
  font-size:18px;
  margin: 2% 10%;
  text-align: justify;
  padding-bottom:5%;
}

.title {
  cursor: pointer;
  display: flex;
  margin-top: 3%;
  padding: 1% 0;
  font-weight: bold;
}
.title-text {
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 20px;
}

/*

.grid-container{
  margin: 5% 5% -8%;
  font-size:20px;
}

.grid-item {
    padding-top:1%;
    margin-bottom:10%;
    font-size:16px;
}

.grid-container .inner-grid-container {
	display: grid;
	grid-template-columns: auto auto auto;
	text-align: center;
}

#manuals{
  font-weight:bold;
}

#chapter{
  font-weight:bold;
}

#link{
  font-weight:bold;
}
*/
/*
.img-container{
    width: 80%;
    height: auto;
    margin-left: 3em; 
    /*margin-top: 5%;
    margin-bottom:3%;
}*/

.img-container2{
    width: 50%;
    height: auto;
    margin-left: 3em; 
    margin-top: 2%;
    margin-bottom:3%;
}

/* Resize images to standardise size */
.img-container2 img{
    width: 100%;
    height: auto;
}

/*
.img-container img{
    width: 100%;
    height: auto;
}*/

p {
  font-size:20px;
}
.tab1 {
 margin-right: 2.5em
}

.tab2 {
 margin-right: 1.7em
}

</style>
