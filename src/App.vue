<template>
  <v-app>
    <v-main>
      <landing-page id="landing" />
      <app-footer id="footer" />
    </v-main>
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
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
