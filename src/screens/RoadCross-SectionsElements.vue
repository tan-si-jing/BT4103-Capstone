<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">1 &nbsp; Road Cross-Sections and Elements</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
              <p style="padding-top:3%"><b class="tab2">1.1</b><b>General</b></p>
                <p>The details of the cross-section elements such as lane width, centre median width, paved shoulder, services verge, 
                    footpath, drain and landscaping, etc. shall be in accordance with the Authority’s Drawings and the Standard Details 
                    of Road Elements.</p>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
                  CDC 10.5.1 - General (page 212)</a></p>
                
              <p style="padding-top:3%"><b class="tab2">1.2</b><b>Sidetable, Drain, Footpath and Divider</b></p>
                <p>a) Sidetable for drain and landscaping shall be provided outside the shoulder of the expressway or the carriageway of 
                    other categories of road. The services verge and landscaping shall be turfed and sloped as shown in the Standard 
                    Details of Road Elements.</p>
                <p>b) For roads other than expressway or ramp and loop, unless otherwise specified, drain shall be slabbed over to be 
                    used as footpath. Where raised kerb is provided along the edge of carriageway, UPVC pipe with drop inlet chamber at 
                    6m interval shall be provided to drain the surface water to the roadside drain. In addition, at the low point of a 
                    sag curve and at road junction, the spacing of the drop inlet chamber shall be at 3m interval for a distance of 30m 
                    measured between the points 15m from either sides of the lowest point.</p>
                <p>c) Split level and open drain shall not be allowed at the divider.</p>  
                <p>d) Footpath shall be clear of any obstruction and footpath to adjoining properties shall be barrier-free in 
                    accordance with Building and Construction Authority (BCA)’s Code of Accessibility.</p>  
                <p>e) Footpath shall be higher than adjacent kerb as shown in the Standard Details of Road Elements. All footpaths 
                    exposed to weather shall be designed with falls and gradient to discharge water to the drains.</p>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215" target='_blank'>
                  CDC 10.5.6 - Sidetable, Train, Footpath and Divider (page 215)</a></p>
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
                  <br>Standard Details of Road Elements (SDRE)
                </div>   
                
                <div class="grid-item">
                  <span id = "chapter"> Chapter/ Section </span>
                  <br>CDC Chapter 10 / <br>Section 10.5
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                   <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212">CDC 10.5, 10.5.1 (page 212)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215">CDC 10.5.6 (page 215)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=216">CDC 10.5.6 (page 216)</a>
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
    height: 26vh;
    padding-bottom:5%;
}

.content{
  font-size:18px;
  margin: 2% 10%;
  text-align: justify;
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

p{
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

