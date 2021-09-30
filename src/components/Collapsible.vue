<template>
    <div class="content">
      <div class="title" @click="collapse()">
        <div class="title-text">
          <b class="tab2">{{chapt}}</b><b>{{title}}</b>
        </div>
        <div class="title-icon">
          <span v-if="!displayInfo"><font-awesome-icon icon="angle-down" id="arrow"/></span>
          <span v-if="displayInfo"><font-awesome-icon icon="angle-up" id="arrow"/></span>
        </div>
      </div>
      <div class="information" v-show="displayInfo" style="font-size: 20px; margin-top: 1%;">
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
  },
  methods:{
    collapse: function() {
      this.displayInfo = !this.displayInfo;
    },
  }
}
</script>

<style scoped>
.content{
  font-size:18px;
  margin: 2% 10%;
  text-align: justify;
  padding-bottom:1%;
}
.title {
  cursor: pointer;
  display: flex;
  margin-top: 3%;
  padding: 1% 0;
  font-weight: bold;
}
.title-text {
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 20px;
}
.image {
    display: flex;
    justify-content:center;
    width:80%;
    margin-left: 3em; 
}
img {
    width: 100%;
}
p {
  font-size:20px;
}
.tab1 {
 margin-right: 2.5em
}
.tab2 {
 margin-right: 1.7em
}
.tab3 {
  margin-right: 1em
}
.tab4 {
  margin-right:0.2em;
}
.tab5 {
  margin-right: 1.2em
}
.img-container2{
    width: 50%;
    height: auto;
    margin-left: 3em; 
    margin-top: 3%;
    margin-bottom:3%;
}
.img-container2 img{
    width: 100%;
    height: auto;
}
.img-container4{
    width: 80%;
    height: auto;
    margin-left: 3em; 
}
.img-container4 img{
    width: 100%;
    height: auto;
}
</style>