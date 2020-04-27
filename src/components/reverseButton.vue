<template>
  <div class="reverseButton__container">
    <button
      id="reverseButton"
      class="reverseButton"
      @click="reverseCard"
    ></button>
  </div>
</template>

<script>
import gsap from "gsap";
import Driver from "driver.js";
import { CSSPlugin } from "gsap/CSSPlugin";
import reverseCard from "@/mixins/reverseCard";

gsap.registerPlugin(CSSPlugin);
CSSPlugin.defaultTransformPerspective = 1000;

export default {
  mixins: [reverseCard],
  mounted() {
    setTimeout(this.guide, 500);
  },
  methods: {
    guide() {
      const driver = new Driver();
      driver.highlight({
        element: "#reverseButton",
        popover: {
          title: "Transcripción",
          description: "Presiona el botón para leer la transcripción",
          position: "left",
        },
      });
    },
  },
};
</script>

<style>
@import url("../assets/css/reverseButton.css");
</style>
