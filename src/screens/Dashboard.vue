<template>
  <div class="wrapper">
    <div class="dashboard">

      <!-- header -->
      <div class="header">
        <h1 style="font-size: 2rem; color: #4f4f4f;"> Analytics Dashboard </h1>
        <ExtractButton/>
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
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
        <!-- row 2 -->
        <div class="graphSecondRow">
          <div>
            <SpecificTable/>
          </div>
        </div>
        <!-- row 3 -->
        <div class="graphThirdRow">
          <div>
            <canvas id="roadclass-chart"></canvas>
          </div>
        </div>
        <!-- row 4 -->
        <div class="graphFourthRow">
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
import database from '../firebase.js'
import 'firebase/firestore';

import { Chart, registerables } from 'chart.js';
import ExtractButton from '../components/ExtractButton.vue';
import SummaryData from '../components/graphs/SummaryData.vue';
import donutChartData from '../components/graphs/DonutChartData.js';
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
    ExtractButton,
    SummaryData,
    SpecificTable
  },
  data() {
    return {
      donutChartData,
      barChartData,
      roadClassData,
      roadTypeData,
      designSpeedData,
      changeJunctionData,
      docID: 'H1uwnxYevFozEeNv7SiY'
    };
  },
  methods: {
    getValues: function(donutChart, barChart, roadClassChart, roadTypeChart, designSpeedChart, changeJunctionChart) {
      database.collection('search_parameters')
              .doc(this.docID)
              .get()
              .then(querySnapShot => {
                // donut chart - user type breakdown
                donutChart.data.datasets[0].data[0] = querySnapShot.data().engineerSpecific + querySnapShot.data().engineerGuide;
                donutChart.data.datasets[0].data[1] = querySnapShot.data().consultantSpecific + querySnapShot.data().consultantGuide;
                donutChart.data.datasets[0].data[2] = querySnapShot.data().publicSpecific + querySnapShot.data().publicGuide;
                donutChart.update();
                // bar chart - comparison of search options
                barChart.data.datasets[0].data[0] = querySnapShot.data().engineerSpecific;
                barChart.data.datasets[0].data[1] = querySnapShot.data().engineerGuide;
                barChart.data.datasets[1].data[0] = querySnapShot.data().consultantSpecific;
                barChart.data.datasets[1].data[1] = querySnapShot.data().consultantGuide;
                barChart.data.datasets[2].data[0] = querySnapShot.data().publicSpecific;
                barChart.data.datasets[2].data[1] = querySnapShot.data().publicGuide;
                barChart.update();
                // road classification
                roadClassChart.data.datasets[0].data[0] = querySnapShot.data()[ 'engineer-expressway' ]
                roadClassChart.data.datasets[0].data[1] = querySnapShot.data()[ 'engineer-semiExpressway' ]
                roadClassChart.data.datasets[0].data[2] = querySnapShot.data()[ 'engineer-majorArterial' ]
                roadClassChart.data.datasets[0].data[3] = querySnapShot.data()[ 'engineer-minorArterial' ]
                roadClassChart.data.datasets[0].data[4] = querySnapShot.data()[ 'engineer-primaryAccess' ]
                roadClassChart.data.datasets[0].data[5] = querySnapShot.data()[ 'engineer-localAccess' ]

                roadClassChart.data.datasets[1].data[0] = querySnapShot.data()[ 'consultant-expressway' ]
                roadClassChart.data.datasets[1].data[1] = querySnapShot.data()[ 'consultant-semiExpressway' ]
                roadClassChart.data.datasets[1].data[2] = querySnapShot.data()[ 'consultant-majorArterial' ]
                roadClassChart.data.datasets[1].data[3] = querySnapShot.data()[ 'consultant-minorArterial' ]
                roadClassChart.data.datasets[1].data[4] = querySnapShot.data()[ 'consultant-primaryAccess' ]
                roadClassChart.data.datasets[1].data[5] = querySnapShot.data()[ 'consultant-localAccess' ]

                roadClassChart.data.datasets[2].data[0] = querySnapShot.data()[ 'public-expressway' ]
                roadClassChart.data.datasets[2].data[1] = querySnapShot.data()[ 'public-semiExpressway' ]
                roadClassChart.data.datasets[2].data[2] = querySnapShot.data()[ 'public-majorArterial' ]
                roadClassChart.data.datasets[2].data[3] = querySnapShot.data()[ 'public-minorArterial' ]
                roadClassChart.data.datasets[2].data[4] = querySnapShot.data()[ 'public-primaryAccess' ]
                roadClassChart.data.datasets[2].data[5] = querySnapShot.data()[ 'public-localAccess' ]
                roadClassChart.update(); 
                // road type
                roadTypeChart.data.datasets[0].data[0] = querySnapShot.data().undividedRoad;
                roadTypeChart.data.datasets[0].data[1] = querySnapShot.data().slipRoad;
                roadTypeChart.data.datasets[0].data[2] = querySnapShot.data().dualRoad;
                roadTypeChart.update();
                // design speed
                designSpeedChart.data.datasets[0].data[0] = querySnapShot.data().speed40;
                designSpeedChart.data.datasets[0].data[1] = querySnapShot.data().speed50;
                designSpeedChart.data.datasets[0].data[2] = querySnapShot.data().speed60;
                designSpeedChart.data.datasets[0].data[3] = querySnapShot.data().speed70;
                designSpeedChart.data.datasets[0].data[4] = querySnapShot.data().speed80;
                designSpeedChart.data.datasets[0].data[5] = querySnapShot.data().speed90;
                designSpeedChart.update();
                // change junction
                changeJunctionChart.data.datasets[0].data[0] = querySnapShot.data().changeJunctionYes;
                changeJunctionChart.data.datasets[0].data[1] = querySnapShot.data().changeJunctionNo;
                changeJunctionChart.update();
                })
    },
  },
  mounted() {
    // render charts
    const chart1 = document.getElementById('donut-chart').getContext("2d", {alpha: false});
    const chart2 = document.getElementById('bar-chart').getContext("2d", {alpha: false});
    const chart3 = document.getElementById('roadclass-chart').getContext("2d", {alpha: false});
    const chart4 = document.getElementById('roadtype-chart').getContext("2d", {alpha: false});
    const chart5 = document.getElementById('designspeed-chart').getContext("2d", {alpha: false});
    const chart6 = document.getElementById('changejunction-chart').getContext("2d", {alpha: false});
    var donutChart = new Chart(chart1, this.donutChartData);
    var barChart = new Chart(chart2, this.barChartData);
    var roadClassChart = new Chart(chart3, this.roadClassData);
    var roadTypeChart = new Chart(chart4, this.roadTypeData);
    var designSpeedChart = new Chart(chart5, this.designSpeedData);
    var changeJunctionChart = new Chart(chart6, this.changeJunctionData);
    // firebase
    this.getValues(donutChart, barChart, roadClassChart, roadTypeChart, designSpeedChart, changeJunctionChart);
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
.graphFirstRow > div, .graphSecondRow > div, .graphThirdRow > div, .graphFourthRow > div {
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
  grid-template-columns: 100%;
  margin-bottom: 2rem;
  height: 350px;
}
.graphThirdRow {
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 2rem;
  height: 350px;
}
.graphFourthRow {
  display: grid;
  grid-template-columns: 30% 43% 23%;
  grid-gap: 2%;
  margin-bottom: 1rem;
  height: 350px;
}
.summary {
  display: grid;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>