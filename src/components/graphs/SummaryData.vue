<template>
  <div class="summary">
    <p class="figure"> {{ abbreviateNumber(this.numVisits) }} </p>
    <p class="description"> VISITS IN TOTAL </p>
  </div>
</template>

<script>
import database from '../../firebase.js'
import 'firebase/firestore';

export default {
  name: "SummaryData",
  data() {
    return {
      docID: 'H1uwnxYevFozEeNv7SiY',
      numVisits: 0
    }
  },
  methods: {
    getVisits: function() {
      database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                this.numVisits = querySnapShot.data().numVisits;
              })
    },
    abbreviateNumber: function(value) {
      var newValue = value;
      if (value >= 1000) {
          var suffixes = ["", "k", "M", "B", "T"];
          var suffixNum = Math.floor( (""+value).length/3 );
          var shortValue = '';
          for (var precision = 2; precision >= 1; precision--) {
              shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
              var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
              if (dotLessShortValue.length <= 2) { break; }
          }
          if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
          newValue = shortValue + suffixes[suffixNum];
      }
      return newValue;
    }
  },
  created() {
    this.getVisits();
  }
}
</script>

<style scoped>
* {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.summary {
  font-weight: bold;
  color: black;
  text-align: center;
}
.figure {
  font-size: calc(2vw + 2vh + 2vmin);
}
.description {
  font-size: 1.5vw;
  letter-spacing: 0.2rem;
  color: #4f4f4f;
}
</style>