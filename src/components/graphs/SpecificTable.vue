<template>
  <div style="width: 100%;">
    <p class="heading">Frequently Searched Specific Section</p>
    <p class="subHeading">Top 5</p>
    <table>
      <tr>
        <th>Section</th>
        <th>No. Searches</th>
      </tr>
      <tr v-for="specificField in this.sortField().slice(0, 5)" :key="specificField">
        <td>{{ specificField.name }}</td> 
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
      CombHVAlignment: 0,
      CornerRad: 0,
      Crossfall: 0,
      CurveLength: 0,
      DesignSpeed: 0,
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
                this.CombHVAlignment = querySnapShot.data()[ 'Combination of Horizontal & Vertical Alignment' ]
                this.CornerRad = querySnapShot.data()[ 'Corner Radius' ]
                this.Crossfall = querySnapShot.data()[ 'Crossfall' ]
                this.CurveLength = querySnapShot.data()[ 'Curve Length' ]
                this.DesignSpeed = querySnapShot.data()[ 'Design Speed' ]
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
        {name: "Combination of Horizontal & Vertical Alignment", value: this.CombHVAlignment},
        {name: "Corner Radius", value: this.CornerRad},
        {name: "Crossfall", value: this.Crossfall},
        {name: "Curve Length", value: this.CurveLength},
        {name: "Design Speed", value: this.DesignSpeed},
        {name: "Grade", value: this.Grade},
        {name: "Horizontal Alignment", value: this.HAlignment},
        {name: "Lane Width", value: this.LaneWidth},
        {name: "Lateral Clearance", value: this.LateralClearance},
        {name: "Logitudinal Friction Factor", value: this.LFF},
        {name: "Merging Angle", value: this.MergingAngle},
        {name: "Road Cross-Sections and Elements", value: this.RCSE},
        {name: "Side Friction Factor", value: this.SFF},
        {name: "Sight Distance", value: this.SightDistance},
        {name: "Slip-road Traffic Island", value: this.SRTI},
        {name: "Super-Elevation", value: this.SuperElevation},
        {name: "Vertical Alignment", value: this.VAlignment}
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
}
td {
  font-size: 20px;
}
th:nth-child(2), td:nth-child(2) {
  text-align: center;
  width: 1%;
}
</style>