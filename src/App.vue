<template>
  <v-app>
    <v-main>
      <div>
        <landing-page id="home" />
        <about id="about" />
      </div>
    </v-main>
    <app-footer id="footer" />
  </v-app>
</template>

<script>
import About from "./components/About.vue";
import AppFooter from "./components/AppFooter.vue";
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",

  components: {
    LandingPage,
    About,
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
