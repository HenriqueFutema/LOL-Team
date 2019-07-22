<template>
  <h1>Perfil</h1>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import api from "../services/api";

export default {
  computed: {
    ...mapState(["isLogged"]),
    ...mapGetters(["getIdUser", "getTokenUser"])
  },
  data() {
    return {
      user: {}
    };
  },
  created: async function() {
    if (!this.isLogged) {
      this.$router.push({ name: "home", query: { redirect: "/" } });
    }

    const response = await api.get(`users/${this.getIdUser}`, {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });
    this.user = response.data;
  }
};
</script>

<style>
</style>
