<template>
  <PlayersComponent />
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
