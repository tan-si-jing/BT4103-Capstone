<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">4 &nbsp; Side Friction Factor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
                <div class="title" @click="collapse()">
                  <div class="title-text">
                    <b class="tab2">4.1</b>
                  </div>
                  <div class="title-icon">
                    <span v-if="!displayInfo"><font-awesome-icon icon="angle-down" id="arrow"/></span>
                    <span v-if="displayInfo"><font-awesome-icon icon="angle-up" id="arrow"/></span>
                  </div>
                </div>

                <div class="information" v-show="displayInfo" style="font-size: 20px; margin-top: 1%;">

              <!--p style="padding-top:3%"><b class="tab2">4.1</b><b>Side Friction Factor given Design Speed</b></p-->
                <div class="img-container">
                    <img src="../assets/Table10-7.png">
                </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
                  CDC 10.4.2.5.1 - Side Friction Factor given Design Speed (page 208)</a></p>               
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
                  <br>CDC Chapter 10 / <br>Section 10.4.2.5.1
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=207">CDC 10.4.2.5.1 (page 207)</a>
                   <br>
                   <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208">CDC Table 10.7 (page 208)</a>
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
    displayInfo: false
    }
  },
  methods:{
      collapse: function() {
        this.displayInfo = !this.displayInfo;
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
    height: 23vh;
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
}


/* Resize images to standardise size 
.img-container img{
    width: 100%;
    height: auto;
}
*/
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
