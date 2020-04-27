<template>
  <div class="playButton" @click="playSound">
    <figure>
      <template v-if="isLoaded && !playing">
        <img class="playButton--img" src="../assets/play.png" alt="" />
      </template>
      <template v-if="isLoaded && playing">
        <img class="playButton--img" src="../assets/pause.png" alt="" />
      </template>
    </figure>
  </div>
</template>

<script>
export default {
  name: "playButton",
  props: ["isLoaded", "playing"],
  methods: {
    playSound() {
      this.$emit("playSound");
    },
  },
};
</script>

<style>
@import url("../assets/css/playButton.css");
</style>
