<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <!-- <q-card-section>
        <div class="text-h6 text-center">About Me</div>
        <div class="text-subtitle2"></div>
      </q-card-section> -->
      <div class="items-center justify-center display-flex">
        <q-img
          class="align-center"
          style="height: 280px; max-width: 300px"
          src="~assets/webdeveloper.png"
        />
      </div>

      <q-card-section class="q-pt-none text-white">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </q-page>
</template>
<style lang="scss">
@media only screen and (max-width: 600px) {
  .my-card {
    width: 100%;
    max-width: 90% !important;
  }
}
.my-card {
  width: 100%;
  max-width: 50%;
  // background: radial-gradient(circle, rgb(255 255 255 / 60%) 0%, #e0e0e0 100%);
  background: transparent;
  background-image: url();
}
.display-flex {
  display: flex;
  margin: 0 auto;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  setup() {
    return {
      lorem:
        'A Techie from the Halwa city also known as Tirunelveli from down south of Tamil Nadu. Having completed my schooling from St.Xaviers Matric Higher Secondary School and went on to be a Under Graduate in Dr. Sivanthi Aditanar College of Engineering in Tiruchendur from 2014 to 2018. After completing my college started my carrer as Front End Developer in the year 2018. Having around 4 years of Experience, worked in leading organizations with various domains.',
    };
  },
});
</script>
