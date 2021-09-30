<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">14 &nbsp; Horizontal Alignment</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">

                <div class="title" @click="collapse()">
                  <div class="title-text">
                    <b class="tab2">14.1</b>Horizontal Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">14.1</b><b>Horizontal Curve</b></p-->
                <p> The various types of horizontal curve used are as shown in Figure 10.4</p>
                    <div class="img-container">
                        <img src="../assets/Figure10.4.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205" target='_blank'>
                  CDC 10.4.2.3 - Horizontal Curve (page 205)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=228" target='_blank'>
                  CDC Figure 10.4 (page 228)</a></p>
                </div>

                <div class="title" @click="collapse1()">
                  <div class="title-text">
                    <b class="tab2">14.2</b>Simple Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo1"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo1"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo1" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">14.2</b><b>Simple Curve</b></p-->
                    <p>This is an arc of constant radius which achieves the desirable deflection without using a transition curve. 
                        This type of curve shall be used whenever possible.</p>
                  <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205" target='_blank'>
                  CDC 10.4.2.3.1 - Simple Curve (page 205)</a></p>
                </div>

                <div class="title" @click="collapse2()">
                  <div class="title-text">
                    <b class="tab2">14.3</b>Compound Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo2"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo2"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo2" style="font-size: 20px; margin-top: 1%;">


                <!--p style="padding-top:3%"><b class="tab2">14.3</b><b>Compound Curve</b></p-->
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
                  CDC 10.4.2.3.2 - Compound Curve (page 205)</a></p>
                </div>

                <div class="title" @click="collapse3()">
                  <div class="title-text">
                    <b class="tab2">14.4</b>Reverse Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo3"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo3"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo3" style="font-size: 20px; margin-top: 1%;">
                <!--p style="padding-top:3%"><b class="tab2">14.4</b><b>Reverse Curve</b></p-->
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
                  CDC 10.4.2.3.3 - Reverse Curve (page 206)</a></p>
                </div>

                <div class="title" @click="collapse4()">
                  <div class="title-text">
                    <b class="tab2">14.5</b>Broken-back Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo4"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo4"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo4" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">14.5</b><b>Broken-back Curve</b></p-->
                    <p>Broken-back curve consists of two curves with deflections in the same direction that is joined by a short tangent 
                        distance. In general, the use of broken-back curve is not favoured. Where it is necessary, the length of tangent 
                        in metre shall not be less than 3 times the design speed in km/h. Where such a minimum length of tangent cannot be obtained, 
                        the alignment shall be changed, either to increase the straight section, or eliminate it entirely by the use of a compound curve, 
                        or transition curve between the two curves.</p>
                  <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=206" target='_blank'>
                  CDC 10.4.2.3.4 - Broken-back Curve (page 206)</a></p>
                </div>

                <div class="title" @click="collapse5()">
                  <div class="title-text">
                    <b class="tab2">14.6</b>Transition Curve
                </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo5"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo5"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>


                <div class="information" v-show="displayInfo5" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">14.6</b><b>Transition Curve</b></p-->
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
                  CDC 10.4.2.3.5 - Transition Curve (page 206)</a></p>
                </div>

                <div class="title" @click="collapse6()">
                  <div class="title-text">
                    <b class="tab2">14.7</b>Main Carriageway
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo6"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo6"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo6" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%"><b class="tab2">14.7</b><b>Main Carriageway</b></p-->
                <p> The geometric design requirement of road shall be as follows: - </p>
                <div class="img-container">
                    <img src="../assets/Table10.2.png">
                </div>  
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=202" target='_blank'>
                  CDC 10.4.2.1.1 - Main Carriageway (page 202)</a></p>
                </div>


                <div class="title" @click="collapse7()">
                  <div class="title-text">
                    <b class="tab2">14.8</b>Pavement Markings For Sharp Curve
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo7"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo7"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo7" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%;"><b class="tab2">14.8</b><b>Pavement Markings For Sharp Curve</b></p-->
                    <div class="img-container">
                        <img src="../assets/SDRE-Chap8-RMS12.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=13" target="_blank">
                  SDRE Chapter 8 - 12 (page 13)</a></p>
                </div>

                <div class="title" @click="collapse8()">
                  <div class="title-text">
                    <b class="tab2">14.9</b>Curve Alignment Markers (CAM)
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo8"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo8"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo8" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%;"><b class="tab2">14.9</b><b>Curve Alignment Markers (CAM)</b></p-->
                    <div class="img-container">
                        <img src="../assets/SDRE-Chap8-RMS13.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=14" target="_blank">
                  SDRE Chapter 8 - 13 (page 14)</a></p>
                </div>

                <div class="title" @click="collapse9()">
                  <div class="title-text">
                    <b class="tab2">4.10</b>Horizontal Alignment
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo9"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo9"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo9" style="font-size: 20px; margin-top: 1%;">

                <!--p style="padding-top:3%;"><b class="tab2">14.10</b><b>Horizontal Alignment</b></p--> 
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
                  CDC Figure 10.1 (page 225)</a></p>
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
                  <br>CDC Chapter 10 / <br>10.4.1.1, <br> 10.4.2.1.1, <br>10.4.2.3
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=200">CDC 10.4.1.1 (page 200)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=225">CDC Figure 10.1 (page 225)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=202">CDC 10.4.2.1.1 (page 202)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205">CDC 10.4.2.3-10.4.2.3.2 (page 205)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=206">CDC 10.4.2.3.3-10.4.2.3.5 (page 206)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207">CDC 10.4.2.3.5 (page 207)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=229">CDC Figure 10.4 (page 228)</a>
                  <br>

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
    displayInfo5: false,
    displayInfo6: false,
    displayInfo7: false,
    displayInfo8: false,
    displayInfo9: false,
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
    collapse5: function() {
        this.displayInfo5 = !this.displayInfo5;
    },
    collapse6: function() {
        this.displayInfo6 = !this.displayInfo6;
    },
    collapse7: function() {
        this.displayInfo7 = !this.displayInfo7;
    },
    collapse8: function() {
        this.displayInfo8 = !this.displayInfo8;
    },
    collapse9: function() {
        this.displayInfo9 = !this.displayInfo9;
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
    margin-top: 3%;
    margin-bottom:3%;
}



/* Resize images to standardise size 
.img-container img{
    max-width: 100%;
    height: auto;
}*/

.img-container2 img{
    width: 100%;
    height: auto;
}

p {
  font-size:20px;
}
.tab1 {
 margin-right: 2.5em
}

.tab2 {
 margin-right: 1.7em
}

.tab3 {
  margin-right: 1em
}
</style>
