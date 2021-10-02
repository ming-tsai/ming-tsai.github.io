<template>
  <div>
    <p class="text-justify subtitle-1 font-weight-medium">Languages:</p>
    <div v-for="language in languages" :key="language.name">
      <p class="text-justify">
        <span class="subtitle-1 font-weight-regular">
          {{ language.name }}
        </span>
        <span class="body-2 font-weight-light"> ({{ language.value }}) </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Languages",
  data: () => ({
    languages: [
      {
        name: "English",
        value: "Professional working proficiency",
      },
      {
        name: "Chinese",
        value: "Native or bilingual proficiency",
      },
      {
        name: "Spanish",
        value: "Professional working proficiency",
      },
    ],
  }),
};
</script>

<style scoped>
.v-application .text-justify {
  margin-bottom: 0%;
}
</style>
