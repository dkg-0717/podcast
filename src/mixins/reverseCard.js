import gsap from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export default {
  mounted() {
    this.tl = gsap.timeline();
    this.player = document.querySelector(".player");
    this.reversePlayer = document.querySelector(".reversePlayer");
    this.reverseButton = this.reversePlayer.querySelector('.reverseButton__container')
    this.containerProgressBar = document.querySelector(
      ".container-progress-bar"
    );
  },
  methods: {
    reverseCard() {
      if (!this.player.classList.contains("reversed")) {
        this.reverseButton.classList.add("reversed-button")
        this.player.classList.add("reversed");
        this.tl
          .to(this.player, { rotationY: 180 })
          .to(this.player, { duration: 0.5, opacity: 0 })
          .to(this.reversePlayer, { opacity: 1 }, "-=0.5")
          .set(this.player, { zIndex: 0 })
          .set(this.reversePlayer, { zIndex: 1 });
      } else {
        this.resetPosition();
        this.player.classList.remove("reversed");
        setTimeout(() => {
          this.reverseButton.classList.remove("reversed-button")
        }, 500)
      }
    },
    resetPosition() {
      this.tl
        .to(this.reversePlayer, { opacity: 0 })
        .to(this.player, { duration: 0.5, opacity: 1 })
        .to(this.player, { rotationY: 0 }, "-=1.5")
        .set(this.player, { zIndex: 1, rotationY: 0 })
        .set(this.reversePlayer, { zIndex: 0, rotationY: 0 })
        .set(this.containerProgressBar, { position: "fixed", bottom: 0 });
    }
  }
};
