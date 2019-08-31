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
        <v-btn class="font-weight-thin" color="green" dark v-if="!isCandidate">Candidatar-se</v-btn>
        <v-btn class="font-weight-thin" color="green" dark v-if="isCandidate" disabled>Candidatar-se</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from "../services/api";

import { mapState } from "vuex";

export default {
  props: {
    team: Object
  },

  computed: {
    ...mapState(["idUser"])
  },

  data: () => ({
    name: "",
    isCandidate: false
  }),

  created: async function() {
    const founder = await api.get(`users/${this.team.founder}`);

    const idUser = this.idUser;

    this.team.candidates.map(candi => {
      if (candi._id == idUser) {
        this.isCandidate = true;
      }
    });

    if (this.team.founder === idUser) {
      this.isCandidate = true
    }
    

    this.name = founder.data.name;
  }
};
</script>

<style>
</style>