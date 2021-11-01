<template>
  <div>
    <img @click="show" :src="require(`@/assets/${imgSrc}`)">
    <vue-easy-lightbox
      :visible="visible"
      :imgs="require(`@/assets/${imgSrc}`)"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>

export default {
  props:{
    imgSrc: String
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style scoped>
img:hover{
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
</style>