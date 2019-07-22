<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Adicione uma descrição</v-card-title>
        <v-card-text>
          <v-textarea outline name="input-7-4" label="Fale sobre você" value></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-form @submit.prevent="handleSubmit">
            <v-btn color="green darken-1" flat type="submit">Adicionar</v-btn>
          </v-form>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    handleSubmit: async function() {
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>
