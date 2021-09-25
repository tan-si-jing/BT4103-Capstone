<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">2 &nbsp; Grade</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
              <p><b class="tab1">10.4.3</b><b >Vertical Alignment</b></p>
              <p style="padding-top:2%"><b class="tab3">10.4.3.1.1</b><b>Main Carriageway</b></p>
                <p>The geometric design requirements of road shall be as shown in Table 10.9</p>
                <div class="img-container">
                    <img src="../assets/Table10-9.png">
                </div>
                <br>
                <br>
                Notes:
                <p>1) Minimum gradient for all roads is 0.4%.</p>
                <p>2) A road gradient of less than 0.4% may be used for widening of expressway.</p>
                <p>3) For tunnel, minimum road gradient of 0.2% may be used.</p>
                <p>4) For built-up area, a road gradient of less than 0.4% may be used to tie in with existing access.</p>

              <p style="padding-top:3%"><b class="tab3">10.4.3.1.2</b><b>Interchange Ramp/Loop and Slip Road</b></p>
                <div class="img-container">
                    <img src="../assets/Table10-10.png">
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
    width: 500px;
    height: 150px;
    margin-left: 5.8em; 
    margin-top: 5%;
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
</style>
