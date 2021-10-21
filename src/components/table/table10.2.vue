<template>
<table class="table table-bordered">
  <thead>
      <p style="text-align:left; font-size:16px;"><b>Table 10.2</b></p>
    <tr>
      <th class="col-2" rowspan="2">Parameter</th>
      <th scope="col" colspan="6">Road Category</th>
    </tr>
    <tr>
        <td><b>1</b></td>
        <td><b>1A</b></td>
        <td><b>2</b></td>
        <td><b>3</b></td>   
        <td><b>4/5</b></td>   
        <td><b>Special Needs Access</b></td>       
    </tr>
  </thead>
  
  <tbody class="side">
    <tr class="text-center">
      <th scope="row">Design Speed (km/h)</th>
      <td>90</td>
      <td>80</td>
      <td>70</td>
      <td>60</td>
      <td>50</td>
      <td>40</td>
    </tr>

    <tr class="text-center">
      <th scope="row">Desirable Minimum Radius (m)</th>
      <td>355</td>
      <td>270</td>
      <td>195</td>
      <td>145</td>
      <td>95</td>
      <td>65</td>
    </tr>

    <tr class="text-center">
      <th scope="row">Absolute Minimum Radius (m)</th>
      <td>340</td>
      <td>255</td>
      <td>185</td>
      <td>135</td>
      <td>90</td>
      <td>60</td>
    </tr>
    
    <tr class="text-center">
      <th scope="row">Desirable Maximum super-elevation (%)</th>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
    </tr>

    <tr class="text-center">
      <th scope="row">Absolute Maximum super-elevation (%)</th>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
table {
    font-size:16px;
    border-color:black;
}

table, th, td {
    text-align: center;
    vertical-align: middle;
}
.side{
    font-size:13.5px;
}
</style>