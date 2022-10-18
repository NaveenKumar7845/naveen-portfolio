<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <q-layout view="hHh lpR lFr">
    <q-header reveal class="transparent text-white">
      <q-toolbar glossy>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar> -->
          My Portfolio
        </q-toolbar-title>
        <q-tabs
          v-if="$q.screen.gt.sm"
          v-model="tab"
          indicator-color="white"
          shrink
          stretch
        >
          <q-route-tab
            v-for="(option, index) in options"
            :key="index"
            :name="option.value"
            :label="option.label"
            :to="option.link"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="body transparent"
      v-model="leftDrawerOpen"
      side="left"
      overlay
      elevated
    >
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="body">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <router-view />
    </q-page-container>
    <q-footer reveal dense class="transparent text-white">
      <q-tabs
        v-if="$q.screen.lt.sm || $q.screen.sm"
        v-model="tab"
        shrink
        stretch
        align="justify"
        indicator-color="white"
        no-caps
        outside-arrows
        mobile-arrows
        dense
      >
        <q-route-tab
          v-for="(option, index) in options"
          :key="index"
          :name="option.value"
          :label="option.label"
          :icon="option.icon"
          :to="option.link"
          exact
          dense
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
<style lang="scss">
.transparent {
  background-color: rgba(255, 255, 255, 0.1);
}
// .body {
//   margin: 0 0 $background-image-color1 0;
//   font-family: $body-font;
//   font-size: $normal-font-size;
//   background-image: repeating-linear-gradient(
//     60deg,
//     $background-image-color1,
//     $background-image-color2,
//     $background-image-color1 5px
//   );
//   color: $text-color;
//   overflow-x: hidden;
// }
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
  bottom: 0;
  left: -50%;
  opacity: 0.5;
  position: fixed;
  right: -50%;
  top: 0;
  z-index: -1;
}

.bg2 {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg3 {
  animation-duration: 5s;
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 50%;
  padding: 10vmin;
  position: fixed;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-family: monospace;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '',
  },
  {
    title: 'About',
    icon: 'fa-solid fa-address-card',
    link: '',
  },
  {
    title: 'Skills',
    icon: 'fa-solid fa-computer',
    link: '',
  },
  {
    title: 'Services',
    icon: 'record_voice_over',
    link: 'fa-duotone fa-suitcase"',
  },
  {
    title: 'Contact',
    icon: 'fa-regular fa-id-badge',
    link: '',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const $q = useQuasar();

    return {
      tab: ref('Home'),

      options: [
        { label: 'Home', value: 'Home', link: '/home', icon: 'home' },
        {
          label: 'About',
          value: 'About',
          link: '/about',
          icon: 'contact_phone',
        },
        {
          label: 'Skills',
          value: 'Skills',
          link: '/skills',
          icon: 'terminal',
        },
        {
          label: 'Services',
          value: 'Services',
          link: '/services',
          icon: 'work',
        },
        {
          label: 'Contact',
          value: 'Contact',
          link: '/contact',
          icon: 'call',
        },
      ],
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
