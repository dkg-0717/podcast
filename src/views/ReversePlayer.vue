<template>
  <div class="reversePlayer">
    <reverseButton />

    <p class="reverse-text">
      Muy buen día… ¿cómo están? ¿Cómo se han sentido? Hemos estado platicado
      acerca de la situación que vivimos actualmente, llena de incertidumbre,
      que provoca estrés en todos nosotros al no saber que nos espera en el
      futuro, pero… ¿para qué vivir en un tiempo que no es el presente?
    </p>

    <p class="reverse-text">
      Pensar en que pasará después es la principal causa de estrés en el ser
      humano y es que… normalmente estamos en nuestra casa y pensamos en lo que
      haremos en el trabajo y cuando estamos en el trabajo pensamos en lo que
      haremos en nuestras vacaciones y así, no disfrutamos lo que está
      sucediendo en el momento actual.
    </p>

    <p class="reverse-text">
      Te quiero compartir lo siguiente: Hace unos días leí en el libro “Dios
      nunca parpadea” de Regina Brett una anécdota sobre su aventura en los
      rápidos, el guía al dar las instrucciones les dijo lo siguiente: “Si te
      caes de la balsa no intentes pararte, no te aferres a las rocas, no trates
      de nadar contra el río, el río ganará. Si te caes, relájate, deja que el
      río te lleve, te llevará a aguas tranquilas” ¿Y sabes qué?
    </p>

    <p class="reverse-text">
      Creo que en la vida pasa lo mismo, de repente tenemos situaciones
      complicadas, que están totalmente fuera de nuestro control, y que lo único
      que podemos hacer es identificar lo que sí nos corresponde, tomar cartas
      en el asunto – el control de tu vida -, y después relajarte, no aferrarte
      a las situaciones, a los lugares, a las personas, al trabajo, a nada…
      relájate para que la vida te lleve a aguas tranquilas. En estos momentos,
      ¿ya identificaste cuáles son las rocas a las que te estás sujetando y no
      te permiten avanzar?
    </p>

    <p class="reverse-text">
      En edivers queremos acompañarte en este proceso, para que
      independientemente de los diferentes escenarios y desafíos que estés
      enfrentando la situación se transforme en algo positivo para tu futuro.
    </p>

    <p class="reverse-text">
      Si quieres saber más acerca de lo que significa “Fluir” y cómo puedes
      lograrlo, mantente atento a nuevos materiales que tendremos listos para
      ti. Y recuerda: La vida es como una pista de carreras, son las curvas las
      que hacen que valga la pena.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/plugins/round";
import gsap from "gsap";
import reverseButton from "@/components/reverseButton.vue";
import { CSSPlugin } from "gsap/CSSPlugin";

export default {
  name: "player",
  components: {
    reverseButton,
  },
};
</script>

<style scoped>
@import url("../assets/css/reversePlayer.css");
</style>
