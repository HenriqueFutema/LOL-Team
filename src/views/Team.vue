<template>
  <Team />
</template>

<script>
import { mapState } from "vuex";

import Team from "../components/TeamComponent";

export default {
  computed: mapState(["isLogged"]),
  components: {
    Team
  },
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
