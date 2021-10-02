<template>
  <v-container class="about-container">
    <h3 class="text-center">ABOUT ME</h3>
    <p class="text-center subtitle-2">
      <em>eat(); sleep(); code(); repeat();</em>
    </p>
    <v-row align="center" justify="center">
      <v-col sm="6" align="center" justify="center">
        <v-avatar size="300" class="profile">
          <v-img src="../assets/images/profile.jpg" alt="Ming Tsai" />
        </v-avatar>
      </v-col>
      <v-col sm="6" cols="auto" align="center" justify="center">
        <v-container>
          <p class="text-justify">
            <span class="subtitle-1 font-weight-medium">
              I'm a software developer experienced in frontend and backend
              development, software architecture, DevOps, and agile methodology.
            </span>
            <br />
            <span class="body-2">
              I enjoy taking complex problems and turning them into simple and
              beautiful interfaces. I also love the logic structure of coding
              and always strive to write elegant, efficient, and testable code.
            </span>
          </p>
          <div class="text-sm-left text-center">
            <v-btn
              outlined
              color="primary"
              href="https://github.com/ming-tsai/ming-tsai/raw/master/docs/curriculum_ming.pdf"
            >
              <v-icon left> mdi-arrow-collapse-down </v-icon>
              View Resume
            </v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "About",
};
</script>

<style scoped>
.avatar {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.about-container {
  min-height: 80vh;
}
</style>