<template>
  <div style="height:100vh; overflow: hidden;">
  <div class="header">
    <div class="headerText">
    <h2>Road Design Guide</h2>
    <h5>CDC & SDRE Manuals</h5>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="userType">
    <h6>Please select your role:</h6>
    <div class="button-group">
      <UserTypeButton label="Traffic Engineers" icon="briefcase" @click="updateChoice('role','engineer')" link="/search"/>
      <UserTypeButton label="Consultants" icon="chat-dots"  @click="updateChoice('role','consultant')" link="/search"/>
      <UserTypeButton label="General Public" icon="people"  @click="updateChoice('role','public')" link="/search"/>
      <UserTypeButton label="Admin" icon="lock" link="/login"/>
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
  },
  data() {
    return{
      choice:{
        role: "",
        roadDesign: "",
        roadClass: "",
        roadType: "",
        designSpeed: "",
        grad_curv_change:"",
        specific_param:"",
      }
    }
  },
  methods:{
  openStorage(){
    return JSON.parse(localStorage.getItem('choice'))
  },
  saveStorage(form){
    localStorage.setItem('choice',JSON.stringify(form))
  },
  updateChoice(input,value){
    this.choice[input] = value

    let storedChoice = this.openStorage()
    if(!storedChoice) storedChoice = {}

    storedChoice[input] = value
    this.saveStorage(storedChoice)
  },
  },
  created(){
  const storedChoice = this.openStorage()
  if (storedChoice){
    this.choice = {
      ...this.choice,
      ...storedChoice
    }
  }
}
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);
.button-group {
  display: flex;
  justify-content: space-around;
  padding: 0 15%
}
.userType {
  background-color: #FAFAFA;
  height: 55%;
  position:relative;
  z-index: 1;
}
.header {
  background-color: #E0E0E0;
  height: 45%;
  position:relative;
}
.headerText {
  padding: 7rem;
}
h5 {
  margin-top: 1rem;
}
h6 {
  padding: 2rem;
  text-align: center;
  font-size: 1.25rem
}
.road {
  height:55vh;
  width: 110vw;
  transform: rotate(350deg);
  z-index: 0;
  position: absolute;
  top: 25vh;
}
.mascot {
  height: 30vh;
  width: auto;
  transform: scaleX(-1);
  position: absolute;
  top:10vh;
  left: 70vw;
  z-index: 2;
}
h2 {
  font-weight: semi-bold;
}
</style>
