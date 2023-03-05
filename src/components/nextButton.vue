<template>
  <div class="nextButton" @click="nextSound"></div>
</template>

<script>
export default {
  methods: {
    nextSound() {
      this.$emit("nextSound");
    },
  },
};
</script>

<style>
@import url("../assets/css/nextButton.css");
</style>
