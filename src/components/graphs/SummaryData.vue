<template>
  <div class="summary">
    <p class="figure"> {{ this.numVisits }} </p>
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
  font-size: 8vw;
}
.description {
  font-size: 1.5vw;
  letter-spacing: 0.2rem;
  color: #4f4f4f;
}
</style>