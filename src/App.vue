<template>
  <v-app>
    <v-main>
      <landing-page id="landing" />
    </v-main>
    <app-footer id="footer" />
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",

  components: {
    LandingPage,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("./assets/main.css");
</style>
