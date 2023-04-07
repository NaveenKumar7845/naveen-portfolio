<!-- eslint-disable vue/valid-v-on -->
<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <q-list class="text-white shadow-2 rounded-borders">
        <q-item>
          <q-item-section>
            <q-btn
              color="secondary"
              v-if="!isFileDownloading"
              icon-right="download"
              label="Click to Download my Resume"
              href="https://drive.google.com/file/d/1jOarTyi0c0zm88eKRHzIHKOT5EZka-VA/view?usp=sharing"
              target="_blank"
              download
              @click="downloadResume()"
            >
              <a></a>
            </q-btn>
            <q-linear-progress
              v-if="isFileDownloading"
              query
              color="accent"
              class="q-mt-sm"
            />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="email"> </q-avatar>
          </q-item-section>
          <q-item-section
            ><a href="mailto:naveenbtechit2015@gmail.com"
              >naveenbtechit2015@gmail.com</a
            ></q-item-section
          >
        </q-item>

        <q-separator inset dark />

        <q-item>
          <q-item-section avatar>
            <q-avatar icon="phone"> </q-avatar>
          </q-item-section>
          <q-item-section
            ><a href="tel:784-512-2617">+91-7845122617</a></q-item-section
          >
        </q-item>
        <q-separator inset dark />

        <q-item>
          <q-item-section avatar>
            <q-avatar icon="place"> </q-avatar>
          </q-item-section>
          <q-item-section>Chennai, Tamil Nadu, IN</q-item-section>
        </q-item>

        <div class="q-pa-md align-center q-gutter-sm">
          <q-btn
            rounded
            color="blue"
            text-color="white"
            icon="fa-brands fa-linkedin"
            href="https://www.linkedin.com/in/naveen-kumar-20b026124/"
            target="_blank"
          >
          </q-btn>
          <q-btn
            rounded
            color="red"
            text-color="white"
            href="https://www.instagram.com/nellai_n_aveen/"
            target="_blank"
            icon="fa-brands fa-instagram"
          />
          <q-btn
            rounded
            color="green"
            text-color="white"
            href="https://api.whatsapp.com/send?phone=7845122617"
            target="_blank"
            icon="fa-brands fa-whatsapp"
          />
        </div>
      </q-list>
    </q-card>
  </q-page>
</template>

<style>
@media only screen and (max-width: 600px) {
  .my-card {
    width: 100%;
    max-width: 90% !important;
  }
}
.map {
  width: min(100%);
}
.my-card {
  width: 100%;
  max-width: 50%;
  background: transparent;
  background-image: url();
}
.display-flex {
  display: inline-flex;
  margin: 0 auto;
}
.align-center {
  text-align: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  components: {},
  data() {
    return {
      isFileDownloading: false,
    };
  },
  methods: {
    downloadResume: function () {
      this.isFileDownloading = true;

      setTimeout(() => {
        // const url = '~assets/webdeveloper.png';
        // const label = 'Naveen Kumar D';
        // axios
        //   .get(url, { responseType: 'blob' })
        //   .then((response) => {
        //     const blob = new Blob([response.data], { type: 'application/pdf' });
        //     const link = document.createElement('a');
        //     link.href = URL.createObjectURL(blob);
        //     link.download = label;
        //     link.click();
        //     URL.revokeObjectURL(link.href);
        //   })
        //   .catch(console.error);
        this.isFileDownloading = false;
      }, 200);
    },
  },
  setup() {
    return {
      lorem: 'test',
    };
  },
});
</script>
