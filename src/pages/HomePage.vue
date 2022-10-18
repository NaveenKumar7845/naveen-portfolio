<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section class="q-px-lg" avatar>
          <q-avatar size="5rem">
            <img src="~assets/naveen.jpg" />
          </q-avatar>
        </q-item-section>
        <div style="margin: auto">
          <q-item-section>
            <q-item-label caption>
              <h6 class="text-center q-ma-xs">
                Hey <span class="waving-hand">👋</span> This is me
              </h6>
            </q-item-label>
            <q-item-label>
              <h4 class="text-center q-ma-xs name-animation">
                Naveen Kumar
              </h4></q-item-label
            >
            <q-item-label caption>
              <h6 class="text-center q-ma-xs">Front End Developer</h6>
            </q-item-label>
          </q-item-section>
        </div>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          Techie by profession and Gamer by passion. Hopping over tech blogs to
          gather some knowledge over modern technologies.
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');
@media only screen and (max-width: 600px) {
  .my-card {
    width: 100%;
    max-width: 90% !important;
  }
}
.my-card {
  width: 100%;
  max-width: 50%;
  background: radial-gradient(circle, rgb(255 255 255 / 60%) 0%, #e0e0e0 100%);
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(16deg);
  }
  20% {
    transform: rotate(-6deg);
  }
  30% {
    transform: rotate(16deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(16deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.name-animation {
  font-family: 'Luckiest Guy', cursive;
  padding: 12px 14px;
  color: #ffffff;
  background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
  background-position: 0;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  text-decoration: none;
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}

.waving-hand {
  animation: wave 2.1s 0.6s infinite;
  transform-origin: 75% 75%;
  display: inline-block;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {},
  setup() {
    return {
      lorem:
        'Innovative Front End Developer with 4 years experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, JavaScript, Angular, Quasar and VueJs, plus modern libraries and frameworks. Passionate about usability and possess working knowledge of AI and Chatbots with a little experience in DialogFlow.',
    };
  },
});
</script>
