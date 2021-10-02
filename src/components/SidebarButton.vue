<template>
  <div>
    <button type="button" class="btn btn-outline-dark" :abled=!isActive v-bind:style="[isActive ? active : inactive]">
      {{name}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'SidebarButton',
  props: {
    isActive: Boolean,
    name: String
  },
  data() {
    return {
      active: {
        backgroundColor: 'gold',
        color:'white',
        cursor: 'default'
      },
      inactive: {
        backgroundColor: '#273B8C',
        color:'white'
      },
      /*
      sections: [
          {
              id: 1,
              name: "Road Cross-Sections and Elements"
          },
          {
              id: 2,
              name: "Grade"
          },
          {
              id: 3,
              name: "Longitudinal Friction Factor"
          },
          {
              id: 4,
              name: "Side Friction Factor"
          },
          {
              id: 5,
              name: "Crossfall"
          },
          {
              id: 6,
              name: "Corner Radius"
          },
          {
              id: 7,
              name: "Merging Angle"
          },
          {
              id: 8,
              name: "Lane Width"
          },
          {
              id: 9,
              name: "Signs"
          },
          {
              id: 10,
              name:"Lateral Clearance"
          },
          {
              id: 11,
              name: "Super-Elevation"
          },
          {
              id: 12,
              name: "Sight Distance"
          },
          {
              id: 13,
              name: "Curve Length"
          },
          {
              id: 14,
              name: "Horizontal Alignment"
          },
          {
              id: 15,
              name: "Vertical Alignment"
          },
          {
              id: 16,
              name: "Slip-road/ Traffic Island"
          },
          {
              id: 17,
              name: "Combination of Horizontal & Vertical Alignment"
          }
      ]
      */
    };
  }
}
</script>

<style scoped>
button {
    width: 200px;
    margin: 20 auto;
    display: inline;
    padding: 30;
    height: 50px;
    background: #273B8C;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    font-style: normal;
    font-weight: normal;
    color: #FFFFFF;
    font-size:15px;
}
</style>