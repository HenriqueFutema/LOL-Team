<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">LOL Team</h1>
        <ModalDescription v-if="!user.description" v-bind:user="user" />
        <ProfileComponent v-else :user="user" :comments="user.comments" />
      </v-flex>
    </v-layout>
  </v-container>
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
    if (await(!this.isLogged)) {
      await this.$router.push({ name: "home", query: { redirect: "/" } });
    }

    const response = await api.get(`users/${this.getIdUser}`, {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });
    this.user = response.data;
    console.log(this.user.comments);
  }
};
</script>

<style>
</style>
