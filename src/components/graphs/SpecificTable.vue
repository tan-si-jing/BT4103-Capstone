<template>
  <div style="width: 100%;">
    <div style="display: flex; justify-content: space-between;">
    <p class="heading">Frequently Searched Specific Section</p>
    <p class="heading2" @click="this.changeSort('total')">Click Here to Load Data</p>
    </div>
    <p class="subHeading">Top 5</p>
    <table>
      <tr>
        <th>Section</th>
        <th>Traffic Engineers<br>
          <i class="bi bi-sort-down" @click="this.changeSort('engineers')" v-bind:style="[this.currSort === 'engineers' ? 'color:black; cursor: pointer;' : 'color:grey; cursor: pointer;']"></i>
        </th>
        <th>Consultants<br>
          <i class="bi bi-sort-down" @click="this.changeSort('consultants')" v-bind:style="[this.currSort === 'consultants' ? 'color:black; cursor: pointer;' : 'color:grey; cursor: pointer;']"></i>
        </th>
        <th>General Public<br>
          <i class="bi bi-sort-down" @click="this.changeSort('public')" v-bind:style="[this.currSort === 'public' ? 'color:black; cursor: pointer;' : 'color:grey; cursor: pointer;']"></i>
        </th>
        <th>Total<br>
          <i class="bi bi-sort-down" @click="this.changeSort('total')" v-bind:style="[this.currSort === 'total' ? 'color:black; cursor: pointer;' : 'color:grey; cursor: pointer;']"></i>
        </th>
      </tr>
      <tr v-for="specificField in this.finalData.slice(0, 5)" :key="specificField">
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
      currSort: null,
      finalData: [],
      /** traffic engineers */
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
      /** consultants */
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
      /** general public */
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
      /** total */
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
      VAlignment: null
    };
  },
  methods: {
    changeSort: function(field) {
      this.currSort = field;
      this.finalData = this.getData();
    },
    getData: function() {
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
          name: "Signs", 
          engineers: this.engineersSigns, 
          consultants: this.consultantsSigns,
          public: this.publicSigns,
          value: this.Signs
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
      // sorting
      if (this.currSort == 'total') {
        fields.sort(function(a, b) {
          return b.value - a.value;
        })
      }
      if (this.currSort == 'engineers') {
        fields.sort(function(a, b) {
          return b.engineers - a.engineers;
        })
      }
      if (this.currSort == 'consultants') {
        fields.sort(function(a, b) {
          return b.consultants - a.consultants;
        })
      }
      if (this.currSort == 'public') {
        fields.sort(function(a, b) {
          return b.public - a.public;
        })
      }
      return fields;
    },
  },
  mounted() {
    database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                // traffic engineers
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
                // consultants
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
                // general public
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
                // total
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
              })
    this.changeSort('');
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
.heading2 {
  color: #263238;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  font-style: italic;
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
  vertical-align: top;
  text-align: center;
  width: 3%;
}
</style>