<template>
  <v-parallax src="../assets/images/background.gif" height="100%">
    <v-container style="padding: 10%">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="text-xl-h1 text-lg-h2 text-h3 mb-4">
            Hiya 👋, I'm
            <span class="text-name font-weight-bold">Ming Tsai</span>
          </h1>
          <h4
            class="subheading text-xl-h2 text-lg-h4"
            :style="`letter-spacing: ${letterSpacing} !important`"
          >
            I'm
            <transition>
              <span id="status" v-if="show">{{ status[index] }}</span>
            </transition>
          </h4>
        </v-col>
        <v-col class="text-sm-left text-center" cols="12">
          <user-medias />
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
import { MEDIAS } from "@/utils/consts.js";
import UserMedias from "./UserMedias.vue";

export default {
  components: { UserMedias },
  name: "LandingPage",
  data: () => ({
    status: ["Web Developer", "Scrum Master"],
    show: true,
    index: 0,
    interval: null,
    medias: MEDIAS,
  }),
  computed: {
    letterSpacing() {
      let result = "12px";
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          result = "7px";
          break;
        case "md":
        case "lg":
          result = "10px";
          break;
        default:
          break;
      }
      return result;
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.show = false;
      this.index++;
      if (this.index >= this.status.length) {
        this.index = 0;
      }
      setTimeout(() => {
        this.show = true;
      }, 500);
    }, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
div.v-parallax {
  height: 100vh;
  opacity: 0.75;
}

#status {
  color: #fff603;
  display: inline;
  position: relative;
  top: 0px;
  animation: fade-in-out 5s;
  margin: 0 auto;
  width: 100%;
}

.text-name {
  white-space: break-spaces;
  background-image: linear-gradient(139deg, #167df0, red);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>