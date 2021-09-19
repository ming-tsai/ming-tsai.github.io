<template>
  <v-parallax src="../assets/images/background.gif" height="100%">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1 class="text-h3 mb-4">
            Hiya
            <img
              align="center"
              src="../assets/images/pingueen.webp"
              width="50rem"
            />, I'm
            <span class="text-name"><strong>Ming Tsai</strong> </span>
          </h1>
          <h4 class="subheading">
            I'm working with
            <transition name="fade" appear>
              <span id="work" v-if="show">{{ works[index] }}</span>
              <span v-else
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
              >
            </transition>
          </h4>
        </v-col>
        <v-col cols="12">
          <v-btn
            v-for="media in medias"
            :key="media.icon"
            class="white--text"
            icon
            :href="media.link"
            target="_blank noopener"
          >
            <v-icon>
              {{ media.icon }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: "LandingPage",
  data: () => ({
    works: ["Frontend", "Backend", "CD/CI"],
    show: true,
    index: 0,
    interval: null,
    medias: [
      { link: "https://github.com/ming-tsai", icon: "mdi-github" },
      { link: "https://linkedin.com/in/ming-tsai", icon: "mdi-linkedin" },
    ],
  }),
  created() {
    this.interval = setInterval(() => {
      this.show = false;
      this.index++;
      if (this.index >= this.works.length) {
        this.index = 0;
      }
      setTimeout(() => {
        this.show = true;
      }, 1000);
    }, 5000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
div.v-parallax {
  height: 100%;
  opacity: 0.75;
}

#work {
  color: #fff603;
  display: inline;
  position: relative;
  top: 0px;
  animation: fade-in-out 5s;
  margin: 0 auto;
  width: 100%;
}

h4 {
  letter-spacing: 10px !important;
}

.text-name {
  white-space: break-spaces;
  background-image: linear-gradient(139deg, #167df0, red);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>