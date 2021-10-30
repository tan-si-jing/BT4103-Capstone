<template>
    <div class="subcontent">
      <div class="title" @click="collapse()">
        <div class="collapseTitle-text">
          <b>{{chapt}}</b><b>{{title}}</b>
        </div>
        <div class="title-icon">
          <span v-if="!(displayInfo)"><font-awesome-icon icon="angle-down" id="arrow"/></span>
          <span v-if="displayInfo"><font-awesome-icon icon="angle-up" id="arrow"/></span>
        </div>
      </div>
      <div class="information" v-show="displayInfo">
        <slot/>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      displayInfo: false
    }
  },
  props: {
    title: String,
    chapt: String,
    levelDisplay: Boolean
  },
  methods:{
    collapse: function() {
      this.displayInfo = !this.displayInfo;
    },
  },
  watch: {
    levelDisplay: function (val) {
      this.displayInfo = val
    },
  }
}
</script>