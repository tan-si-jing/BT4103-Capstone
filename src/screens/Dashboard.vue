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
          <div>5</div>
          <div>6</div>
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
Chart.register(...registerables);

export default {
  name: "Dashboard",
  components: {
    LogoutButton,
    SummaryData,
  },
  data() {
    return {
      donutChartData: donutChartData,
      lineChartData: lineChartData,
      barChartData: barChartData,
    };
  },
  mounted() {
    const chart1 = document.getElementById('donut-chart');
    new Chart(chart1, this.donutChartData);
    const chart2 = document.getElementById('line-chart');
    new Chart(chart2, this.lineChartData);
    const chart3 = document.getElementById('bar-chart');
    new Chart(chart3, this.barChartData);
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
.graphFirstRow > div, .graphSecondRow > div {
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
  grid-template-columns: 22% 45% 30%;
  grid-gap: 1.5%;
  margin-bottom: 1rem;
  height: 350px;
}
.summary {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  text-align: center;
  word-break: break-word;
}
</style>