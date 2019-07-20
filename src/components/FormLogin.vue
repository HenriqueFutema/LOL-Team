<template>
  <v-form ref="form" @submit.prevent="handleSubmit" lazy-validation>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>

    <v-btn color="success" type="submit">SignIn</v-btn>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
import api from "../services/api";
import swal from "sweetalert";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN"]),
    async handleSubmit() {
      const { email, password } = this;
      if (!email || !password) {
        swal("Erro", "Preencha todos o campos", "error");
        return;
      }
      let that = this;

      await api
        .post("signin", { email, password })
        .then(function(response) {
          console.log(email, password);
          console.log(response.data);
          that.CHANGE_LOGIN();
          swal("Bem Vindo!", "Usuário cadastrado com sucesso", "success");
        })
        .catch(function(error) {
          let err = error.response.data;
          swal(`${err}`, "Tente novamente", "error");
        });
    }
  }
};
</script>

<style>
</style>


