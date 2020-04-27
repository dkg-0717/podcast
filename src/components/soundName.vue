<template>
  <div class="info">
    <p class="title">{{ soundName }}</p>
  </div>
</template>

<script>
export default {
  props: ["soundName"],
};
</script>

<style>
@import url("../assets/css/soundName.css");
</style>
