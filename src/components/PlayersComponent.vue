<template>
  <v-container fluid grid-list-xl>
    <v-layout justify-space-between text-xs-left>
      <v-flex xs6 md2>
        <v-card dark color="secondary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md2>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6 md2>
        <v-card dark color="secondary">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from "../services/api";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTokenUser"])
  },
  data() {
    return {
      users: []
    };
  },
  created: async function() {
    this.users = await api.get("users", {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });
    console.log(this.users.data.docs);
  }
};
</script>

<style>
</style>
