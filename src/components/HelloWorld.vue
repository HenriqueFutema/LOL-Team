<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">LOL Team</h1>
        <FormLogin />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormLogin from "./FormLogin.vue";

export default {
  components: {
    FormLogin
  }
};
</script>

<style>
</style>
