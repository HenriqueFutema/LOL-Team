<template>
  <v-form ref="form" lazy-validation @submit.prevent="handleSubmit">
    <v-text-field v-model="name" label="Nome" required></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" type="password" label="Senha" required></v-text-field>

    <v-text-field v-model="confirmPassword" type="password" label="Confirmar Senha" required></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Aceite os termos para continuar!']"
      label="Aceita os termos?"
      required
    ></v-checkbox>

    <v-btn color="success" type="submit">SignUp</v-btn>
  </v-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import api from "../services/api";

import swal from "sweetalert";

export default {
  computed: mapState(["isLogged"]),
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false
    };
  },
  methods: {
    async handleSubmit() {
      const { name, email, password, confirmPassword, checkbox } = this;
      if (!name || !email || !password || !confirmPassword) {
        swal("Erro", "Preencha todos os campos", "error");
        return;
      }
      if (!checkbox) {
        swal("Termos", "Aceite os termos pra continuar", "error");
        return;
      }
      if (password !== confirmPassword) {
        swal("Senhas diferentes", "Senhas precisam ser iguais", "error");
        return;
      }
      if (password.length < 5) {
        swal("Senha fraca", "Senha precisa ter pelo menos 6 digitos", "error");
        return;
      }
      let that = this;
      const user = await api
        .post("signup", { name, email, password })
        .then(function() {
          swal("Usuário criado!", "Usúario criado com sucesso", "success");
          that.$router.push({ name: "home", query: { redirect: "/" } });
          console.log("test");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
