<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">Page Two</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
              <p style="padding-top:3%"><b class="tab2">10</b><b>Lateral Clearance</b></p>
                <p class="tab4">10.1 Clear Lateral</p>
                <p class="tab4">10.2 Minimum Lateral Clearance</p>
                <p class="tab4">10.3 Directional Sign</p>
                

              <p style="padding-top:3%"><b class="tab2">11</b><b>Super-Elevation</b></p>
                <p class="tab4">11.1 Desirable Super-Elevation Formula</p>
                <p class="tab4">11.2 Negative or Positive Super-elevation</p>
                <p class="tab4">11.3 Rotation of Pavement</p>
                <p class="tab4">11.4 Effected Distance</p>
                <p class="tab4">11.5 Percentage of Super-elevation</p>

              <p style="padding-top:3%"><b class="tab2">12</b><b>Sight Distance</b></p>
                <p class="tab4">12.1 Stopping Sight Distance</p>
                <p class="tab4">12.2 Intermediate Sight Distance</p>
                <p class="tab4">12.3 Overtaking Sight Distance</p>
                <p class="tab4">12.4 Intersection Sight Distance</p>
                <p class="tab4">12.5 Sight Distance on Horizontal Curve</p>

              <p style="padding-top:3%"><b class="tab2">13</b><b>Curve Length</b></p>
                <p class="tab4">13.1 Crest Curve</p>
                <p class="tab4">13.2 Sag Curve</p>
                <p class="tab4">13.1 Crest Curve</p>

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
                  <br>CDC Chapter 10 / <br>Section 10.4.3
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                   <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=209">CDC 10.4.3.1.1 (page 209)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=210">CDC 10.4.3.1.2 (page 210)</a>
                </div>   
              </div>
            </div>      
          </td>
          </tr-->
        </tbody>
      </table>
</template>

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
    height: 23vh;
}

.content{
  font-size:18px;
  margin: 2% 10%;
  text-align: justify;
  padding-bottom:5%;
  /*max-width:70vw;*/
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
}*/

.img-container{
    max-width:80%;
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

.tab3 {
  margin-right: 1em
}

.tab4 {
    margin-left: 2em;
    font-size: 18px;
    font-weight: bold;
}

.tab5 {
    margin-left: 5em;
    font-size: 16px;
}
</style>
