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
import { ifError } from "assert";
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
    ...mapMutations(["CHANGE_LOGIN"]),
    handleSubmit() {
      const { name, email, password, confirmPassword, checkbox } = this;
      if (!name || !email || !password || !confirmPassword) {
        console.log("Erro");
        return;
      }
      if (!checkbox) {
        console.log("Aceite os termos pra continuar");
        return;
      }
      if (password !== confirmPassword) {
        console.log("Senhas precisam ser iguais");
        return;
      }
      if (password.length > 5) {
        console.log("Senha precisa ter pelo menos 6 digitos");
        return;
      }
      this.CHANGE_LOGIN();
    }
  }
};
</script>

<style>
</style>
