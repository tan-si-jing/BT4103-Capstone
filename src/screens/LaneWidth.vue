<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">8 &nbsp; Lane Width</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
                <p style="padding-top:3%"><b class="tab2">8.1</b><b>Main Carriageway</b></p>
                    <p>The typical lane width for a major road is 3.2m and the absolute minimum shall be 3m if there are constraints. 
                        In addition,</p>
                    <p>a) For lane adjacent to kerb, an additional width of 0.3m shall be provided.</p>
                    <p>b) (a) is not applicable if shoulder width indicated in Clause 10.5.4 are provided.</p>
                    <p>c) Consideration shall also be given to widen the lane further for swept path and other safety requirements on 
                        sharp horizontal curve.</p>
                    <p>The recommended desirable lane width shall be as shown in Table 10.12.</p>
                    <p>Notes:</p>
                    <p>1 Typical lane width for an expressway is 3.5m.</p>
                    <p>2 Actual lane width to be determined in consultation with Land Transport Authority</p>
                    <div class="img-container">
                        <img src="../assets/Table10-12.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
                  CDC 10.5.2.1 - Main Carriageway (page 212)</a></p>

                 <p style="padding-top:3%"><b class="tab2">8.2</b><b>Road Signs & Markings At Intersections</b></p>
                    <div class="img-container">
                        <img src="../assets/SDRE-Chap8-RMS9.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=10" target="_blank">
                  SDRE Chapter 8 - 9 (page 10)</a></p>

                <p style="padding-top:3%"><b class="tab2">8.3</b><b>Ramp or Loop</b></p>
                    <p>The minimum lane width for ramp or loop is 3.7m per lane. The total width of the ramp or loop shall include the 
                        paved shoulder width specified in Clause 10.5.4. However, consideration shall be given to widen the lane width 
                        for the swept path of a heavy vehicle (refer to Figure 10.1).</p>
                    <div class="img-container">
                        <img src="../assets/Figure10-1.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=213" target='_blank'>
                  CDC 10.5.2.2 - Ramp or Loop (page 213)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=225" target='_blank'>
                  CDC Figure 10.1 (page 225)</a></p>

                <p style="padding-top:3%"><b class="tab2">8.4</b><b>Typical Acceleration Lane At Expressway</b></p>
                    <div class="img-container">
                        <img src="../assets/SDRE-Chap8-RMS6.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 8 - 6 (page 7)</a></p>

                <p style="padding-top:3%"><b class="tab2">8.5</b><b>Typical Deceleration Lane At Expressway</b></p>
                    <div class="img-container">
                        <img src="../assets/SDRE-Chap8-RMS7.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 8 - 7 (page 8)</a></p>

                <p v-show="isSlip" style="padding-top:3%"><b>8.6</b></p>
                    <p v-show="isSlip">For industrial area and slip road leading in/out of industrial area as shown in Urban Redevelopment Authority 
                        (URA) Conceptual Land Use Plan (refer to URA’s website), the slip road width shall be increased to cater for 
                        the swept path of a heavy vehicle (refer to Figure 10.1). The design requirements for various radii of slip
                        roads are shown in Table 10.13:</p>
                    <div v-show="isSlip" class="img-container3">
                        <img v-show="isSlip" src="../assets/Table10-13.png">
                    </div>
                    <a v-show="isSlip" >Notes:</a>
                    <p v-show="isSlip"> Additional 0.3m lane width shall be added next to parapet/ barrier</p>
                <p v-show="isSlip" style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212">
                  CDC 10.5.2.4.3 (page 214)</a></p>
                    <div v-show="isSlip" class="img-container">
                        <img src="../assets/Table10-13.png">
                    </div>
                    Notes:
                    <p v-show="isSlip">Additional 0.3m lane width shall be added next to parapet/ barrier</p>
                <p v-show="isSlip" style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
                  CDC 10.5.2.4.3 - Slip Road (page 214)</a></p>

                <p style="padding-top:3%"><b class="tab2">8.7</b><b>Turning Lane</b></p>
                    <p>The turning lane at the intersection is to provide storage space for turning vehicle so as not to impede the main 
                        traffic flow (refer to Figure 10.11). The desirable minimum width of the turning lane shall be 3.5m and absolute 
                        minimum width shall be 3m. The turning lane shall be 70m long or sufficiently long to store the likely number of 
                        vehicles at any interval waiting to complete the turn, whichever is greater. A minimum of 30m taper is required for 
                        the transition. </p>
                    <p>To accommodate traffic lights, the desirable minimum and absolute minimum width of the centre divider at a junction 
                        separating the right turning lane from the opposing traffic flow shall be 1.3m and 1.0m respectively.</p>
                    <div class="img-container">
                        <img src="../assets/Figure10-11.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=213" target='_blank'>
                  CDC 10.5.2.3 - Turning Lane (page 213)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=235" target='_blank'>
                  CDC Figure 10.11 (page 235)</a></p>
                
                <p style="padding-top:3%"><b class="tab1">8.8</b><b>Paved Shoulder </b></p>
                    <p>The width of the paved shoulder shall be as shown in Table 10.14. </p>
                    <p>Notes:</p>
                    <p>1 1.0m in tunnel</p>
                    <p>2 Only applicable to viaduct, tunnel and associated depressed road. Paved shoulder is not required on flyover, underpass 
                        and associated depressed road.</p>
                    <div class="img-container">
                        <img src="../assets/Table10-14.png">
                    </div>

                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215" target='_blank'>
                  CDC 10.5.4.1 (page 215)</a></p>
                        
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
                  <br>CDC Chapter 10 / <br>Section 10.5.2.1, <br>10.5.2.2, <br>10.5.2.4.3, <br>10.5.2.3, <br>10.5.4.1
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212">CDC 10.5.2.1 (page 212)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=213">CDC 10.5.2.2, 10.5.2.3 (page 213)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=214">CDC 10.5.2.4.3 (page 214)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215">CDC 10.5.4.1 (page 215)</a>
                   <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=235">CDC Figure 10.1 (page 235)</a>
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
    name:'LaneWidth',
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
        isSlip: this.$parent.choice.roadType === 'slipRoad' ? true : false
      }
    },
    methods:{
      openStorage(){
        return JSON.parse(localStorage.getItem('choice'))
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

.img-container{
    width: 80%;
    height: auto;
    margin-left: 3em; 
    /*margin-top: 5%;
    margin-bottom:3%;*/
}


/* Resize images to standardise size */
.img-container img{
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

</style>

