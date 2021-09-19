<template>
  <v-app>
    <v-main>
      <landing-page />
    </v-main>
  </v-app>
</template>

<script>
import LandingPage from "./components/LandingPage.vue";

export default {
  name: "App",

  components: {
    LandingPage,
  },

  data: () => ({
    //
  }),
};
</script>
