<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
          <v-card-title>
            <span class="headline">Novo Time</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field label="Nome do Time" required v-model="name"></v-text-field>

                  <v-textarea
                    outline
                    name="input-7-4"
                    label="Detalhes da vaga"
                    v-model="description"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
            <small class="red--text">*Preencher todos os campos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" text @click="closeModal">Fechar</v-btn>
            <v-btn color="green" text type="submit">Enviar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
import api from "../services/api";

import { mapGetters } from "vuex";

export default {
  props: {
    closeModal: Function
  },

  computed: {
    ...mapGetters(["getIdUser", "getTokenUser"])
  },

  data: () => ({
    name: "",
    description: "",
    dialog: true
  }),

  methods: {
    handleSubmit: async function() {
      console.log("asas");

      const { name, description } = this;

      const founder = this.getIdUser;

      const team = await api.post(
        "team",
        { founder, name, description },
        {
          headers: { Authorization: "Bearer " + this.getTokenUser }
        }
      );
      console.log(team);
    }
  }
};
</script>

<style>
</style>