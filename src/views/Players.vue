<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">LOL Team</h1>
        <PlayersComponent />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PlayersComponent from "../components/PlayersComponent";

import { mapState } from "vuex";
export default {
  components: {
    PlayersComponent
  },
  computed: mapState(["isLogged"]),
  data() {
    return {};
  },
  created: function() {
    if (!this.isLogged) {
      this.$router.push({ name: "home", query: { redirect: "/" } });
    }
  }
};
</script>

<style>
</style>
