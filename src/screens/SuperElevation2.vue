<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">10 &nbsp; Super-elevation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
                <p><b class="tab2">10.4.2.5</b><b>  Super-elevation</b></p>
                <p style="padding-top:3%"><b>10.4.2.5.1</b></p>
                <p> The desirable super-elevation can be derived from the following equation:</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.5.1.png">
                    </div>

                <p style="padding-top:3%"><b>10.4.2.5.2</b></p>
                    <p>In cases where the negative or positive super-elevation derived is lower than the desirable crossfall, the desirable super-elevation shall be 
                      pegged at the crossfall as shown in Table 10.6 to slope towards the inner radius of the carriageway.</p>

                <p style="padding-top:3%"><b>10.4.2.5.3</b></p>
                    <p>For rotation of pavement to attain super-elevation, the length required to develop the 
                      super-elevation shall satisfy the larger value obtained from the following two formulae:</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.5.3.png">
                    </div>

                <p style="padding-top:3%"><b>10.4.2.5.4</b></p>
                    <p>Where transition curve is provided, super-elevation shall be effected along the l
                      ength of the curve. For simple circular curve, about two-third of the super-elevation 
                      development length shall be introduced on the tangent approach and one third on the curve.</p>
                
                <p style="padding-top:3%"><b>10.4.2.5.5</b></p>
                    <p><b class="tab2">10.5.4.1</b> The various percentages of super-elevation and the corresponding design speeds and radii are as shown in 
                    the Figure 10.6. </p>
                    <div class="img-container">
                        <img src="../assets/Figure10.6.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.5.png">
                    </div>
                        
            </div>
          </td>
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </table>
</template>

<style scoped>
table {
    width: 70vw;
    height: 60vh;
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
}

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

.img-container{
    width: 600px;
    height: auto;
    margin-left: 5.8em; 
    margin-top: 5%;
    margin-bottom:10%;
}

.img-container2{
    width: 600px;
    height: auto;
    margin-left: 5.8em; 
    margin-top: 5%;
    margin-bottom:10%;
}

/* Resize images to standardise size */
.img-container2 img{
    max-width: 100%;
    width: 400px;
    height: auto;
}

.img-container img{
    max-width: 100%;
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
