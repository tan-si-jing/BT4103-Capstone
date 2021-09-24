<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">11 &nbsp; Sight Distance</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
                <p><b class="tab2">10.4.2.2</b><b>Sight Distance</b></p>

                <p style="padding-top:3%"><b class="tab3">10.4.2.2.1</b><b>Stopping Sight Distance</b></p>
                <p> The minimum stopping sight distance for various road gradient shall be determined by the following formula:</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.2.1.png">
                    </div>

                <p style="padding-top:3%"><b class="tab3">10.4.2.2.2</b><b>Intermediate Sight Distance</b></p>
                    <p>a) Intermediate sight distance is equal to 2 times stopping sight distance. </p>
                    <p>b) Intermediate sight distance is only applicable to undivided 2-lane road. </p>
                    <p>c) Where intermediate sight distance is unachievable because of site constraint, 
                    the stopping sight distance shall be used and the appropriate control measures to 
                    prohibit overtaking shall be introduced.</p>

                <p style="padding-top:3%"><b class="tab3">10.4.2.2.3</b><b>Overtaking Sight Distance</b></p>
                    <p>The following sight distances are to be considered in the design. If overtaking sight distance 
                        for an undivided road cannot be achieved, the intermediate sight distance shall be adopted.</p>
                    <div class="img-container3">
                        <img src="../assets/Table10.5.png">
                    </div>
                    <p>Note: Overtaking sight distance is only applicable to undivided 2-lane road.</p><br>

                <p style="padding-top:3%"><b class="tab3">10.4.2.2.4</b><b>Intersection Sight Distance</b></p>
                    <p>The desirable intersection sight distance at unsignalised junction can be derived 
                        from the following formula and to be read in conjunction with Figure 10.2.</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.2.4.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.2.png">
                    </div>
                
                <p style="padding-top:3%"><b class="tab3">10.4.2.2.5</b><b>Sight Distance on Horizontal Curve</b></p>
                    <p>On a horizontal curve where the obstruction on the inside of the curve cannot be removed, 
                        offset distance to the obstruction shall be provided. 
                        The offset distance can be derived from the following formula and shall be read in conjunction with Figure 10.3.</p>
                    <div class="img-container2">
                        <img src="../assets/10.4.2.2.5.png">
                    </div>
                    <div class="img-container">
                        <img src="../assets/Figure10.3.png">
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
                  <br>CDC Chapter 10 / <br>Section 10.4.2.2
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=203">CDC 10.4.2.2-10.4.2.2.2 (page 203)</a>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=204">CDC 10.4.2.3-10.4.2.2.4 (page 204)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=205">CDC 10.4.2.5 (page 205)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=229">CDC Figure 10.2 (page 226)</a>
                  <br>
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=227">CDC Figure 10.3 (page 227)</a>
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

.img-container3{
    width: 600px;
    height: auto;
    margin-left: 5.8em; 
    margin-top: 5%;
    margin-bottom:5%;
}

/* Resize images to standardise size */
.img-container img{
    max-width: 100%;
    height: auto;
}

.img-container2 img{
    max-width: 100%;
    width: 400px;
    height: auto;
}

.img-container3 img{
    max-width: 100%;
    width: 500px;
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
