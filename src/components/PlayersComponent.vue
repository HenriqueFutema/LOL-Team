<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">LOL Team</h1>
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
