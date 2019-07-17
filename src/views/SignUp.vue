<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">LOL Team</h1>
        <FormSignUp />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FormSignUp from "../components/FormSignUp.vue";

export default {
  components: {
    FormSignUp
  }
};
</script>

<style>
</style>

