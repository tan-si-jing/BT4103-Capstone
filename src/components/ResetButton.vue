<template>
  <div>
    <!-- button on dashboard -->
    <button class="resetBtn" v-on:click="open()">Reset</button>

    <!-- display for when the reset button is clicked -->
    <div class="passwordBox" v-show="isOpened">
      <div class="content">

        <div v-show="!refreshPrompt">
        <p style="color: white; margin-bottom: 2px;">Are you sure you would like to <a style="color: #e33232;">RESET</a> the data?</p>
        <p style="color: #bdbdbd;">Do note that this action is irreversible.</p>
        <!-- for user to enter password -->
        <input type="password" placeholder="Enter Password" v-model="password" v-on:keyup.enter="reset()">

        <!-- to display error message for when password is incorrect -->
        <p v-show="wrongPassword" style="color: #4c5257; margin-bottom: 30px;">Wrong Password. Please Try Again.</p>

        <!-- confirmation buttons -->
        <div class="confirmation">
          <!--  go back button -->
          <p class="cfmBtn" v-on:click="open()" style="background-color: #707070; margin-right: 20px;">
            <font-awesome-icon icon="arrow-left" style="margin-right: 4px;"/> 
            Go Back
          </p>
          <!-- reset button -->
          <p class="cfmBtn" v-on:click="reset()" style="background-color: #9c1717;">
            <font-awesome-icon icon="undo" style="margin-right: 4px;"/> 
            Reset
          </p>
        </div>
        </div>

        <!-- display for when password is correct and data has been reset. display refresh message. -->
        <p v-show="refreshPrompt" style="color: white;">Data has been reset. <br>Please refresh the page to view the changes.</p>

      </div>
    </div>

  </div>
</template>

<script>
import database from '../firebase.js'
import 'firebase/firestore';

export default {
  name: 'ResetButton',
  data() {
    return {
      // actual password will be retrieved from firebase
      docID: 'H1uwnxYevFozEeNv7SiY',
      actualPassword: null,
      // passwordBox
      isOpened: false,
      password: null,
      wrongPassword: false,
      refreshPrompt: false
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
    // to control the popup display of reset button
    open() {
      this.isOpened = !this.isOpened;
      this.password = null;
    },
    // reset data if password entered is correct
    reset() {
      if (this.password == this.actualPassword) {
        this.refreshPrompt = true; 
        this.wrongPassword = false;
        this.resetFields();
      } else {
        this.wrongPassword = true;
        this.refreshPrompt = false;
      }
      this.password = null;
    },
    // function to reset the data
    resetFields() {
      var myparam = database.collection('search_parameters').doc(this.docID);
      myparam.update({
        ['numVisits']: 0,
        // num visits
        ['engineerSpecific']: 0,
        ['consultantSpecific']: 0,
        ['publicSpecific']: 0,
        ['engineerGuide']: 0,
        ['consultantGuide']: 0,
        ['publicGuide']: 0,
        // specific search - engineers
        ['engineer-Combination of Horizontal & Vertical Alignment']: 0,
        ['engineer-Corner Radius']: 0,
        ['engineer-Crossfall']: 0,
        ['engineer-Curve Length']: 0,
        ['engineer-Grade']: 0,
        ['engineer-Horizontal Alignment']: 0,
        ['engineer-Lane Width']: 0,
        ['engineer-Lateral Clearance']: 0,
        ['engineer-Longitudinal Friction Factor']: 0,
        ['engineer-Merging Angle']: 0,
        ['engineer-Road Cross-Sections and Elements']: 0,
        ['engineer-Side Friction Factor']: 0,
        ['engineer-Sight Distance']: 0,
        ['engineer-Signs']: 0,
        ['engineer-Slip-road Traffic Island']: 0,
        ['engineer-Super-Elevation']: 0,
        ['engineer-Vertical Alignment']: 0,
        // specific search - consultants
        ['consultant-Combination of Horizontal & Vertical Alignment']: 0,
        ['consultant-Corner Radius']: 0,
        ['consultant-Crossfall']: 0,
        ['consultant-Curve Length']: 0,
        ['consultant-Grade']: 0,
        ['consultant-Horizontal Alignment']: 0,
        ['consultant-Lane Width']: 0,
        ['consultant-Lateral Clearance']: 0,
        ['consultant-Longitudinal Friction Factor']: 0,
        ['consultant-Merging Angle']: 0,
        ['consultant-Road Cross-Sections and Elements']: 0,
        ['consultant-Side Friction Factor']: 0,
        ['consultant-Sight Distance']: 0,
        ['consultant-Signs']: 0,
        ['consultant-Slip-road Traffic Island']: 0,
        ['consultant-Super-Elevation']: 0,
        ['consultant-Vertical Alignment']: 0,
        // specific search - general public
        ['public-Combination of Horizontal & Vertical Alignment']: 0,
        ['public-Corner Radius']: 0,
        ['public-Crossfall']: 0,
        ['public-Curve Length']: 0,
        ['public-Grade']: 0,
        ['public-Horizontal Alignment']: 0,
        ['public-Lane Width']: 0,
        ['public-Lateral Clearance']: 0,
        ['public-Longitudinal Friction Factor']: 0,
        ['public-Merging Angle']: 0,
        ['public-Road Cross-Sections and Elements']: 0,
        ['public-Side Friction Factor']: 0,
        ['public-Sight Distance']: 0,
        ['public-Signs']: 0,
        ['public-Slip-road Traffic Island']: 0,
        ['public-Super-Elevation']: 0,
        ['public-Vertical Alignment']: 0,
        // specific search - total
        ['Combination of Horizontal & Vertical Alignment']: 0,
        ['Corner Radius']: 0,
        ['Crossfall']: 0,
        ['Curve Length']: 0,
        ['Grade']: 0,
        ['Horizontal Alignment']: 0,
        ['Lane Width']: 0,
        ['Lateral Clearance']: 0,
        ['Longitudinal Friction Factor']: 0,
        ['Merging Angle']: 0,
        ['Road Cross-Sections and Elements']: 0,
        ['Side Friction Factor']: 0,
        ['Sight Distance']: 0,
        ['Signs']: 0,
        ['Slip-road Traffic Island']: 0,
        ['Super-Elevation']: 0,
        ['Vertical Alignment']: 0,
        // road classification - engineer
        ['engineer-expressway']: 0,
        ['engineer-semiExpressway']: 0,
        ['engineer-majorArterial']: 0,
        ['engineer-minorArterial']: 0,
        ['engineer-primaryAccess']: 0,
        ['engineer-localAccess']: 0,
        // road classification - consultant
        ['consultant-expressway']: 0,
        ['consultant-semiExpressway']: 0,
        ['consultant-majorArterial']: 0,
        ['consultant-minorArterial']: 0,
        ['consultant-primaryAccess']: 0,
        ['consultant-localAccess']: 0,
        // road classification - public
        ['public-expressway']: 0,
        ['public-semiExpressway']: 0,
        ['public-majorArterial']: 0,
        ['public-minorArterial']: 0,
        ['public-primaryAccess']: 0,
        ['public-localAccess']: 0,
        // road classification - total
        ['expressway']: 0,
        ['semiExpressway']: 0,
        ['majorArterial']: 0,
        ['minorArterial']: 0,
        ['primaryAccess']: 0,
        ['localAccess']: 0,
        // search parameters
        ['undividedRoad']: 0,
        ['slipRoad']: 0,
        ['dualRoad']: 0,
        ['speed40']: 0,
        ['speed50']: 0,
        ['speed60']: 0,
        ['speed70']: 0,
        ['speed80']: 0,
        ['speed90']: 0,
        ['changeJunctionYes']: 0,
        ['changeJunctionNo']: 0,
      })
    }
  },
  created() {
    // get actual password from firebase
    database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                // password
                this.actualPassword = querySnapShot.data().resetPassword
              })
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans);
* {
  font-family: 'IBM Plex Sans', sans-serif;
}
/** export btn on dashboard */
.resetBtn {
  font-size: 1rem;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 5rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 7rem;
  height: 3rem;
}
.resetBtn:active, .cfmBtn:active {
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
  padding-top: 15%;
  background: rgba(0,0,0,0.98);
  overflow: hidden;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
input {
  width: 20vw;
  color: white;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #b8b8b8;
  margin-bottom: 55px;
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
/** confirmation */
.confirmation {
  display: flex; 
  align-items: center;
  justify-content: center; 
}
.cfmBtn {
  width: auto;
  padding: 8px 12px;
  border-radius: 50px;
  color: white;
  cursor: pointer;
}
</style>