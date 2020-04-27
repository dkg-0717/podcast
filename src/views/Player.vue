<template>
  <div class="player">
    <reverse-button />
    <div class="coverImage"></div>
    <!-- <div class="shadow"></div> -->
    <soundName :soundName="getsoundName" />
    <loader v-show="loader" />
    <div class="buttonContainer">
      <back-button @previusSound="previusSound" />
      <play-button-container
        @playSound="playSound"
        :isLoaded="isLoaded"
        :playing="playing"
      />
      <next-button @click="nextSound" />
    </div>
    <progress-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import "@/plugins/round";
import gsap from "gsap";
import loader from "@/components/shared/loader.vue";
import playButtonContainer from "@/components/playButton.vue";
import backButton from "@/components/backButton.vue";
import nextButton from "@/components/nextButton.vue";
import reverseButton from "@/components/reverseButton.vue";
import progressBar from "@/components/progressBar.vue";
import soundName from "@/components/soundName.vue";
import familia from "../assets/familia.png";

import actPlayer from "@/mixins/actionsPlayer";
import anPlayer from "@/mixins/animationPlayer";

export default {
  name: "player",
  mixins: [actPlayer, anPlayer],
  data() {
    return {
      sound: null,
      isLoaded: false,
      loader: false,
    };
  },
  components: {
    loader,
    reverseButton,
    soundName,
    progressBar,
    backButton,
    nextButton,
    playButtonContainer,
  },
  computed: {
    getsoundName() {
      return this.sounds[0];
    },
  },
  methods: {
    setBackground() {
      this.coverImage.style.background = `#fff url(${familia}) no-repeat center`;
      this.coverImage.style.backgroundSize = "cover";
    },
    over() {
      if (this.playing) {
        gsap.set([this.backButton, this.nextButton, this.playButton], {
          opacity: 1,
          pointerEvents: "auto",
        });
      }
    },
    leave() {
      if (this.playing) {
        gsap.set(this.playButton, { opacity: 0 });
        this.backButton.style.opacity = "0";
      }
    },
    loaded() {
      this.loader = false;
      this.isLoaded = true;
      this.startAnimation();
    },
    checkMedia() {
      return window.matchMedia("(orientation: portrait)").matches
        ? true
        : false;
    },
    removeImage(image) {
      document.querySelector(image).style.backgroundImage = null;
    },
    getImage() {
      let sm = ".coverImage";
      let l = ".player";
      let image = this.checkMedia() ? sm : l;
      this.checkMedia() ? this.removeImage(l) : this.removeImage(sm);
      this.coverImage = document.querySelector(image);
      this.coverImage.style.background = `#fff url(${require("../assets/portada.png")}) no-repeat center`;
      this.coverImage.style.backgroundSize = "cover";
    },
  },
  mounted() {
    this.loader = true;
    this.loadSounds();
    this.getImage();
    window.addEventListener("resize", this.getImage);
  },
};
</script>

<style scoped>
@import url("../assets/css/player.css");
</style>
