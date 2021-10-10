<template>
  <div style="width: 100%;">
    <p class="heading">Frequently Searched Specific Section</p>
    <p class="subHeading">Top 5</p>
    <table>
      <tr>
        <th>Section</th>
        <th>Traffic Engineers</th>
        <th>Consultants</th>
        <th>General Public</th>
        <th>Total</th>
      </tr>
      <tr v-for="specificField in this.sortField().slice(0, 5)" :key="specificField">
        <td>{{ specificField.name }}</td> 
        <td>{{ specificField.engineers }}</td> 
        <td>{{ specificField.consultants }}</td> 
        <td>{{ specificField.public }}</td> 
        <td>{{ specificField.value }}</td>  
      </tr>
    </table>
  </div>
</template>

<script>
import database from '../../firebase.js'
import 'firebase/firestore';

export default {
  name: "SpecificTable",
  components: {
  },
  data() {
    return {
      docID: 'H1uwnxYevFozEeNv7SiY',
      /** traffic engineers */
      engineersCombHVAlignment: 0,
      engineersCornerRad: 0,
      engineersCrossfall: 0,
      engineersCurveLength: 0,
      engineersGrade: 0,
      engineersHAlignment: 0,
      engineersLaneWidth: 0,
      engineersLateralClearance: 0,
      engineersLFF: 0,
      engineersMergingAngle: 0,
      engineersRCSE: 0,
      engineersSFF: 0,
      engineersSightDistance: 0,
      engineersSRTI: 0,
      engineersSuperElevation: 0,
      engineersVAlignment: 0,
      /** consultants */
      consultantsCombHVAlignment: 0,
      consultantsCornerRad: 0,
      consultantsCrossfall: 0,
      consultantsCurveLength: 0,
      consultantsGrade: 0,
      consultantsHAlignment: 0,
      consultantsLaneWidth: 0,
      consultantsLateralClearance: 0,
      consultantsLFF: 0,
      consultantsMergingAngle: 0,
      consultantsRCSE: 0,
      consultantsSFF: 0,
      consultantsSightDistance: 0,
      consultantsSRTI: 0,
      consultantsSuperElevation: 0,
      consultantsVAlignment: 0,
      /** general public */
      publicCombHVAlignment: 0,
      publicCornerRad: 0,
      publicCrossfall: 0,
      publicCurveLength: 0,
      publicGrade: 0,
      publicHAlignment: 0,
      publicLaneWidth: 0,
      publicLateralClearance: 0,
      publicLFF: 0,
      publicMergingAngle: 0,
      publicRCSE: 0,
      publicSFF: 0,
      publicSightDistance: 0,
      publicSRTI: 0,
      publicSuperElevation: 0,
      publicVAlignment: 0,
      /** total */
      CombHVAlignment: 0,
      CornerRad: 0,
      Crossfall: 0,
      CurveLength: 0,
      Grade: 0,
      HAlignment: 0,
      LaneWidth: 0,
      LateralClearance: 0,
      LFF: 0,
      MergingAngle: 0,
      RCSE: 0,
      SFF: 0,
      SightDistance: 0,
      SRTI: 0,
      SuperElevation: 0,
      VAlignment: 0
    };
  },
  methods: {
    sortField: function() {
      // get values
      database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                // traffic engineers
                this.engineersCombHVAlignment = querySnapShot.data()[ 'engineer-Combination of Horizontal & Vertical Alignment' ]
                this.engineersCornerRad = querySnapShot.data()[ 'engineer-Corner Radius' ]
                this.engineersCrossfall = querySnapShot.data()[ 'engineer-Crossfall' ]
                this.engineersCurveLength = querySnapShot.data()[ 'engineer-Curve Length' ]
                this.engineersGrade = querySnapShot.data()[ 'engineer-Grade' ]
                this.engineersHAlignment = querySnapShot.data()[ 'engineer-Horizontal Alignment' ]
                this.engineersLaneWidth = querySnapShot.data()[ 'engineer-Lane Width' ]
                this.engineersLateralClearance = querySnapShot.data()[ 'engineer-Lateral Clearance' ]
                this.engineersLFF = querySnapShot.data()[ 'engineer-Logitudinal Friction Factor' ]
                this.engineersMergingAngle = querySnapShot.data()[ 'engineer-Merging Angle' ]
                this.engineersRCSE = querySnapShot.data()[ 'engineer-Road Cross-Sections and Elements' ]
                this.engineersSFF = querySnapShot.data()[ 'engineer-Side Friction Factor' ]
                this.engineersSightDistance = querySnapShot.data()[ 'engineer-Sight Distance' ]
                this.engineersSRTI = querySnapShot.data()[ 'engineer-Slip-road Traffic Island' ]
                this.engineersSuperElevation = querySnapShot.data()[ 'engineer-Super-Elevation' ]
                this.engineersVAlignment = querySnapShot.data()[ 'engineer-Vertical Alignment' ]
                // consultants
                this.consultantsCombHVAlignment = querySnapShot.data()[ 'consultant-Combination of Horizontal & Vertical Alignment' ]
                this.consultantsCornerRad = querySnapShot.data()[ 'consultant-Corner Radius' ]
                this.consultantsCrossfall = querySnapShot.data()[ 'consultant-Crossfall' ]
                this.consultantsCurveLength = querySnapShot.data()[ 'consultant-Curve Length' ]
                this.consultantsGrade = querySnapShot.data()[ 'consultant-Grade' ]
                this.consultantsHAlignment = querySnapShot.data()[ 'consultant-Horizontal Alignment' ]
                this.consultantsLaneWidth = querySnapShot.data()[ 'consultant-Lane Width' ]
                this.consultantsLateralClearance = querySnapShot.data()[ 'consultant-Lateral Clearance' ]
                this.consultantsLFF = querySnapShot.data()[ 'consultant-Logitudinal Friction Factor' ]
                this.consultantsMergingAngle = querySnapShot.data()[ 'consultant-Merging Angle' ]
                this.consultantsRCSE = querySnapShot.data()[ 'consultant-Road Cross-Sections and Elements' ]
                this.consultantsSFF = querySnapShot.data()[ 'consultant-Side Friction Factor' ]
                this.consultantsSightDistance = querySnapShot.data()[ 'consultant-Sight Distance' ]
                this.consultantsSRTI = querySnapShot.data()[ 'consultant-Slip-road Traffic Island' ]
                this.consultantsSuperElevation = querySnapShot.data()[ 'consultant-Super-Elevation' ]
                this.consultantsVAlignment = querySnapShot.data()[ 'consultant-Vertical Alignment' ]
                // general public
                this.publicCombHVAlignment = querySnapShot.data()[ 'public-Combination of Horizontal & Vertical Alignment' ]
                this.publicCornerRad = querySnapShot.data()[ 'public-Corner Radius' ]
                this.publicCrossfall = querySnapShot.data()[ 'public-Crossfall' ]
                this.publicCurveLength = querySnapShot.data()[ 'public-Curve Length' ]
                this.publicGrade = querySnapShot.data()[ 'public-Grade' ]
                this.publicHAlignment = querySnapShot.data()[ 'public-Horizontal Alignment' ]
                this.publicLaneWidth = querySnapShot.data()[ 'public-Lane Width' ]
                this.publicLateralClearance = querySnapShot.data()[ 'public-Lateral Clearance' ]
                this.publicLFF = querySnapShot.data()[ 'public-Logitudinal Friction Factor' ]
                this.publicMergingAngle = querySnapShot.data()[ 'public-Merging Angle' ]
                this.publicRCSE = querySnapShot.data()[ 'public-Road Cross-Sections and Elements' ]
                this.publicSFF = querySnapShot.data()[ 'public-Side Friction Factor' ]
                this.publicSightDistance = querySnapShot.data()[ 'public-Sight Distance' ]
                this.publicSRTI = querySnapShot.data()[ 'public-Slip-road Traffic Island' ]
                this.publicSuperElevation = querySnapShot.data()[ 'public-Super-Elevation' ]
                this.publicVAlignment = querySnapShot.data()[ 'public-Vertical Alignment' ]
                // total
                this.CombHVAlignment = querySnapShot.data()[ 'Combination of Horizontal & Vertical Alignment' ]
                this.CornerRad = querySnapShot.data()[ 'Corner Radius' ]
                this.Crossfall = querySnapShot.data()[ 'Crossfall' ]
                this.CurveLength = querySnapShot.data()[ 'Curve Length' ]
                this.Grade = querySnapShot.data()[ 'Grade' ]
                this.HAlignment = querySnapShot.data()[ 'Horizontal Alignment' ]
                this.LaneWidth = querySnapShot.data()[ 'Lane Width' ]
                this.LateralClearance = querySnapShot.data()[ 'Lateral Clearance' ]
                this.LFF = querySnapShot.data()[ 'Logitudinal Friction Factor' ]
                this.MergingAngle = querySnapShot.data()[ 'Merging Angle' ]
                this.RCSE = querySnapShot.data()[ 'Road Cross-Sections and Elements' ]
                this.SFF = querySnapShot.data()[ 'Side Friction Factor' ]
                this.SightDistance = querySnapShot.data()[ 'Sight Distance' ]
                this.SRTI = querySnapShot.data()[ 'Slip-road Traffic Island' ]
                this.SuperElevation = querySnapShot.data()[ 'Super-Elevation' ]
                this.VAlignment = querySnapShot.data()[ 'Vertical Alignment' ]
              })
      // input values into array and sort
      const fields = [
        {
          name: "Combination of Horizontal & Vertical Alignment", 
          engineers: this.engineersCombHVAlignment, 
          consultants: this.consultantsCombHVAlignment,
          public: this.publicCombHVAlignment,
          value: this.CombHVAlignment
        },
        {
          name: "Corner Radius", 
          engineers: this.engineersCornerRad, 
          consultants: this.consultantsCornerRad,
          public: this.publicCornerRad,
          value: this.CornerRad
        },
        {
          name: "Crossfall", 
          engineers: this.engineersCrossfall, 
          consultants: this.consultantsCrossfall,
          public: this.publicCrossfall,
          value: this.Crossfall
        },
        {
          name: "Curve Length", 
          engineers: this.engineersCurveLength, 
          consultants: this.consultantsCurveLength,
          public: this.publicCurveLength,
          value: this.CurveLength
        },
        {
          name: "Grade", 
          engineers: this.engineersGrade, 
          consultants: this.consultantsGrade,
          public: this.publicGrade,
          value: this.Grade
        },
        {
          name: "Horizontal Alignment", 
          engineers: this.engineersHAlignment, 
          consultants: this.consultantsHAlignment,
          public: this.publicHAlignment,
          value: this.HAlignment
        },
        {
          name: "Lane Width", 
          engineers: this.engineersLaneWidth, 
          consultants: this.consultantsLaneWidth,
          public: this.publicLaneWidth,
          value: this.LaneWidth},
        {
          name: "Lateral Clearance", 
          engineers: this.engineersLateralClearance, 
          consultants: this.consultantsLateralClearance,
          public: this.publicLateralClearance,
          value: this.LateralClearance
        },
        {
          name: "Logitudinal Friction Factor", 
          engineers: this.engineersLFF, 
          consultants: this.consultantsLFF,
          public: this.publicLFF,
          value: this.LFF
        },
        {
          name: "Merging Angle", 
          engineers: this.engineersMergingAngle, 
          consultants: this.consultantsMergingAngle,
          public: this.publicMergingAngle,
          value: this.MergingAngle
        },
        {
          name: "Road Cross-Sections and Elements", 
          engineers: this.engineersRCSE, 
          consultants: this.consultantsRCSE,
          public: this.publicRCSE,
          value: this.RCSE
        },
        {
          name: "Side Friction Factor", 
          engineers: this.engineersSFF, 
          consultants: this.consultantsSFF,
          public: this.publicSFF,
          value: this.SFF
        },
        {
          name: "Sight Distance", 
          engineers: this.engineersSightDistance, 
          consultants: this.consultantsSightDistance,
          public: this.publicSightDistance,
          value: this.SightDistance
        },
        {
          name: "Slip-road Traffic Island", 
          engineers: this.engineersSRTI, 
          consultants: this.consultantsSRTI,
          public: this.publicSRTI,
          value: this.SRTI
        },
        {
          name: "Super-Elevation", 
          engineers: this.engineersSuperElevation, 
          consultants: this.consultantsSuperElevation,
          public: this.publicSuperElevation,
          value: this.SuperElevation
        },
        {
          name: "Vertical Alignment", 
          engineers: this.engineersVAlignment, 
          consultants: this.consultantsVAlignment,
          public: this.publicVAlignment,
          value: this.VAlignment}
      ]
      fields.sort(function(a, b) {
        return b.value - a.value;
      })
      return fields;
    },
  },
};
</script>

<style scoped>
* {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.heading {
  color: #263238;
  font-size: 18px;
  margin-top: 10px;
}
.subHeading {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
th {
  font-size: 18px;
  font-weight: normal;
  border-bottom: solid 1px black;
  vertical-align: bottom;
  padding-bottom: 5px;
}
td {
  font-size: 20px;
}
th:nth-child(n+2), td:nth-child(n+2) {
  text-align: center;
  width: 2%;
}
</style>