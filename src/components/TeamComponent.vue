<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 md12>
        <h1 class="display-3 font-weight-thin">Team</h1>
      </v-flex>
      <v-flex xs12 md12>
        <v-btn block class="font-weight-thin" color="green" dark>Criar Time</v-btn>
      </v-flex>
      <v-flex xs12 md9 class="mt-4">
        <v-text-field label="Nome de um Time" v-model="nameTeam" color="green" dark outlined></v-text-field>
      </v-flex>
      <v-flex xs12 md1></v-flex>
      <v-flex xs12 md2 class="mt-4">
        <v-form>
          <v-btn block class="font-weight-thin" color="green" dark>Pesquisar</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex xs4 md4 v-for="team in teams" :key="team._id">
        <OneTeam :team="team" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from "../services/api";

import { mapGetters } from "vuex";

import OneTeam from "./OneTeamComponent";

export default {
  components: {
    OneTeam
  },

  computed: {
    ...mapGetters(["getTokenUser"])
  },

  data: () => ({
    teams: [],
    nameTeam: ""
  }),

  created: async function() {
    const teams = await api.get("teams", {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });
    console.log(teams);

    this.teams = teams.data;
  }
};
</script>

<style>
</style>