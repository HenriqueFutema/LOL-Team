<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="display-1 font-weight-thin green--text">{{ team.name }}</h1>
      </v-card-title>
      <v-card-text>
        <h3 class="subtitle-1 font-weight-thin border my-1">Fundador: {{ this.name }}</h3>
        <h3 class="subtitle-1 font-weight-thin border my-1">{{ team.description }}</h3>
      </v-card-text>
      <v-card-actions>
        <v-btn class="font-weight-thin" color="green" dark>Candidatar-se</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from "../services/api";

export default {
  props: {
    team: Object
  },

  data: () => ({
    name: ""
  }),

  created: async function() {
    const founder = await api.get(`users/${this.team.founder}`);

    this.name = founder.data.name;
  }
};
</script>

<style>
</style>