<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <!-- <q-card-section>
        <div class="text-h6 text-center">About Me</div>
        <div class="text-subtitle2"></div>
      </q-card-section> -->
      <q-list>
        <q-expansion-item
          group="somegroup"
          default-opened
          icon="code"
          label="Front End"
        >
          <q-separator />
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">JavaScript</div>
            <q-linear-progress size="15px" :value="0.9" color="secondary">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="JavaScript-90%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Angular</div>
            <q-linear-progress size="15px" :value="0.9" color="secondary">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Angular-90%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">HTML</div>
            <q-linear-progress size="15px" :value="0.9" color="secondary">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="HTML-90%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">CSS</div>
            <q-linear-progress size="15px" :value="0.8">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="CSS-80%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">VueJs & Quasar</div>
            <q-linear-progress size="15px" :value="0.7" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="VueJs & Quasar-70%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-expansion-item>
        <q-expansion-item icon="dns" group="somegroup" label="Backend">
          <q-separator />
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Node Js</div>
            <q-linear-progress size="15px" :value="0.5" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Node Js-50%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Java</div>
            <q-linear-progress size="15px" :value="0.4" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Java-40%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Dialog Flow</div>
            <q-linear-progress size="15px" :value="0.5" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Dialog flow-50%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-expansion-item>
        <q-expansion-item
          icon="home_repair_service"
          group="somegroup"
          label="Database and Tools"
        >
          <q-separator />
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">MySql</div>
            <q-linear-progress size="15px" :value="0.4" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="MySql-40%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Mongo DB</div>
            <q-linear-progress size="15px" :value="0.4" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="MongoDb-40%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Jira</div>
            <q-linear-progress size="15px" :value="0.7" color="warning">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Jira-70%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
          <q-card-section class="q-pt-none text-black">
            <div class="text-subtitle2">Jenkins</div>
            <q-linear-progress size="15px" :value="0.4" color="negative">
              <div class="absolute-full flex flex-center">
                <q-badge
                  color="transparent"
                  text-color="black"
                  label="Jenkins-40%"
                />
              </div>
            </q-linear-progress>
          </q-card-section>
        </q-expansion-item>
      </q-list>
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
    return {};
  },
});
</script>
