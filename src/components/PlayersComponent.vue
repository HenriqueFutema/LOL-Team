<template>
  <v-container fluid grid-list-xl>
    <v-layout justify-space-between text-xs-left>
      <v-flex xs6 md4 v-for="user in users" :key="user.id">
        <v-card dark color="secondary">
          <v-card-title>
            <h1 class="font-weight-thin">{{ user.name }}</h1>
          </v-card-title>
          <v-card-text>
            <h3 class="font-weight-thin">{{ user.description }}</h3>
            <h3 class="font-weight-thin">{{ user.email }}</h3>
          </v-card-text>
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
    const response = await api.get("users", {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });

    this.users = response.data.docs;
  }
};
</script>

<style>
</style>
