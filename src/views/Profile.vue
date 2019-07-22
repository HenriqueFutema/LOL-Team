<template>
  <ModalDescription />
</template>

<script>
import { mapState, mapGetters } from "vuex";
import api from "../services/api";

import ModalDescription from "../components/ModalDescription";
import ProfileComponent from "../components/ProfileComponent";

export default {
  components: {
    ModalDescription,
    ProfileComponent
  },
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
