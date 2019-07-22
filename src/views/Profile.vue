<template>
  <h1>Perfil</h1>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["isLogged", "idUser", "tokenUser"]),
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
