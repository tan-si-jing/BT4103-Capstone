<template>
      <table class="table table-borderless">
        <thead class="table">
          <tr>
          <td scope="header">1 &nbsp; Location where VIG to be provided</td>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td scope="row">
            <div class="content">
              Insert Content
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
                  <br>insert manuals
                </div>   
                
                <div class="grid-item">
                  <span id = "chapter"> Chapter/ Section </span>
                  <br>insert chapter/section
                </div>   
                
                <div class="grid-item">
                  <span id = "link">Link to Chapter/ Section</span>
                  <br>insert link
                </div>   
              </div>
            </div>      
          </td>
          </tr>
        </tbody>
      </table>
</template>

<style>
table {
  width: 70vw;
  height: 60vh;
  margin-top: 10vh;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
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
}

.content{
  font-size:20px;
  margin: 2% 10%;
}

.grid-container{
  margin:5% 5% -8%;
  font-size:20px;
}

.grid-item {
	padding: 10px;
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
</style>

