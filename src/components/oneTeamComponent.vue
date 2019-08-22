<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="display-1 font-weight-thin green--text">{{ team.name }}</h1>
      </v-card-title>
      <v-card-text>
        <h3 class="subtitle-1 font-weight-thin border my-1">Fundador:</h3>
        <h3 class="subtitle-1 font-weight-thin border my-1">{{ team.description }}</h3>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    team: Object
  }
};
</script>

<style>
</style>