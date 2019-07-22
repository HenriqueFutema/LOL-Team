<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <h1 class="display-3 font-weight-thin">Profile</h1>
        <h3 class="display-3 font-weight-thin">{{user.email}}</h3>
        <h3 class="display-3 font-weight-thin">Test</h3>
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
