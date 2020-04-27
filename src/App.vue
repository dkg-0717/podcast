<template>
  <main>
    <navbar />
    <div class="container">
      <Player />
      <ReversePlayer />
    </div>
  </main>
</template>

<script>
import Player from "./views/Player.vue";
import ReversePlayer from "./views/ReversePlayer.vue";
import navbar from "./components/shared/navbar.vue";
import { initCourse, finishCourse } from "@/plugins/scorm/scorm_handler.js";

export default {
  name: "home",
  components: {
    Player,
    ReversePlayer,
    navbar,
  },
  mounted() {
    this.setHeight();
    initCourse();
    finishCourse("completed");
  },
  methods: {
    setHeight() {
      let elem = document.scrollingElement || document.documentElement;
      let body = document.querySelector("body");
      let container = document.querySelector(".container");
      body.style.height = `${elem.clientHeight}px`;
      container.style.height = `${elem.clientHeight - 60}px`;
    },
  },
};
</script>

<style>
@import url("./assets/css/styles.css");
</style>
