<template>
  <div>
    <!-- button on dashboard -->
    <button class="exportBtn" v-on:click="open()">Extract</button>

    <!-- display for when the export button is clicked -->
    <div class="passwordBox" v-show="isOpened">
      <div class="content">

        <div class="inputExport">
          <!-- for user to enter password -->
          <input type="password" placeholder="Enter Password" v-model="password" v-on:keyup.enter="extract()">
          <!-- extract button -->
          <font-awesome-icon icon="download" class="downloadBtn" v-on:click="extract()" />
        </div>

        <!-- to display error message for when password is incorrect -->
        <p v-show="wrongPassword" style="color: #4c5257;">Wrong Password. Please Try Again.</p>

        <!-- close button -->
        <p class="pwBtn" v-on:click="open()">
          <font-awesome-icon icon="arrow-left" style="margin-right: 10px;"/> 
          Go Back
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import database from '../firebase.js'
import 'firebase/firestore';

export default {
  name: 'ExtractButton',
  data() {
    return {
      // actual password will be retrieved from firebase
      actualPassword: null,
      // passwordBox
      isOpened: false,
      password: null,
      wrongPassword: false,
      // data gathering
      docID: 'H1uwnxYevFozEeNv7SiY',
      // datetime of extraction
      ExtractedDate: null,
      numVisits: null,
      // num visits
      engineerSpecific: null,
      consultantSpecific: null,
      publicSpecific: null,
      engineerGuide: null,
      consultantGuide: null,
      publicGuide: null,
      // specific search - engineers
      engineersCombHVAlignment: null,
      engineersCornerRad: null,
      engineersCrossfall: null,
      engineersCurveLength: null,
      engineersGrade: null,
      engineersHAlignment: null,
      engineersLaneWidth: null,
      engineersLateralClearance: null,
      engineersLFF: null,
      engineersMergingAngle: null,
      engineersRCSE: null,
      engineersSFF: null,
      engineersSightDistance: null,
      engineersSigns: null,
      engineersSRTI: null,
      engineersSuperElevation: null,
      engineersVAlignment: null,
      // specific search - consultants
      consultantsCombHVAlignment: null,
      consultantsCornerRad: null,
      consultantsCrossfall: null,
      consultantsCurveLength: null,
      consultantsGrade: null,
      consultantsHAlignment: null,
      consultantsLaneWidth: null,
      consultantsLateralClearance: null,
      consultantsLFF: null,
      consultantsMergingAngle: null,
      consultantsRCSE: null,
      consultantsSFF: null,
      consultantsSightDistance: null,
      consultantsSigns: null,
      consultantsSRTI: null,
      consultantsSuperElevation: null,
      consultantsVAlignment: null,
      // specific search - public
      publicCombHVAlignment: null,
      publicCornerRad: null,
      publicCrossfall: null,
      publicCurveLength: null,
      publicGrade: null,
      publicHAlignment: null,
      publicLaneWidth: null,
      publicLateralClearance: null,
      publicLFF: null,
      publicMergingAngle: null,
      publicRCSE: null,
      publicSFF: null,
      publicSightDistance: null,
      publicSigns: null,
      publicSRTI: null,
      publicSuperElevation: null,
      publicVAlignment: null,
      // specific search - total
      CombHVAlignment: null,
      CornerRad: null,
      Crossfall: null,
      CurveLength: null,
      Grade: null,
      HAlignment: null,
      LaneWidth: null,
      LateralClearance: null,
      LFF: null,
      MergingAngle: null,
      RCSE: null,
      SFF: null,
      SightDistance: null,
      Signs: null,
      SRTI: null,
      SuperElevation: null,
      VAlignment: null,
      // road classification - engineer
      engineerExpressway: null,
      engineersemiExpressway: null,
      engineermajorArterial: null,
      engineerminorArterial: null,
      engineerprimaryAccess: null,
      engineerlocalAccess: null,
      // road classification - consultant
      consultantExpressway: null,
      consultantsemiExpressway: null,
      consultantmajorArterial: null,
      consultantminorArterial: null,
      consultantprimaryAccess: null,
      consultantlocalAccess: null,
      // road classification - public
      publicExpressway: null,
      publicsemiExpressway: null,
      publicmajorArterial: null,
      publicminorArterial: null,
      publicprimaryAccess: null,
      publiclocalAccess: null,
      // road classification - total
      Expressway: null,
      semiExpressway: null,
      majorArterial: null,
      minorArterial: null,
      primaryAccess: null,
      localAccess: null,
      // search parameters
      undividedRoad: null,
      slipRoad: null,
      dualRoad: null,
      speed40: null,
      speed50: null,
      speed60: null,
      speed70: null,
      speed80: null,
      speed90: null,
      changeJunctionYes: null,
      changeJunctionNo: null
    }
  },
  watch: {
    // to prevent scrolling when passwordBox is opened
    isOpened: function() {
      if (this.isOpened) {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function(){window.scrollTo(x, y);};
      } else {
        window.onscroll = function(){};
        this.wrongPassword = false;
      }
    }
  },
  methods: {
    // to control the popup display of extract button
    open() {
      this.isOpened = !this.isOpened;
      this.password = null;
    },
    // extract data if password entered is correct
    extract() {
      if (this.password == this.actualPassword) {
        this.getCSV();
        this.wrongPassword = false;
        this.isOpened = false; // close 
      } else {
        this.wrongPassword = true;
      }
      this.password = null;
    },
    // function to extract data and export to csv file
    getCSV() {
      // populate rows
      const rows = [
        ['DateTime Extracted', this.ExtractedDate],
        ['Total Number of Visits', this.numVisits],
        [],
        ['Search Option','Traffic Engineers','Consultants','General Public'],
        ['Specific', this.engineerSpecific, this.consultantSpecific, this.publicSpecific],
        ['Guide', this.engineerGuide, this.consultantGuide, this.publicGuide],
        [],
        ['Section','Traffic Engineers','Consultants','General Public', 'Total'],
        ['Combination of Horizontal & Vertical Alignment', this.engineersCombHVAlignment, this.consultantsCombHVAlignment, this.publicCombHVAlignment, this.CombHVAlignment],
        ['Corner Radius', this.engineersCornerRad, this.consultantsCornerRad, this.publicCornerRad, this.CornerRad],
        ['Crossfall', this.engineersCrossfall, this.consultantsCrossfall, this.publicCrossfall, this.Crossfall],
        ['Curve Length', this.engineersCurveLength, this.consultantsCurveLength, this.publicCurveLength, this.CurveLength],
        ['Grade', this.engineersGrade, this.consultantsGrade, this.publicGrade, this.Grade],
        ['Horizontal Alignment', this.engineersHAlignment, this.consultantsHAlignment, this.publicHAlignment, this.HAlignment],
        ['Lane Width', this.engineersLaneWidth, this.consultantsLaneWidth, this.publicLaneWidth, this.LaneWidth],
        ['Lateral Clearance', this.engineersLateralClearance, this.consultantsLateralClearance, this.publicLateralClearance, this.LateralClearance],
        ['Longitudinal Friction Factor', this.engineersLFF, this.consultantsLFF, this.publicLFF, this.LFF],
        ['Merging Angle', this.engineersMergingAngle, this.consultantsMergingAngle, this.publicMergingAngle, this.MergingAngle],
        ['Road Cross-Sections and Elements', this.engineersRCSE, this.consultantsRCSE, this.publicRCSE, this.RCSE],
        ['Side Friction Factor', this.engineersSFF, this.consultantsSFF, this.publicSFF, this.SFF],
        ['Sight Distance', this.engineersSightDistance, this.consultantsSightDistance, this.publicSightDistance, this.SightDistance],
        ['Signs', this.engineersSigns, this.consultantsSigns, this.publicSigns, this.Signs],
        ['Slip-road Traffic Island', this.engineersSRTI, this.consultantsSRTI, this.publicSRTI, this.SRTI],
        ['Super-Elevation', this.engineersSuperElevation, this.consultantsSuperElevation, this.publicSuperElevation, this.SuperElevation],
        ['Vertical Alignment', this.engineersVAlignment, this.consultantsVAlignment, this.publicVAlignment, this.VAlignment],
        [],
        ['Road Classification','Traffic Engineers','Consultants','General Public', 'Total'],
        ['Expressway', this.engineerExpressway, this.consultantExpressway, this.publicExpressway, this.Expressway],
        ['Semi Expressway', this.engineersemiExpressway, this.consultantsemiExpressway, this.publicsemiExpressway, this.semiExpressway],
        ['Major Arterial', this.engineermajorArterial, this.consultantmajorArterial, this.publicmajorArterial, this.majorArterial],
        ['Minor Arterial', this.engineerminorArterial, this.consultantminorArterial, this.publicminorArterial, this.minorArterial],
        ['Primary Access', this.engineerprimaryAccess, this.consultantprimaryAccess, this.publicprimaryAccess, this.primaryAccess],
        ['Local Access', this.engineerlocalAccess, this.consultantlocalAccess, this.publiclocalAccess, this.localAccess],
        [],
        ['Search Parameter', 'Total'],
        ['Undivided Road', this.undividedRoad],
        ['Slip Road', this.slipRoad],
        ['Dual Road', this.dualRoad],
        ['Speed 40', this.speed40],
        ['Speed 50', this.speed50],
        ['Speed 60', this.speed60],
        ['Speed 70', this.speed70],
        ['Speed 80', this.speed80],
        ['Speed 90', this.speed90],
        ['Change at Junction - Yes', this.changeJunctionYes],
        ['Change at Junction - No', this.changeJunctionNo],
      ];
      // export to csv
      let csvContent = "data:text/csv;charset=utf-8," 
        + rows.map(e => e.join(",")).join("\n");
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "search_data.csv");
      document.body.appendChild(link);
      link.click();
    },
    // get values from firebase
    getData() {
      database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                // password
                this.actualPassword = querySnapShot.data().password
                // overview
                this.numVisits = querySnapShot.data().numVisits || 0
                // num visits
                this.engineerSpecific = querySnapShot.data().engineerSpecific || 0
                this.consultantSpecific = querySnapShot.data().consultantSpecific || 0
                this.publicSpecific = querySnapShot.data().publicSpecific || 0
                this.engineerGuide = querySnapShot.data().engineerGuide || 0
                this.consultantGuide = querySnapShot.data().consultantGuide || 0
                this.publicGuide = querySnapShot.data().publicGuide || 0
                // specific search - engineers
                this.engineersCombHVAlignment = querySnapShot.data()[ 'engineer-Combination of Horizontal & Vertical Alignment' ] || 0
                this.engineersCornerRad = querySnapShot.data()[ 'engineer-Corner Radius' ] || 0
                this.engineersCrossfall = querySnapShot.data()[ 'engineer-Crossfall' ] || 0
                this.engineersCurveLength = querySnapShot.data()[ 'engineer-Curve Length' ] || 0
                this.engineersGrade = querySnapShot.data()[ 'engineer-Grade' ] || 0
                this.engineersHAlignment = querySnapShot.data()[ 'engineer-Horizontal Alignment' ] || 0
                this.engineersLaneWidth = querySnapShot.data()[ 'engineer-Lane Width' ] || 0
                this.engineersLateralClearance = querySnapShot.data()[ 'engineer-Lateral Clearance' ] || 0
                this.engineersLFF = querySnapShot.data()[ 'engineer-Longitudinal Friction Factor' ] || 0
                this.engineersMergingAngle = querySnapShot.data()[ 'engineer-Merging Angle' ] || 0
                this.engineersRCSE = querySnapShot.data()[ 'engineer-Road Cross-Sections and Elements' ] || 0
                this.engineersSFF = querySnapShot.data()[ 'engineer-Side Friction Factor' ] || 0
                this.engineersSightDistance = querySnapShot.data()[ 'engineer-Sight Distance' ] || 0
                this.engineersSigns = querySnapShot.data()[ 'engineer-Signs' ] || 0
                this.engineersSRTI = querySnapShot.data()[ 'engineer-Slip-road Traffic Island' ] || 0
                this.engineersSuperElevation = querySnapShot.data()[ 'engineer-Super-Elevation' ] || 0
                this.engineersVAlignment = querySnapShot.data()[ 'engineer-Vertical Alignment' ] || 0
                // specific search - consultants
                this.consultantsCombHVAlignment = querySnapShot.data()[ 'consultant-Combination of Horizontal & Vertical Alignment' ] || 0
                this.consultantsCornerRad = querySnapShot.data()[ 'consultant-Corner Radius' ] || 0
                this.consultantsCrossfall = querySnapShot.data()[ 'consultant-Crossfall' ] || 0
                this.consultantsCurveLength = querySnapShot.data()[ 'consultant-Curve Length' ] || 0
                this.consultantsGrade = querySnapShot.data()[ 'consultant-Grade' ] || 0
                this.consultantsHAlignment = querySnapShot.data()[ 'consultant-Horizontal Alignment' ] || 0
                this.consultantsLaneWidth = querySnapShot.data()[ 'consultant-Lane Width' ] || 0
                this.consultantsLateralClearance = querySnapShot.data()[ 'consultant-Lateral Clearance' ] || 0
                this.consultantsLFF = querySnapShot.data()[ 'consultant-Longitudinal Friction Factor' ] || 0
                this.consultantsMergingAngle = querySnapShot.data()[ 'consultant-Merging Angle' ] || 0
                this.consultantsRCSE = querySnapShot.data()[ 'consultant-Road Cross-Sections and Elements' ] || 0
                this.consultantsSFF = querySnapShot.data()[ 'consultant-Side Friction Factor' ] || 0
                this.consultantsSightDistance = querySnapShot.data()[ 'consultant-Sight Distance' ] || 0
                this.consultantsSigns = querySnapShot.data()[ 'consultant-Signs' ] || 0
                this.consultantsSRTI = querySnapShot.data()[ 'consultant-Slip-road Traffic Island' ] || 0
                this.consultantsSuperElevation = querySnapShot.data()[ 'consultant-Super-Elevation' ] || 0
                this.consultantsVAlignment = querySnapShot.data()[ 'consultant-Vertical Alignment' ] || 0
                // specific search - general public
                this.publicCombHVAlignment = querySnapShot.data()[ 'public-Combination of Horizontal & Vertical Alignment' ] || 0
                this.publicCornerRad = querySnapShot.data()[ 'public-Corner Radius' ] || 0
                this.publicCrossfall = querySnapShot.data()[ 'public-Crossfall' ] || 0
                this.publicCurveLength = querySnapShot.data()[ 'public-Curve Length' ] || 0
                this.publicGrade = querySnapShot.data()[ 'public-Grade' ] || 0
                this.publicHAlignment = querySnapShot.data()[ 'public-Horizontal Alignment' ] || 0
                this.publicLaneWidth = querySnapShot.data()[ 'public-Lane Width' ] || 0
                this.publicLateralClearance = querySnapShot.data()[ 'public-Lateral Clearance' ] || 0
                this.publicLFF = querySnapShot.data()[ 'public-Longitudinal Friction Factor' ] || 0
                this.publicMergingAngle = querySnapShot.data()[ 'public-Merging Angle' ] || 0
                this.publicRCSE = querySnapShot.data()[ 'public-Road Cross-Sections and Elements' ] || 0
                this.publicSFF = querySnapShot.data()[ 'public-Side Friction Factor' ] || 0
                this.publicSightDistance = querySnapShot.data()[ 'public-Sight Distance' ] || 0
                this.publicSigns = querySnapShot.data()[ 'public-Signs' ] || 0
                this.publicSRTI = querySnapShot.data()[ 'public-Slip-road Traffic Island' ] || 0
                this.publicSuperElevation = querySnapShot.data()[ 'public-Super-Elevation' ] || 0
                this.publicVAlignment = querySnapShot.data()[ 'public-Vertical Alignment' ] || 0
                // specific search - total
                this.CombHVAlignment = querySnapShot.data()[ 'Combination of Horizontal & Vertical Alignment' ] || 0
                this.CornerRad = querySnapShot.data()[ 'Corner Radius' ] || 0
                this.Crossfall = querySnapShot.data()[ 'Crossfall' ] || 0
                this.CurveLength = querySnapShot.data()[ 'Curve Length' ] || 0
                this.Grade = querySnapShot.data()[ 'Grade' ] || 0
                this.HAlignment = querySnapShot.data()[ 'Horizontal Alignment' ] || 0
                this.LaneWidth = querySnapShot.data()[ 'Lane Width' ] || 0
                this.LateralClearance = querySnapShot.data()[ 'Lateral Clearance' ] || 0
                this.LFF = querySnapShot.data()[ 'Longitudinal Friction Factor' ] || 0
                this.MergingAngle = querySnapShot.data()[ 'Merging Angle' ] || 0
                this.RCSE = querySnapShot.data()[ 'Road Cross-Sections and Elements' ] || 0
                this.SFF = querySnapShot.data()[ 'Side Friction Factor' ] || 0
                this.SightDistance = querySnapShot.data()[ 'Sight Distance' ] || 0
                this.Signs = querySnapShot.data()[ 'Signs' ] || 0
                this.SRTI = querySnapShot.data()[ 'Slip-road Traffic Island' ] || 0
                this.SuperElevation = querySnapShot.data()[ 'Super-Elevation' ] || 0
                this.VAlignment = querySnapShot.data()[ 'Vertical Alignment' ] || 0
                // road classification - engineer
                this.engineerExpressway = querySnapShot.data()[ 'engineer-expressway' ] || 0
                this.engineersemiExpressway = querySnapShot.data()[ 'engineer-semiExpressway' ] || 0
                this.engineermajorArterial = querySnapShot.data()[ 'engineer-majorArterial' ] || 0
                this.engineerminorArterial = querySnapShot.data()[ 'engineer-minorArterial' ] || 0
                this.engineerprimaryAccess = querySnapShot.data()[ 'engineer-primaryAccess' ] || 0
                this.engineerlocalAccess = querySnapShot.data()[ 'engineer-localAccess' ] || 0
                // road classification - consultant
                this.consultantExpressway = querySnapShot.data()[ 'consultant-expressway' ] || 0
                this.consultantsemiExpressway = querySnapShot.data()[ 'consultant-semiExpressway' ] || 0
                this.consultantmajorArterial = querySnapShot.data()[ 'consultant-majorArterial' ] || 0
                this.consultantminorArterial = querySnapShot.data()[ 'consultant-minorArterial' ] || 0
                this.consultantprimaryAccess = querySnapShot.data()[ 'consultant-primaryAccess' ] || 0
                this.consultantlocalAccess = querySnapShot.data()[ 'consultant-localAccess' ] || 0
                // road classification - public
                this.publicExpressway = querySnapShot.data()[ 'public-expressway' ] || 0
                this.publicsemiExpressway = querySnapShot.data()[ 'public-semiExpressway' ] || 0
                this.publicmajorArterial = querySnapShot.data()[ 'public-majorArterial' ] || 0
                this.publicminorArterial = querySnapShot.data()[ 'public-minorArterial' ] || 0
                this.publicprimaryAccess = querySnapShot.data()[ 'public-primaryAccess' ] || 0
                this.publiclocalAccess = querySnapShot.data()[ 'public-localAccess' ] || 0
                // road classification - total
                this.Expressway = querySnapShot.data()[ 'expressway' ] || 0
                this.semiExpressway = querySnapShot.data()[ 'semiExpressway' ] || 0
                this.majorArterial = querySnapShot.data()[ 'majorArterial' ] || 0
                this.minorArterial = querySnapShot.data()[ 'minorArterial' ] || 0
                this.primaryAccess = querySnapShot.data()[ 'primaryAccess' ] || 0
                this.localAccess = querySnapShot.data()[ 'localAccess' ] || 0
                // search parameters
                this.undividedRoad = querySnapShot.data().undividedRoad || 0
                this.slipRoad = querySnapShot.data().slipRoad || 0
                this.dualRoad = querySnapShot.data().dualRoad || 0
                this.speed40 = querySnapShot.data().speed40 || 0
                this.speed50 = querySnapShot.data().speed50 || 0
                this.speed60 = querySnapShot.data().speed60 || 0
                this.speed70 = querySnapShot.data().speed70 || 0
                this.speed80 = querySnapShot.data().speed80 || 0
                this.speed90 = querySnapShot.data().speed90 || 0
                this.changeJunctionYes = querySnapShot.data().changeJunctionYes || 0
                this.changeJunctionNo = querySnapShot.data().changeJunctionNo || 0
              })
    },
  },
  created() {
    // get current date when page is loaded and get data from firebase
    var currentdate = new Date(); 
    this.ExtractedDate = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    this.getData();
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans);
* {
  font-family: 'IBM Plex Sans', sans-serif;
}
/** export btn on dashboard */
.exportBtn {
  font-size: 1rem;
  color: #ffffff;
  background-color: #758f9a;
  border: none;
  border-radius: 5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 7rem;
  height: 3rem;
}
.exportBtn:active, .downloadBtn:active, .pwBtn:active {
  opacity: 0.6;
  transform: translateY(3px);
}
/** password alert popup */
.passwordBox {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 20%;
  background: rgba(0,0,0,0.95);
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/** input box and buttons for password */
.inputExport {
  display: flex; 
  align-items: flex-end;
  height: 50px; 
  line-height: 50px;
  margin-bottom: 50px;
}
input {
  width: 20vw;
  color: white;
  border: none;
  background-color: transparent;
  margin-right: 40px;
  border-bottom: 2px solid #b8b8b8;
}
::placeholder {
  color: #4c5257;
}
input:focus {
  outline: none;
}
input:focus::placeholder {
  color: transparent;
}
.downloadBtn {
  height: 90%;
  width: auto;
  padding: 12px;
  border-radius: 50px;
  background-color: #dbdbdb;
  color: #5e5e5e;
  cursor: pointer;
}
.pwBtn {
  display: flex;
  align-items: center;
  color: #b8b8b8;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>