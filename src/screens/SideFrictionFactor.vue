<template>
  <table class="table table-borderless">
    <thead class="table">
      <tr>
      <td scope="header">4 &nbsp; Side Friction Factor</td>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td scope="row">
      <Collapsible chapt="4.1" title="">
        <div class="img-container4">
          <img src="../assets/Table10-7.png">
        </div>
        <p style="font-size: 16px;"> Referenced from:
          <a href="https://www.lta.gov.sg/content/dam/ltagov/industry_innovations/industry_matters/development_construction_resources/civil_standards/pdf/EGD09106A2_Overall.pdf#page=208" target='_blank'>
            CDC 10.4.2.5.1 - Side Friction Factor given Design Speed (page 208)</a>
        </p>

          <thead class="table">
              <th style="text-align:center">Design Speed, V(km/h) </th>
              <th style="text-align:center">Longitudinal Friction Factor, F </th>
            </thead>
            <tbody>
              <tr v-for="row in table" :key="row.id">
                <td style="text-align:center"> {{ row.des_speed }} </td>
                <td style="text-align:center"> {{ row.LFF}} </td>
              </tr>
            </tbody>

      </Collapsible>
      </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Collapsible from '../components/Collapsible.vue';

export default {
  components: {
    Collapsible
  },
   data(){
    return{
      designSpeed: this.$parent.choice.designSpeed,
      table: [],  
    }
  },
  methods:{
    filltable(speed){
      var speednum = Number(speed.substr(5,6))
      if(speednum == 40){
        console.log(speed)
        this.table = [
          { des_speed :40, LFF :0.16},
          { des_speed:50, LFF :0.16},   
        ]
      }else if (speednum == 50) {
        console.log(speednum)
        this.table = [
          { des_speed :40, LFF :0.16},
          { des_speed:50, LFF :0.16}, 
          { des_speed: 60, LFF :0.15},  
        ]
      }else if (speednum == 60) {
        console.log(speednum)
        this.table = [
          { des_speed: 50, LFF :0.16},
          { des_speed: 60, LFF :0.15},   
          { des_speed :70, LFF :0.15},
        ]
      }else if (speednum == 70) {
        console.log(speednum)
        this.table = [
          { des_speed: 60, LFF :0.15},
          { des_speed :70, LFF :0.15},   
          { des_speed :80, LFF :0.14},   
        ]
      }else if (speednum == 80) {
        console.log(speed)
        this.table = [
          { des_speed :70, LFF :0.15},
          { des_speed :80, LFF :0.14},   
          { des_speed :90, LFF :0.13},
        ]
      } else {
        console.log(speednum)
        this.table = [
          { des_speed :80, LFF :0.14},
          { des_speed :90, LFF :0.13},   
        ]
      }
    }
  },
    created(){
    this.filltable(this.designSpeed)
  }
}
</script>

<style scoped>
table {
    width: 70vw;
    height: auto;
    margin-top: 5vh;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
}
.table thead td {
    background-color: #273B8C;
    color: white;
    height: 6vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-size:22px;
    text-indent:1.5%;
     vertical-align: middle;
}
tbody tr{
    background-color: #ffffff;
    text-align: center;
}
tbody tr:last-child td{ 
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px; 
    height: 23vh;
}

</style>
