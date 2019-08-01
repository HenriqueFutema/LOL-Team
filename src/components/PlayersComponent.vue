<template>
  <v-container fluid grid-list-xl>
    <v-layout justify-space-between text-xs-left wrap>
      <v-flex xs12 md12 v-for="user in users" :key="user.id">
        <v-card dark color="secondary" class="mb-3">
          <v-card-title>
            <h1 class="font-weight-thin">{{ user.name }}</h1>
          </v-card-title>
          <v-card-text>
            <h3 class="font-weight-thin">{{ user.description }}</h3>
            <h3 class="font-weight-thin">{{ user.email }}</h3>
          </v-card-text>
          <v-btn class="ma-3 font-weight-thin" color="green" dark @click="onShowModal(user)">
            <v-icon left>person</v-icon>
            <span class="mr-1">Comentar</span>
          </v-btn>
        </v-card>
        <ModalComment v-if="show" :closeModal="onCloseModal" :user="userModal" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from "../services/api";
import { mapGetters } from "vuex";

import ModalComment from "./ModalComment";

export default {
  components: {
    ModalComment
  },
  computed: {
    ...mapGetters(["getTokenUser"])
  },
  data() {
    return {
      users: [],
      userModal: {},
      show: false
    };
  },
  created: async function() {
    const response = await api.get("users", {
      headers: { Authorization: "Bearer " + this.getTokenUser }
    });

    this.users = response.data.docs;
  },
  methods: {
    onShowModal: function(user) {
      this.show = true;
      this.userModal = user;
    },

    onCloseModal: function() {
      return (this.show = false);
    }
  }
};
</script>

<style>
</style>
