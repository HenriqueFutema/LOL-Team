<template>
  <h1>Profile {{isLogged}}</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
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
