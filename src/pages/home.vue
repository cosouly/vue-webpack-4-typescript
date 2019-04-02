<template>
  <div class="full-width center-content">
    <img src="static/img/logo.png" />
    <span>Hello {{ name }} from my Vue.js page, built with Webpack 4!</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Home",
  props: {
    name: {
      type: String,
      required: false
    }
  }
})
class Home extends Vue {}

export default Home;
</script>
