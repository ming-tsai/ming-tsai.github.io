<template>
  <div>
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
  </div>
</template>

<script>
import { MEDIAS } from "@/utils/consts.js";
export default {
  data: () => ({
    medias: MEDIAS,
  }),
};
</script>