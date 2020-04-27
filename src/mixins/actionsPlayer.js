import gsap from "gsap";
import { createjs } from "../../node_modules/soundjs/lib/soundjs";

export default {
  data() {
    return {
      sounds: ["fluir"],
      sound: null,
      playing: null,
    };
  },
  methods: {
    playSound() {
      this.stopAnimation();
      this.isPlaying();
      this.showControls();
      this.setBackground();
    },
    isPlaying() {
      if (!this.playing) {
        if (this.sound && this.sound.paused) {
          this.resumeSound();
        } else {
          this.initSound();
        }
      } else {
        this.pauseSound();
      }
    },
    resumeSound() {
      this.playing = true;
      this.sound.paused = false;
    },
    pauseSound() {
      this.playing = false;
      this.sound.paused = true;
      this.tl.progress(0.25);
    },
    previusSound() {
      this.sound.position = 0;
    },
    nextSound() {
      console.log("click");
    },
    showControls() {
      gsap.set([this.backButton, this.nextButton], {
        opacity: 1,
      });
    },
    initSound() {
      this.playing = true;
      this.sound = createjs.Sound.play("fluir");
      this.sound.on("complete", this.stopInterval);
      this.initInterval();
    },
    loadSounds() {
      this.sounds.map((sound) => {
        let complete_path = require(`../assets/sounds/${sound}.mp3`);
        createjs.Sound.registerSound(complete_path, sound);
        createjs.Sound.on("fileload", this.loaded);
      });
    },
    progressEvent(sound) {
      this.initInterval(sound);
    },
    incrementProgress() {
      this.progressBar.style.width = `${(this.sound.position /
        this.sound.duration) *
        100}%`;
    },
    initInterval() {
      this.interval = setInterval(() => {
        this.incrementProgress();
      }, 30);
    },
    stopInterval() {
      this.playing = false;
      clearInterval(this.interval);
      this.startAnimation();
      this.progressBar.style.width = "0%";
    },
  },
};
