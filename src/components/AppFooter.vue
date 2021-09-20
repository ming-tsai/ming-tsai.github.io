<template>
  <v-footer dark padless>
    <v-card class="white--text text-center">
      <v-card-text>
        <user-medias />
      </v-card-text>
      <v-card-text class="white--text">
        <p>
          Made with
          <v-icon small style="color: red;">mdi-heart</v-icon>
          of
          <v-icon small>mdi-robot</v-icon>
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import UserMedias from "./UserMedias.vue";
export default {
  components: { UserMedias },
  data: () => ({}),
};
</script>

<style scoped>
footer div {
  width: 100% !important;
  background-color: #424242 !important;
}
</style>