<template>
  <div style="height:100vh; overflow: hidden;">
  <div class="header">
    <div class="headerText">
    <h3>Road Design Guide</h3>
    <h5>CDC & SDRE Manuals</h5>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="userType">
    <h6>Please select your role:</h6>
    <div class="button-group">
      <UserTypeButton label="Traffic Engineers" icon="briefcase"/>
      <UserTypeButton label="Traffic Engineers" icon="cone-striped"/>
      <UserTypeButton label="Traffic Engineers" icon="stoplights"/>
      <UserTypeButton label="Traffic Engineers" icon="tools"/>
      <UserTypeButton label="Consultants" icon="file-earmark-text"/>
      <UserTypeButton label="Consultants" icon="chat-dots"/>
      <UserTypeButton label="General Public" icon="people"/>
      <UserTypeButton label="Admin" icon="lock"/>
    </div>
  </div>
  </div>
</template>

<script>
import UserTypeButton from '../components/UserTypeButton.vue'

export default {
  name: 'Home',
  components: {
    UserTypeButton
  }
}
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-around;
}
.userType {
  background-color: #FAFAFA;
  height: 50%;
  position:relative;
  z-index: 1;
}
.header {
  background-color: #E0E0E0;
  height: 50%;
  position:relative;
}
.headerText {
  padding: 7rem;
}
h5 {
  margin-top: 1rem;
}
h6 {
  padding: 1.5rem;
  text-align: center
}
.road {
  height:55vh;
  width: 110vw;
  transform: rotate(345deg);
  z-index: 0;
  position: absolute;
  top: 30vh;
}
.mascot {
  height: 30vh;
  transform: scaleX(-1);
  position: absolute;
  top:10vh;
  left: 70vw;
  z-index: 2;
}
</style>
