<template>
  <div style="height:100vh; overflow: hidden; position:relative">
  <div class="header">
    <div class="center">
    <div class="pages">
        <PageCircle num="1" v-bind:isActive="true" @click="$router.go(-3)"/>
        <PageCircle num="2" v-bind:isActive="true" @click="$router.go(-2)"/>
        <PageCircle num="3" v-bind:isActive="true" @click="$router.go(-1)"/>
        <PageCircle num="4" v-bind:isActive="true"/>
        <PageCircle num="5" v-bind:isActive="false"/>
    </div>
    <div class="question">
      <h5>What is the <u>design speed</u> (km/h) of the road you're working on? </h5>
    </div>
    </div>
    <img src="../assets/mascot.png" class="mascot"/>
    <img src="../assets/road.png" class="road"/>
  </div>
  <div class="options">
    <div class="button-group">
      <SearchParamButton text="40" @click="storeDesignSpeed('40');displayDesignSpeed()"/>
      <SearchParamButton text="50" @click="storeDesignSpeed('50');displayDesignSpeed()"/>
      <SearchParamButton text="60" @click="storeDesignSpeed('60');displayDesignSpeed()"/>
      <SearchParamButton text="70" @click="storeDesignSpeed('70');displayDesignSpeed()"/>
      <SearchParamButton text="80" @click="storeDesignSpeed('80');displayDesignSpeed()"/>
      <SearchParamButton text="90" @click="storeDesignSpeed('90');displayDesignSpeed()"/>
    </div>
  </div>
  </div>
</template>

<script>
import SearchParamButton from '../components/SearchParamButton.vue'
import PageCircle from '../components/PageCircle.vue'

export default {
  name: 'search4',
  props: ['roadDesign','roadClass','roadType'],
  components: {
    PageCircle,
    SearchParamButton
  },
  data() {
    return{
      designSpeed: '',
    }
  },
methods:{
  storeDesignSpeed(text){
    this.designSpeed = text;
    this.$router.push({name:'search5',params:{roadDesign:this.roadDesign,
                                              roadClass:this.roadClass,
                                              roadType:this.roadType,
                                              designSpeed:this.designSpeed}})
  },
  displayDesignSpeed(){
    console.log(this.roadDesign)
    console.log(this.roadClass)
    console.log(this.roadType)
    console.log(this.designSpeed)
  },
}
}
</script>

<style scoped>
.button-group {
  display: flex;
  justify-content: space-around;
  padding: 0 15%
}
.options {
  background-color: #FAFAFA;
  height: 55%;
  padding-top:10%
}
.header {
  background-color: #E0E0E0;
  height: 45%;
}
.center {
  display:flex;
  align-items: center;
  flex-direction: column;
}
.road {
  height:19vh;
  width:102vw;
  transform: rotate(-2deg);
  position: absolute;
  top: 40%;
  left: -0.5%;
  z-index:1;
}
.mascot {
  height: 20vh;
  position: absolute;
  top: 30%;
  left: 22.5%;
  z-index:2;
}
.question {
  background-color:white;
  height: fit-content;
  width:35%;
  padding: 1.25rem 2rem;
  border-radius:1.5rem
}
.pages {
    display: flex;
    margin: 3% 0
}
</style>
