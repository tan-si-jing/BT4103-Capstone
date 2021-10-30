<template>
  <div>
    <img @click="show" :src="require(`${imgSrc}`)">

    <vue-easy-lightbox
      :visible="visible"
      :imgs="imgSrc"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

<script>
//import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox
  },
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