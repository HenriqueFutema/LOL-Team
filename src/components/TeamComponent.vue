<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 md12>
        <h1 class="display-3 font-weight-thin">Team</h1>
      </v-flex>
      <v-flex xs12 md12>
        <v-btn block class="font-weight-thin" color="green" dark @click="onShowModal">Criar Time</v-btn>
      </v-flex>
      <v-flex xs12 md9 class="mt-4">
        <v-text-field label="Nome de um Time" v-model="nameTeam" color="green" dark outlined></v-text-field>
      </v-flex>
      <v-flex xs12 md1></v-flex>
      <v-flex xs12 md2 class="mt-4">
        <v-form @submit.prevent="handleSubmit">
          <v-btn block class="font-weight-thin" color="green" dark type="submit">Pesquisar</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout wrap class="mb-5">
      <v-flex xs12 md12 v-for="team in teams" :key="team._id">
        <OneTeam :team="team" />
      </v-flex>
    </v-layout>
    <ModalTeam v-if="show" :closeModal="onCloseModal" />
  </v-container>
</template>

<script>
import api from "../services/api";

import { mapGetters } from "vuex";

import OneTeam from "./OneTeamComponent";
import ModalTeam from "./ModalTeam";

export default {
  components: {
    OneTeam,
    ModalTeam
  },

  computed: {
    ...mapGetters(["getTokenUser"])
  },

  data: () => ({
    teams: [],
    nameTeam: "",
    show: false
  }),

  created: async function() {
    const teams = await api.get("teams", {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });

    this.teams = teams.data;
  },

  methods: {

    handleSubmit: async function(){

      const { nameTeam, getTokenUser } = this

      if (!nameTeam) {
        return;
      }

      const team = await api.get(`team/${nameTeam}`, {
        headers: { Authorization: "Bearer " + getTokenUser }
      });

      if (!team) {
        return;
      }

      this.teams = [team.data]
            
    },

    onShowModal: function() {
      this.show = true;
    },

    onCloseModal: function() {
      this.show = false;
    }
  }
};
</script>

<style>
</style>