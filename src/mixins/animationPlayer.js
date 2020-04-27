import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

export default {
  data() {
    return {
      nextButton: null,
      backButton: null,
      playButton: null,
      progressBar: null,
      info: null,
    };
  },
  methods: {
    startAnimation() {
      gsap.registerPlugin(CSSPlugin);
      this.tl = new gsap.timeline();
      this.tl
        .fromTo(this.info, 0.7, { opacity: 0 }, { opacity: 1, ease: "back" })
        .set([this.playButton], { opacity: 1 })
        .from(this.playButton, 1, {
          scale: 0,
          ease: "elastic.out(1, 0.3)",
        })
        .fromTo(
          this.playButton,
          1,
          { scale: 1 },
          { scale: 1.1, yoyo: true, repeat: -1 }
        );
    },
    stopAnimation() {
      this.progressBar.style.width = `0%`;
      this.tl.kill();
    },
  },
  mounted() {
    this.playButton = document.querySelector(".playButton");
    this.progressBar = document.querySelector(".progress-bar");
    this.info = document.querySelector(".info");
    this.backButton = document.querySelector(".backButton");
    this.nextButton = document.querySelector(".nextButton");
  },
};
