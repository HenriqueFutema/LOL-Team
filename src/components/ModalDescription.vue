<template>
  <v-layout row justify-center>
    <v-dialog class="modal" v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Adicione uma descrição</v-card-title>
        <v-card-text>
          <v-textarea outline name="input-7-4" label="Fale sobre você" v-model="description"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-form @submit.prevent="handleSubmit">
            <v-btn color="green darken-1" flat type="submit" :disabled="textOk">Adicionar</v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import api from "../services/api";

import { mapGetters } from "vuex";

export default {
  props: { user: Object },
  data() {
    return {
      description: "",
      dialog: false,
      textOk: true
    };
  },
  computed: {
    ...mapGetters(["getIdUser", "getTokenUser"])
  },
  watch: {
    description: function(val) {
      if (val !== "") {
        this.textOk = false;
      } else {
        this.textOk = true;
      }
    }
  },
  created: function() {
    if (!this.user.description) {
      this.dialog = true;
    }
  },
  methods: {
    handleSubmit: async function() {
      const user = this.user;
      await api.put(
        `user/${this.getIdUser}`,
        {
          user,
          description: this.description
        },
        {
          headers: { Authorization: "Bearer " + this.getTokenUser }
        }
      );
      this.dialog = false;
      this.$router.push({
        name: "teams",
        query: { redirect: "/teams" }
      });
    }
  }
};
</script>


