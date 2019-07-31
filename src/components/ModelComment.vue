<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-form ref="form" @submit.prevent="handleSubmit" lazy-validation>
          <v-card-title>
            <span class="headline">{{ user.name }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field v-model="title" label="Assunto" required></v-text-field>

                  <v-textarea outline name="input-7-4" label="Conteúdo" v-model="content"></v-textarea>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*Preencher todos os campos</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="dark" text @click="closeModal">Close</v-btn>
            <v-btn color="green" text @click="closeModal">Enviar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    closeModal: Function,
    user: Object
  },
  data: () => ({
    dialog: true
  })
};
</script>