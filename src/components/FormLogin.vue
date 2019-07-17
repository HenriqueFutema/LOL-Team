<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" label="Name" required></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-btn color="success">SignIn</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      valid: ""
    };
  }
};
</script>

<style>
</style>


