<template>
  <div class="backButton" @click="previusSound"></div>
</template>

<script>
export default {
  methods: {
    previusSound() {
      this.$emit("previusSound");
    },
  },
};
</script>

<style>
@import url("../assets/css/backButton.css");
</style>
