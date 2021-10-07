<template>
  <div class="wrapper">
    <p class="header">Specific Results Page</p>
    <br>
    <br>
    <div class="container">    
      <div id = "entire-content">
        <div id = "buttons">
            <p>Currently Viewing : </p>
            <br>
            <div class="action_btn">
                <button id='current_btn'>Road Cross Section Elements</button>
            </div>
        </div>
        <div id = "specific-results">
          <table>
            <tbody>
              <tr class="expand">
              <span @click=levelCollapse() style="cursor:pointer;">
                <span v-if="!levelDisplay"><u>Expand All</u> &nbsp;<i class="bi bi-caret-down-fill"></i></span>
                <span v-if="levelDisplay"><u>Collapse All</u> &nbsp;&nbsp;<i class="bi bi-caret-up-fill"></i></span>
              </span>
              </tr>
              <tr>
              <td scope="row">
              <Collapsible chapt="1.1" title="General" :levelDisplay="levelDisplay">
                <p>The details of the cross-section elements such as lane width, centre median width, paved shoulder, services verge, 
                  footpath, drain and landscaping, etc. shall be in accordance with the Authority’s Drawings and the Standard Details 
                  of Road Elements.</p>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
                  CDC 10.5.1 - General (page 212)</a>
                </p>
              </Collapsible>

              <Collapsible chapt="1.2" title="Lane Width" :levelDisplay="levelDisplay">
                <p style="padding-top:3%"><b class="tab3">1.2.1</b><b>Lane Width Without Cycling Path</b></p>
                  
                <p style="padding-top:3%"><b class="tab4">1.2.1.1</b><b>Typical Acceleration Lane At Expressway</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap8-RMS6.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 8 - 6 (page 7)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.2.1.2</b><b>Typical Deceleration Lane At Expressway</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap8-RMS7.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 8 - 7 (page 8)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.2.1.3</b><b>Chevron Markings</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap8-RMS8.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=9" target="_blank">
                  SDRE Chapter 8 - 8 (page 9)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.2.1.4</b><b>Road Signs & Markings At Intersections</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap8-RMS9.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=10" target="_blank">
                  SDRE Chapter 8 - 9 (page 10)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.2.1.5</b><b>Bus Lane Markings</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap8-RMS10.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=11" target="_blank">
                  SDRE Chapter 8 - 10 (page 11)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.2.2</b><b>Lane Width With Cycling Path</b></p>
              
                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab3">1.2.2.7</b><b>Treatment at Bus Stop With Bus Bay</b></p>
                  <div class="img-container">
                      <img src="../assets/SDRE-Chap21-CYC1.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=2" target="_blank">
                  SDRE Chapter 21 - 1 (page 2)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2</b><b>Treatment at Other Junctions</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC2.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=3" target="_blank">
                  SDRE Chapter 21 - 2 (page 3)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.3</b><b>Treatment at Development/ Carpark Access (Sheet 1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC3.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=4" target="_blank">
                  SDRE Chapter 21 - 3 (page 4)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.4</b><b>Treatment at Development/ Carpark Access (Sheet 2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC4.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=5" target="_blank">
                  SDRE Chapter 21 - 4 (page 5)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.5</b><b>Bicycle Crossing</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC5.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=6" target="_blank">
                  SDRE Chapter 21 - 5 (page 6)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.6</b><b>Shared Track</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC6.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 21 - 6 (page 7)</a></p>
                
                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.7</b><b>Treatment at Bus Stop With Bus Bay</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC7.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 21 - 7 (page 8)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.8</b><b>Treatment at Bus Stop Without Bus Bay</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC8.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=9" target="_blank">
                  SDRE Chapter 21 - 8 (page 9)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.9</b><b>Cycling Pavement Marking Details</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC9.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=10" target="_blank">
                  SDRE Chapter 21 - 9 (page 10)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.10</b><b>Cycling Signs (Sheet 1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC10.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=11" target="_blank">
                  SDRE Chapter 21 - 10 (page 11)</a></p>

                <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.11</b><b>Cycling Signs (Sheet 2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC11.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=12" target="_blank">
                  SDRE Chapter 21 - 11 (page 12)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.2.2.12</b><b>Cycling Track Lighting</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap21-CYC12.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=13" target="_blank">
                  SDRE Chapter 21 - 12 (page 13)</a></p>
              </Collapsible>

              <Collapsible chapt="1.3" title="Service Verge" :levelDisplay="levelDisplay">
                <p style="padding-top:3%"><b class="tab3">1.3.1</b><b>Pavement of Roads</b></p>

                <p style="padding-top:3%"><b class="tab4">1.3.1.1</b><b>Flexible Pavement, Recambering & Widening of Carriageway</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap1-PAV1.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=2" target="_blank">
                  SDRE Chapter 1-1 (page 2)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.1.2</b><b>Rigid Pavement (Sheet 1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap1-PAV2.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=3" target="_blank">
                  SDRE Chapter 1 - 2 (page 3)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.1.3</b><b>Rigid Pavement (Sheet 2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap1-PAV3.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=4" target="_blank">
                  SDRE Chapter 1 - 3 (page 4)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.1.4</b><b>Public Lighting</b></p>
                  <div class="img-container">
                      <img src="../assets/SDRE-Chap1-PAV4.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=5" target="_blank">
                  SDRE Chapter 1 - 4 (page 5)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.1.5</b><b>Traffic Light Cable</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap1-PAV5.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=6" target="_blank">
                  SDRE Chapter 1 - 5 (page 6)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.3.2</b><b>Gratings & Manhole Covers</b></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.1</b><b>Pedestrian Grating for Sump / Drain - Without Mild Steel Plate</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA1.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=2" target="_blank">
                  SDRE Chapter 4-1 (page 2)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.2</b><b>Pedestrian Concrete In-Fill Grating For Sump / Drain</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA2.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=3" target="_blank">
                  SDRE Chapter 4 - 2 (page 3)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.3</b><b>Frame For Pedestrian Grating</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA3.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=4" target="_blank">
                  SDRE Chapter 4 - 3 (page 4)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.4</b><b>Vehicular Grating for Manholes (Sheet 1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA4.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=5" target="_blank">
                  SDRE Chapter 4 - 4 (page 5)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.5</b><b>Vehicular Grating for Manholes (Sheet 2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA5.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=6" target="_blank">
                  SDRE Chapter 4 - 5 (page 6)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.6</b><b>Vehicular Grating for Drains (Sheet 1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA6.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 4 - 6 (page 7)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.7</b><b>Vehicular Grating for Manholes (Sheet 2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA7.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 4 - 7 (page 8)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.8</b><b>Manhole Cover and Frame</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap4-GRA8.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=9" target="_blank">
                  SDRE Chapter 4 - 8 (page 9)</a></p>

                <p style="padding-top:3%"><b class="tab4">1.3.2.9</b><b>Roadside Manhole Grating</b></p>
                  <div class="img-container">
                      <img src="../assets/SDRE-Chap4-GRA9.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=10" target="_blank">
                  SDRE Chapter 4 - 9 (page 10)</a></p>
              </Collapsible>

              <Collapsible chapt="1.4" title="Drains & Culverts" :levelDisplay="levelDisplay">
                <p style="padding-top:3%"><b class="tab3">1.4.1</b><b>Precast Concrete Channel and Drain</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA1.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=2" target="_blank">
                  SDRE Chapter 2 - 1 (page 2)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.2</b><b>Cast-In-Situ Box Culvert</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA2.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=3" target="_blank">
                  SDRE Chapter 2 - 2 (page 3)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.3</b><b>Precast Concrete Pipe Culverts</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA3.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=4" target="_blank">
                  SDRE Chapter 2 - 3 (page 4)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.4</b><b>Precast Open U-Drain</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA4.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=5" target="_blank">
                  SDRE Chapter 2 - 4 (page 5)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.5</b><b>Precast Slabbed Over U-Drain</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA5.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=6" target="_blank">
                  SDRE Chapter 2 - 5 (page 6)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.6</b><b>Precast Concrete Drop-Inlet Chamber</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA6.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 2 - 6 (page 7)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.7</b><b>Sub-Soil Drain and Sump Along Expressway</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA7.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 2 - 7 (page 8)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.4.8</b><b>Sub-Soil Drain and Sump Along Major Arterial</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap2-DRA8.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=9" target="_blank">
                  SDRE Chapter 2 - 8 (page 9)</a></p>
              </Collapsible>

              <Collapsible chapt="1.5" title="Sidetable, Drain, Footpath and Divider" :levelDisplay="levelDisplay">
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
              </Collapsible>

              <Collapsible chapt="1.6" title="Kerbs and Footpaths" :levelDisplay="levelDisplay">
                <p style="padding-top:3%"><b class="tab3">1.6.1</b><b>Kerbs</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER1.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=2" target="_blank">
                  SDRE Chapter 3 - 1 (page 2)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.2</b><b>Kerbs Painting (1 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER2.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=3" target="_blank">
                  SDRE Chapter 3 - 2 (page 3)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.3</b><b>Kerbs Painting (2 of 2)</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER3.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=4" target="_blank">
                  SDRE Chapter 3 - 3 (page 4)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.4</b><b>Civic District Kerb - Type C1, C2, C3 & C4</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER4.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=5" target="_blank">
                  SDRE Chapter 3 - 4 (page 5)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.5</b><b>Footpath Ramp - Type 1 Pedestrian Crossing Points</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER5.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=6" target="_blank">
                  SDRE Chapter 3 - 5 (page 6)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.6</b><b>Footpath Ramp - Type 2 Pedestrian Crossing Points</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER6.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=7" target="_blank">
                  SDRE Chapter 3 - 6 (page 7)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.7</b><b>Footpath Ramp - Traffic Island</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER7.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=8" target="_blank">
                  SDRE Chapter 3 - 7 (page 8)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.8</b><b>Footpath Ramp - Side Road</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER8.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=9" target="_blank">
                  SDRE Chapter 3 - 8 (page 9)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.9</b><b>Footpath Ramp - Driveway</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER9.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=10" target="_blank">
                  SDRE Chapter 3 - 9 (page 10)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.10</b><b>Footpath Ramp - Footpath Beside Open Drain</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER10.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=11" target="_blank">
                  SDRE Chapter 3 - 10 (page 11)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.5.11</b><b>Cast-In-Situ Concrete Pavement</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER11.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=12" target="_blank">
                  SDRE Chapter 3 - 11 (page 12)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.12</b><b>Homogeneous Tactile Tiles and Arrangement of Tactile Tiles</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER12.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=13" target="_blank">
                  SDRE Chapter 3 - 12 (page 13)</a></p>

                <p style="padding-top:3%"><b class="tab3">1.6.13</b><b>Kerb With Slot Holes</b></p>
                  <div class="img-container">
                    <img src="../assets/SDRE-Chap3-KER13.png">
                  </div>
                <p style="font-size: 16px;"> Referenced from:
                  <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=14" target="_blank">
                  SDRE Chapter 3 - 13 (page 14)</a></p>
              </Collapsible>
              </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    
    <button id="back" type="button" class="btn btn-outline-secondary" @click="goBack()">
      <i class="bi bi-arrow-left"></i>
    </button>

    </div>
    
    <div class="imageStack">
    <div id="bottomImg">
    <img :src="road" class="road" />
    </div>
    <div id="topImg">
    <img :src="mascot" class="mascot" />
    </div>
  </div>
  </div>

</template>

<script>
import Collapsible from '../components/Collapsible.vue';

export default {
  components: {
    Collapsible
  },
  data() {
    return {
      specific_param:"",
      road: require("../assets/road.png"),
      mascot: require("../assets/mascot.png"),
      levelDisplay: false
    } 
  },
  methods : {
    openStorage(){
      return JSON.parse(localStorage.getItem('choice'))
    },
    saveStorage(form){
      localStorage.setItem('choice',JSON.stringify(form))
    },
    goBack() {
      let storedChoice = this.openStorage();
      if (storedChoice.specific_param.length > 1) {
        storedChoice.specific_param.pop();
        this.saveStorage(storedChoice);
      } 
      this.$router.go(-1);
    },
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
.wrapper {
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.container {
  width: 80vw;
}

.header {
  font-size: 5vh;
  margin: 2% 60% 0% 0%;
  text-align:center
}

.imageStack{
  display: grid;
  position: relative;
}

/** road image */
.road {
  max-width: 100%;
  width:100vw;
  position: relative;
  bottom: 0;
  z-index: 1;
}
/** lta mascot */
.mascot {
  max-width: 15%;
  position: absolute;
  right: 4%;
  transform: rotateY(180deg);
  z-index: 2;
  bottom:30%
}

table {
  height: auto;
  padding: 40px;
  border-radius: 15px;
  z-index: 999;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}


#entire-content {
  display: flex;
  align-items: left;
  flex-direction: row;
}

#buttons {
  position:sticky;
  top: 30px;
  height: 20vh;
  width: 20%;
}

#specific-results {
  width: 100%;
  align-items: left;    
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 4% 10%;
  font-size:20px;
  margin-bottom:12%;
  justify-content:center;
}

#back {
  width:fit-content;
  height:fit-content;
  font-size: 1.5rem;
  box-shadow:none;
  border:none;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #273B8C;
}

ul {
  list-style-type: none;
  padding:0;
  margin:0;
}

.image {
  display: flex;
  justify-content:center;
  width:80%;
  margin-left: 3em; 
}

img {
    width: 100%;
}

#current_btn {
  pointer-events: none;
  cursor: not-allowed;
  background: gold;    
}

.action_btn {
  width: 100%;
  display: flex;
  margin-bottom:15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#manual{
  font-weight:bold;
  width: 100%;
  table-layout:fixed;
}
td {
    width: 15%;
    text-align: left;
}

#chapter{
  font-weight:bold;
}

#link{
  font-weight:bold;
}

.tab2 {
 margin-right: 1.7em
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
.tab3 {
  margin-right: 1em
}
.tab4 {
  margin-right:0.2em;
}
.expand {
  text-align: right;
  font-size: 1rem;
  color: navy;
}
</style>