<template>
  <v-container>
    <v-layout text-xs-left wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">Profile</h1>
        <h3 class="display-1 font-weight-thin border">Nome: {{user.name}}</h3>
        <h3 class="display-1 font-weight-thin">Email: {{user.email}}</h3>
        <h3 class="display-1 font-weight-thin">Descrição: {{user.description}}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  props: ["user"]
};
</script>

<style>
</style>
