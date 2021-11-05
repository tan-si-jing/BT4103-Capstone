<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td id="roadcselements" class="sectionHeader">&nbsp;&nbsp; 1 &nbsp; Road Cross-Sections and Elements
      <span class="title-icon" @click=levelCollapse()>
        <span v-if="!levelDisplay">Expand All &nbsp;<i class="bi bi-caret-down-fill"></i></span>  <!-- Expand all button -->
        <span v-if="levelDisplay">Collapse All &nbsp;<i class="bi bi-caret-up-fill"></i></span>  <!-- Collapse all button -->
      </span>
      </td>
      </tr>
    </thead>

    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="1.1" title="Sidetable, Drain, Footpath and Divider" :levelDisplay="levelDisplay">  <!-- Sub section 1.1 -->
        <!-- Display content of sub section 1.1 -->
        <ol type="a"> <!-- Ordered list -->
        <li> Sidetable for drain and landscaping shall be provided outside the shoulder of the expressway or the carriageway of 
          other categories of road. The services verge and landscaping shall be turfed and sloped as shown in the Standard 
          Details of Road Elements.</li>
        <li> For roads other than expressway or ramp and loop, unless otherwise specified, drain shall be slabbed over to be 
          used as footpath. Where raised kerb is provided along the edge of carriageway, UPVC pipe with drop inlet chamber at 
          6m interval shall be provided to drain the surface water to the roadside drain. In addition, at the low point of a 
          sag curve and at road junction, the spacing of the drop inlet chamber shall be at 3m interval for a distance of 30m 
          measured between the points 15m from either sides of the lowest point.</li>
        <li> Split level and open drain shall not be allowed at the divider.</li> 
        <li> Footpath shall be clear of any obstruction and footpath to adjoining properties shall be barrier-free in 
          accordance with Building and Construction Authority (BCA)’s Code of Accessibility.</li>
        <li> Footpath shall be higher than adjacent kerb as shown in the Standard Details of Road Elements. All footpaths 
          exposed to weather shall be designed with falls and gradient to discharge water to the drains.</li>
        </ol>
        <!-- References of sub section 1.1-->
        <p style="font-size: 16px;"> Referenced from: 
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=215" target='_blank'>
          CDC 10.5.6 - Sidetable, Train, Footpath and Divider (page 215)</a></p>
      </Collapsible>


      <Collapsible chapt="1.2" title="Typical Cross-Section" :levelDisplay="levelDisplay"> <!-- Sub section 1.2 -->
      <!-- Display content of sub section 1.2 -->
        <p>The details of the cross-section elements such as lane width, centre median width, paved shoulder, services verge, 
          footpath, drain and landscaping, etc. shall be in accordance with the Authority’s Drawings and the Standard Details 
          of Road Elements.</p>
        <!-- References of sub secton 1.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=212" target='_blank'>
          CDC 10.5.1 - General (page 212)</a>
        </p>

        <SubCollapsible chapt="1.2.1" title="Expressway" :levelDisplay="levelDisplay"> <!-- Sub-sub section 1.2.1 -->
        <!-- Display content of sub-sub section 1.2.1 -->
        <p style="padding-top:3%"><b class="tab3">1.2.1.1</b><b>Acceleration Lane at Expressway</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS6.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.1.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=7" target="_blank">
          SDRE Chapter 8 - 6 (page 7)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.2.1.2</b><b>Deceleration Lane at Expressway</b></p> 
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS7.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
          <!-- References of 1.2.1.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=8" target="_blank">
          SDRE Chapter 8 - 7 (page 8)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.2.1.3</b><b>Chevron Markings at Expressway</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS8.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
          <!-- References of 1.2.1.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=9" target="_blank">
          SDRE Chapter 8 - 8 (page 9)</a></p>
        </SubCollapsible>

        <SubCollapsible chapt="1.2.2" title="Intersections" :levelDisplay="levelDisplay"> <!-- Sub-sub section 1.2.2 -->
         <!-- Display content of sub-sub section 1.2.2 -->
        <p style="padding-top:3%"><b class="tab3">1.2.2.1</b><b>Without Cycling Path</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap8-RMS9.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-8_RMS_1-14-JULY_2020.pdf#page=10" target="_blank">
          SDRE Chapter 8 - 9 (page 10)</a></p>       

        <p style="padding-top:3%"><b class="tab3">1.2.2.2</b><b>With Cycling Path</b></p>
      
        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.1</b><b>Treatment at Major Junction</b></p>
          <div class="img-container">
              <ZoomImage imgSrc="SDRE-Chap21-CYC1.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=2" target="_blank">
          SDRE Chapter 21 - 1 (page 2)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.2</b><b>Treatment at Other Junctions</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC2.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=3" target="_blank">
          SDRE Chapter 21 - 2 (page 3)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.3</b><b>Treatment at Development/ Carpark Access (Sheet 1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC3.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=4" target="_blank">
          SDRE Chapter 21 - 3 (page 4)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.4</b><b>Treatment at Development/ Carpark Access (Sheet 2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC4.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.4 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=5" target="_blank">
          SDRE Chapter 21 - 4 (page 5)</a></p>
        
        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.5</b><b>Bicycle Crossing</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC5.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.5 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=6" target="_blank">
          SDRE Chapter 21 - 5 (page 6)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.6</b><b>Shared Track</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC6.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.6 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=7" target="_blank">
          SDRE Chapter 21 - 6 (page 7)</a></p>
        
        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.7</b><b>Treatment at Bus Stop With Bus Bay</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC7.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.7 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=8" target="_blank">
          SDRE Chapter 21 - 7 (page 8)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.8</b><b>Treatment at Bus Stop Without Bus Bay</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC8.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.8 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=9" target="_blank">
          SDRE Chapter 21 - 8 (page 9)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.9</b><b>Cycling Pavement Marking Details</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC9.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.9 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=10" target="_blank">
          SDRE Chapter 21 - 9 (page 10)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.10</b><b>Cycling Signs (Sheet 1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC10.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.10 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=11" target="_blank">
          SDRE Chapter 21 - 10 (page 11)</a></p>

        <p style="padding-top:3%; padding-bottom:1%;"><b class="tab4">1.2.2.2.11</b><b>Cycling Signs (Sheet 2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC11.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.11 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=12" target="_blank">
          SDRE Chapter 21 - 11 (page 12)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.2.2.2.12</b><b>Cycling Track Lighting</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap21-CYC12.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.2.2.2.12 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-21_CYC_1-12-JULY_2020.pdf#page=13" target="_blank">
          SDRE Chapter 21 - 12 (page 13)</a></p>
      </SubCollapsible>
      </Collapsible>

      <Collapsible chapt="1.3" title="Road Pavements" :levelDisplay="levelDisplay"> <!-- Sub section 1.3 -->
        <!-- Display content of sub section 1.3 -->
        <p style="padding-top:3%"><b class="tab2">1.3.1</b><b>Flexible Pavement, Recambering & Widening of Carriageway</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap1-PAV1.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.3.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=2" target="_blank">
          SDRE Chapter 1-1 (page 2)</a></p>

        <p style="padding-top:3%"><b class="tab2">1.3.2</b><b>Rigid Pavement (Sheet 1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap1-PAV2.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.3.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=3" target="_blank">
          SDRE Chapter 1 - 2 (page 3)</a></p>

        <p style="padding-top:3%"><b class="tab2">1.3.3</b><b>Rigid Pavement (Sheet 2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap1-PAV3.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.3.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=4" target="_blank">
          SDRE Chapter 1 - 3 (page 4)</a></p>
      </Collapsible>

      <Collapsible chapt="1.4" title="Service Verge" :levelDisplay="levelDisplay"> <!-- Sub section 1.4 -->
      <!-- Display content of sub section 1.4 -->
        <p style="padding-top:3%"><b class="tab2">1.4.1</b><b>Public Lighting</b></p> 
          <div class="img-container">
              <ZoomImage imgSrc="SDRE-Chap1-PAV4.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.4.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=5" target="_blank">
          SDRE Chapter 1 - 4 (page 5)</a></p>

        <p style="padding-top:3%"><b class="tab2">1.4.2</b><b>Traffic Light Cable</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap1-PAV5.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.4.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-1_PAV_1-5-JULY_2020.pdf#page=6" target="_blank">
          SDRE Chapter 1 - 5 (page 6)</a></p>
      </Collapsible>

      <Collapsible chapt="1.5" title="Drains & Culverts" :levelDisplay="levelDisplay"> <!-- Sub section 1.5 -->
      <!-- Display content of sub section 1.5 -->
      <SubCollapsible chapt="1.5.1" title="Types of Drains & Culverts" :levelDisplay="levelDisplay"> <!-- Sub-sub section 1.5.1 -->
      <!-- Display content of sub-sub section 1.5.1 -->
        <p style="padding-top:3%"><b class="tab3">1.5.1.1</b><b>Precast Concrete Channel and Drain</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA1.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=2" target="_blank">
          SDRE Chapter 2 - 1 (page 2)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.2</b><b>Cast-In-Situ Box Culvert</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA2.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=3" target="_blank">
          SDRE Chapter 2 - 2 (page 3)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.3</b><b>Precast Concrete Pipe Culverts</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA3.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=4" target="_blank">
          SDRE Chapter 2 - 3 (page 4)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.4</b><b>Precast Open U-Drain</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA4.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.4 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=5" target="_blank">
          SDRE Chapter 2 - 4 (page 5)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.5</b><b>Precast Slabbed Over U-Drain</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA5.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.5 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=6" target="_blank">
          SDRE Chapter 2 - 5 (page 6)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.6</b><b>Precast Concrete Drop-Inlet Chamber</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA6.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.6 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=7" target="_blank">
          SDRE Chapter 2 - 6 (page 7)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.7</b><b>Sub-Soil Drain and Sump Along Expressway</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA7.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.7 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=8" target="_blank">
          SDRE Chapter 2 - 7 (page 8)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.5.1.8</b><b>Sub-Soil Drain and Sump Along Major Arterial</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap2-DRA8.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.1.8 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-2_DRA_1-8-JULY_2020.pdf#page=9" target="_blank">
          SDRE Chapter 2 - 8 (page 9)</a></p>
      </SubCollapsible>

       <SubCollapsible chapt="1.5.2" title="Types of Gratings & Manhole Covers" :levelDisplay="levelDisplay"> <!-- Sub-sub section 1.5.2 -->
       <!-- Display content of Sub-sub section 1.5.2 -->
        <SubCollapsible chapt="1.5.2.1" title="Pedestrain Grating" :levelDisplay="levelDisplay"> <!-- Sub-sub-sub section 1.5.2.1 -->
        <!-- Display content of Sub-sub-sub section 1.5.2.1 -->
        <p style="padding-top:3%"><b class="tab4">1.5.2.1.1</b><b>Pedestrian Grating for Sump / Drain - Without Mild Steel Plate</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA1.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.1.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=2" target="_blank">
          SDRE Chapter 4-1 (page 2)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.1.2</b><b>Pedestrian Concrete In-Fill Grating For Sump / Drain</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA2.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
         <!-- References of 1.5.2.1.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=3" target="_blank">
          SDRE Chapter 4 - 2 (page 3)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.1.3</b><b>Frame For Pedestrian Grating</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA3.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
         <!-- References of 1.5.2.1.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=4" target="_blank">
          SDRE Chapter 4 - 3 (page 4)</a></p>
        </SubCollapsible>

        <SubCollapsible chapt="1.5.2.2" title="Vehicular Grating/ Manhole Cover" :levelDisplay="levelDisplay"> <!-- Sub-sub-sub section 1.5.2.2 -->
        <!-- Display content of sub-sub-sub section 1.5.2.2 -->
        <p style="padding-top:3%"><b class="tab4">1.5.2.2.1</b><b>Vehicular Grating for Manholes (Sheet 1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA4.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.2.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=5" target="_blank">
          SDRE Chapter 4 - 4 (page 5)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.2.2</b><b>Vehicular Grating for Manholes (Sheet 2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA5.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.2.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=6" target="_blank">
          SDRE Chapter 4 - 5 (page 6)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.2.3</b><b>Vehicular Grating for Drains (Sheet 1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA6.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.2.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=7" target="_blank">
          SDRE Chapter 4 - 6 (page 7)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.2.4</b><b>Vehicular Grating for Manholes (Sheet 2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA7.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.2.4 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=8" target="_blank">
          SDRE Chapter 4 - 7 (page 8)</a></p>

        <p style="padding-top:3%"><b class="tab4">1.5.2.2.5</b><b>Manhole Cover and Frame</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap4-GRA8.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.2.5 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=9" target="_blank">
          SDRE Chapter 4 - 8 (page 9)</a></p>
        </SubCollapsible>

        <SubCollapsible chapt="1.5.2.3" title="Roadside Grating" :levelDisplay="levelDisplay">  <!-- Sub-sub-sub section 1.5.2.3 -->
        <!-- Display content of sub-sub-sub section 1.5.2.3 -->
        <p style="padding-top:3%"><b class="tab4">1.5.2.3.1</b><b>Roadside Manhole Grating</b></p>
          <div class="img-container">
              <ZoomImage imgSrc="SDRE-Chap4-GRA9.png"/> <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.5.2.3.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-4_GRA_1-9-JULY_2020.pdf#page=10" target="_blank">
          SDRE Chapter 4 - 9 (page 10)</a></p>
        </SubCollapsible>
        </SubCollapsible>
      </Collapsible>


      <Collapsible chapt="1.6" title="Kerbs and Footpaths" :levelDisplay="levelDisplay"> <!-- Sub section 1.6 -->
      <!-- Display content of sub section 1.6 -->
      <SubCollapsible chapt="1.6.1" title="Kerbs" :levelDisplay="levelDisplay">  <!-- Sub-sub section 1.6.1 -->
      <!-- Display content of sub-sub section 1.6.1 -->
        <p style="padding-top:3%"><b class="tab3">1.6.1.1</b><b>Kerbs</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER1.png"/> <!-- Display zoomed image of SDRE figure -->
          </div> 
        <!-- References of 1.6.1.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=2" target="_blank">
          SDRE Chapter 3 - 1 (page 2)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.1.2</b><b>Kerbs Painting (1 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER2.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.1.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=3" target="_blank">
          SDRE Chapter 3 - 2 (page 3)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.1.3</b><b>Kerbs Painting (2 of 2)</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER3.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.1.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=4" target="_blank">
          SDRE Chapter 3 - 3 (page 4)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.1.4</b><b>Civic District Kerb - Type C1, C2, C3 & C4</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER4.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.1.4 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=5" target="_blank">
          SDRE Chapter 3 - 4 (page 5)</a></p>
        
        <p style="padding-top:3%"><b class="tab3">1.6.1.5</b><b>Kerb With Slot Holes</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER13.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.1.5 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=14" target="_blank">
          SDRE Chapter 3 - 13 (page 14)</a></p>
      </SubCollapsible>

      <SubCollapsible chapt="1.6.2" title="Footpath Ramp" :levelDisplay="levelDisplay">  <!-- Sub-sub section 1.6.2 -->
      <!-- Display content of sub-sub section 1.6.1 -->
        <p style="padding-top:3%"><b class="tab3">1.6.2.1</b><b>Type 1 Pedestrian Crossing Points</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER5.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=6" target="_blank">
          SDRE Chapter 3 - 5 (page 6)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.2</b><b>Type 2 Pedestrian Crossing Points</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER6.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.2 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=7" target="_blank">
          SDRE Chapter 3 - 6 (page 7)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.3</b><b>Traffic Island</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER7.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.3 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=8" target="_blank">
          SDRE Chapter 3 - 7 (page 8)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.4</b><b>Side Road</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER8.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.4 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=9" target="_blank">
          SDRE Chapter 3 - 8 (page 9)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.5</b><b>Driveway</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER9.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.5 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=10" target="_blank">
          SDRE Chapter 3 - 9 (page 10)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.6</b><b>Footpath Beside Open Drain</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER10.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.6 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=11" target="_blank">
          SDRE Chapter 3 - 10 (page 11)</a></p>

        <p style="padding-top:3%"><b class="tab3">1.6.2.7</b><b>Cast-In-Situ Concrete Pavement</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER11.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.2.7 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=12" target="_blank">
          SDRE Chapter 3 - 11 (page 12)</a></p>
      </SubCollapsible>
      
      <SubCollapsible chapt="1.6.3" title="Tactile Tiles" :levelDisplay="levelDisplay">  <!-- Sub-sub section 1.6.1 -->
      <!-- Display content of sub-sub section 1.6.3 -->
        <p style="padding-top:3%"><b class="tab3">1.6.3.1</b><b>Homogeneous Tactile Tiles and Arrangement of Tactile Tiles</b></p>
          <div class="img-container">
            <ZoomImage imgSrc="SDRE-Chap3-KER12.png"/>  <!-- Display zoomed image of SDRE figure -->
          </div>
        <!-- References of 1.6.3.1 -->
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/Street_Work_Proposals/Standards_and_Specifications/SDRE/SDRE14-3_KER_1-13-JULY_2020.pdf#page=13" target="_blank">
          SDRE Chapter 3 - 12 (page 13)</a></p>
      </SubCollapsible>
      </Collapsible>
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
/** Collapsible to expand and collapse the sub-sections */
import Collapsible from '../components/Collapsible.vue';
/** SubCollapsible to expand and collapse the Sub-sub sections */
import SubCollapsible from '../components/SubCollapsible.vue';
/** ZoomImage to zoom onto the image */
import ZoomImage from '../components/ZoomImage.vue'

export default {
  components: {
    Collapsible,
    SubCollapsible,
    ZoomImage
  },
  data() {
    return {
      levelDisplay: false
    }
  },
  methods: {
    /** to expand to collapse all in the Section */
    levelCollapse: function() {
      this.levelDisplay = !this.levelDisplay;
    },
  }
}
</script>

<style scoped>
.sectionHeader {
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
}
table {
  width: 65vw;
  height: auto;
  margin-top: 5vh;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}
.table thead td {
  background-color: #273B8C;
  color: white;
  height: 7.25vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size:22px;
  vertical-align: middle;
}
tbody tr{
  background-color: #ffffff;
}
tbody tr:last-child td{ 
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px; 
  padding-bottom:2%;
}
.title-icon {
  font-size:0.95rem;
  color:lavender;
  cursor:pointer;
  padding: 0 1rem 0 1.5rem;
  border-left: inset;
  border-color: lightblue
}
li {
  padding-left:0.5rem;
  margin: 10px 0
}
</style>
