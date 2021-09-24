<template>
  <div class="wrapper">
    <div class="dashboard">

      <!-- header -->
      <div class="header">
        <h1 style="font-size: 2rem; color: #4f4f4f;"> Analytics Dashboard </h1>
        <LogoutButton/>
      </div>

      <div class="graphs">
        <!-- row 1 -->
        <div class="graphFirstRow">
          <div class="summary">
            <SummaryData/>
          </div>
          <div>
            <canvas id="donut-chart"></canvas>
          </div>
          <div>
            <canvas id="line-chart"></canvas>
          </div>
        </div>
        <!-- row 2 -->
        <div class="graphSecondRow">
          <div>
            <canvas id="bar-chart"></canvas>
          </div>
          <div>
            <SpecificTable/>
          </div>
        </div>
        <!-- row 3 -->
        <div class="graphThirdRow">
          <div>
            <canvas id="roadclass-chart"></canvas>
          </div>
          <div>
            <canvas id="roadtype-chart"></canvas>
          </div>
          <div>
            <canvas id="designspeed-chart"></canvas>
          </div>
          <div>
            <canvas id="changejunction-chart"></canvas>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import { Chart, registerables } from 'chart.js';
import LogoutButton from '../components/LogoutButton.vue';
import SummaryData from '../components/graphs/SummaryData.vue';
import donutChartData from '../components/graphs/DonutChartData.js';
import lineChartData from '../components/graphs/LineChartData.js';
import barChartData from '../components/graphs/BarChartData.js';
import SpecificTable from '../components/graphs/SpecificTable.vue';
import roadClassData from '../components/graphs/RoadClassData.js';
import roadTypeData from '../components/graphs/RoadTypeData.js';
import designSpeedData from '../components/graphs/DesignSpeedData.js';
import changeJunctionData from '../components/graphs/ChangeJunctionData.js';
Chart.register(...registerables);

export default {
  name: "Dashboard",
  components: {
    LogoutButton,
    SummaryData,
    SpecificTable
  },
  data() {
    return {
      donutChartData,
      lineChartData,
      barChartData,
      roadClassData,
      roadTypeData,
      designSpeedData,
      changeJunctionData
    };
  },
  mounted() {
    const chart1 = document.getElementById('donut-chart').getContext("2d", {alpha: false});
    const chart2 = document.getElementById('line-chart').getContext("2d", {alpha: false});
    const chart3 = document.getElementById('bar-chart').getContext("2d", {alpha: false});
    const chart4 = document.getElementById('roadclass-chart').getContext("2d", {alpha: false});
    const chart5 = document.getElementById('roadtype-chart').getContext("2d", {alpha: false});
    const chart6 = document.getElementById('designspeed-chart').getContext("2d", {alpha: false});
    const chart7 = document.getElementById('changejunction-chart').getContext("2d", {alpha: false});
    new Chart(chart1, this.donutChartData);
    new Chart(chart2, this.lineChartData);
    new Chart(chart3, this.barChartData);
    new Chart(chart4, this.roadClassData);
    new Chart(chart5, this.roadTypeData);
    new Chart(chart6, this.designSpeedData);
    new Chart(chart7, this.changeJunctionData);
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans);
* {
  margin: 0;
  padding: 0;
  font-family: 'IBM Plex Sans', sans-serif;
}
.wrapper {
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  min-height: 100vh;
}
.dashboard {
  background: #fafafa;
  margin: 2.5rem;
  padding: 1.5rem 2.5rem;
  border-radius: 1.5rem;
  /** box-shadow based on figma prototype */
  box-shadow: 0px 100px 169px rgba(151, 217, 225, 0.07),
              0px 50.05px 84.58px rgba(151, 217, 225, 0.0532),
              0px 30.15px 50.95px rgba(151, 217, 225, 0.0456),
              0px 19.32px 32.65px rgba(151, 217, 225, 0.04),
              0px 12.52px 21.16px rgba(151, 217, 225, 0.035),
              0px 7.88px 13.32px rgba(151, 217, 225, 0.03),
              0px 4.53px 7.65px rgba(151, 217, 225, 0.0244),
              0px 1.99px 3.37px rgba(151, 217, 225, 0.0168);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.graphFirstRow > div, .graphSecondRow > div, .graphThirdRow > div {
  display: flex;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: inset 0px 3px 4px rgba(176,190,197,0.8),
              inset 2px 0px 2px rgba(176,190,197,0.1),
              inset -2px 0px 2px rgba(176,190,197,0.1);
  padding: 1.5rem 2rem;
}
.graphFirstRow {
  display: grid;
  grid-template-columns: 20% 20% 56%;
  grid-gap: 2%;
  margin-bottom: 2rem;
  height: 400px;
}
.graphSecondRow {
  display: grid;
  grid-template-columns: 42% 56%;
  grid-gap: 2%;
  margin-bottom: 2rem;
  height: 350px;
}
.graphThirdRow {
  display: grid;
  grid-template-columns: 30% 20% 28% 17.5%;
  grid-gap: 1.5%;
  margin-bottom: 1rem;
  height: 375px;
}
.summary {
  display: grid;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>