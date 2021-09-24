<template>
  <div style="width: 100%;">
    <p class="heading">Frequently Searched Specific Section</p>
    <p class="subHeading">Top 5</p>
    <table>
      <tr>
        <th>Section</th>
        <th>No. Searches</th>
      </tr>
      <tr>
        <td>Super-Elevation</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Vertical Alignment</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Slip-Road</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Sight Distance</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Horizontal Alignment</td>
        <td>2</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SpecificTable",
  components: {
  },
  data() {
    return {
    };
  },

};
</script>

<style scoped>
* {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
.heading {
  color: #263238;
  font-size: 18px;
  margin-top: 10px;
}
.subHeading {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
}
th {
  font-size: 18px;
  font-weight: normal;
  border-bottom: solid 1px black;
}
td {
  font-size: 20px;
}
th:nth-child(2), td:nth-child(2) {
  text-align: center;
  width: 1%;
}
</style>