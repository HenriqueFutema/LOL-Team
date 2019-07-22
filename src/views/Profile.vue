<template>
  <h1>Perfil</h1>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["isLogged"]),
    ...mapGetters(["getIdUser"])
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
