<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="test">
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
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
      valid: ""
    };
  },
  methods: {
    test() {
      console.log(this.name, this.checkbox);
    }
  }
};
</script>

<style>
</style>
