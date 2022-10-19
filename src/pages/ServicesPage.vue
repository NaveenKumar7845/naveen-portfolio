<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <!-- <q-card-section class="text-center">
        <div class="text-h6">{{ tab }}</div>
      </q-card-section> -->

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Experinece" name="Experinece" />
        <q-tab label="Education" name="Education" />
      </q-tabs>

      <q-separator />

      <q-tab-panels class="tab-content" v-model="tab" animated>
        <q-tab-panel name="Experinece">
          <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry class="text-center" heading>
              Professional Experience
              <br />
            </q-timeline-entry>

            <q-timeline-entry
              title="NielsenIQ - Software Engineer"
              subtitle="November, 2021 - Till Date"
              side="left"
            >
              <div>
                Worked as UI developer in a product in Market Research Domain
                Retail Measurement System. Contributed towards various modules
                using Tech stack Angular, HTML, CSS with Java Rest API.
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="Agilysys Technlogies - Software Analyst"
              subtitle="September, 2020 - November 2021"
              side="right"
            >
              <div>
                Worked as UI developer in a product in Hospitality Domain
                Property Management System (PMS) for Hotel’s. Contributed
                towards various modules like Reservation, Housekeeping and
                Reporting using Tech stack Angular, HTML, CSS with Java Rest
                API. Also been a part of team developing Progressive web
                application for the House Keeping module using Quasar Framework
                (Vue Js).
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="Atos Syntel - Associate Consultant"
              subtitle="December 2018 - August 2020"
              side="left"
            >
              <div>
                Worked as a full stack developer, major part of my work is in
                web development in Angular, HTML, JQuery and CSS with SAP ABAP
                as RESTful service and also developed a chat bot using
                dialogflow and the project is related to SAP Retail Domain.
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-tab-panel>

        <q-tab-panel name="Education">
          <q-timeline :layout="layout" color="secondary">
            <q-timeline-entry class="text-center" heading>
              Education
              <br />
            </q-timeline-entry>

            <q-timeline-entry
              title="Bachelor of Information Technology"
              subtitle="2014 - 2018"
              side="left"
            >
              <div>
                From Dr.Sivanthi Aditanar College of Engineering and Technology
                with 66%
              </div>
            </q-timeline-entry>

            <q-timeline-entry
              title="Higher Secondary"
              subtitle="2014"
              side="right"
            >
              <div>
                From St. Xaviers Matric Higher Secondary School with 82%
              </div>
            </q-timeline-entry>

            <q-timeline-entry title="SSLC" subtitle="2012" side="left">
              <div>
                From St. Xaviers Matric Higher Secondary School with 91%
              </div>
            </q-timeline-entry>
          </q-timeline>
        </q-tab-panel>
      </q-tab-panels>
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
  height: 100%;
  max-height: 50%;
}
.display-flex {
  display: flex;
  margin: 0 auto;
}
.tab-content {
  height: 60vh;
  max-height: 50%;
}
</style>
<script lang="ts">
import { useQuasar } from 'quasar';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutPage',

  components: {},
  setup() {
    const $q = useQuasar();
    return {
      tab: ref('Experinece'),
      layout: computed(() => {
        return $q.screen.lt.sm
          ? 'dense'
          : $q.screen.lt.md
          ? 'comfortable'
          : 'loose';
      }),
    };
  },
});
</script>
