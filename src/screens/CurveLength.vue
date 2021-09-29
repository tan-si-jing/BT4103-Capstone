<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">13 &nbsp; Curve Length</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">

                <p style="padding-top:3%"><b class="tab2">13.1</b><b>Crest Curve</b></p>
                <p> The minimum length of a crest curve in metre shall be the greater of:</p>
                <p>a) 0.6 times of the design speed (in km/h); or </p>
                <p>b) curve length needed to provide the minimum stopping sight distance (refer to Figure 10.8) </p>
                <p>c) the desirable curve length can be derived from the following formulae: -</p>
                <p style="margin-left:3em"> Crest Vertical Curve for Stopping Sight Distance</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.3.2.1.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.8.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210" target="_blank">
                  CDC 10.4.3.2.1 - Crest Curve (page 210)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=232" target="_blank">
                  CDC Figure 10.8 (page 232)</a></p>

                
                <p style="padding-top:3%"><b class="tab2">13.2</b><b>Sag Curve</b></p>
                <p> The minimum length of a sag curve in metre shall be the greater of: - </p>
                <p>a) 0.6 times of the design speed (in km/h); or </p>
                <p>b) curve length needed to provide for riding comfort (refer to Figure 10.9); or </p>
                <p>c) curve length needed to provide headlight sight distance (refer to Figure 10.10) </p>
                <p>d) the desirable curve length can be derived from the following formulae: - </p>
                <p style="margin-left:3em"> Crest Vertical Curve for Stopping Sight Distance</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.3.2.2.png">
                    </div> 
                    <div class="img-container">
                        <img src="../assets/Figure10.9.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.10.png">
                    </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=211" target="_blank">
                  CDC 10.4.3.2.2 - Sag Curve (page 211)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=233" target="_blank">
                  CDC Figure 10.9 (page 233)</a>,
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=234" target="_blank">
                  CDC Figure 10.10 (page 234)</a></p>

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
                  <br>CDC Chapter 10 / <br>Section 10.4.3.2.1, <br>10.4.3.2.2
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210">CDC 10.4.3.2.1 (page 210)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=204">CDC 10.4.3.2.2 (page 211)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=232">CDC Figure 10.8 (page 232)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=233">CDC Figure 10.9 (page 233)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=234">CDC Figure 10.10 (page 234)</a>
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
    isActive1: false,
    isActive2: false,
    }
  },
  methods:{
      toggle1() {
        if (!this.isActive1) {
            this.isActive1 = true;
        } else {
            this.isActive1 = false;
        }
    },
    toggle2() {
        if (!this.isActive2) {
            this.isActive2 = true;
        } else {
            this.isActive2 = false;
        }
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

.img-container2{
    width: 50%;
    height: auto;
    margin-left: 3em; 
    margin-top: 3%;
    margin-bottom:3%;
}

/* Resize images to standardise size */
.img-container img{
    width: 100%;
    height: auto;
}

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
</style>
