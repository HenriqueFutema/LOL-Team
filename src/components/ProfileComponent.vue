<template>
  <v-container>
    <v-layout text-xs-left wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h1 class="display-3 font-weight-thin green--text">Profile</h1>
          </v-card-title>
          <v-card-text>
            <h3 class="headline font-weight-thin border my-1">Nome: {{user.name}}</h3>
            <h3 class="headline font-weight-thin border my-1">Nick: {{user.nickName}}</h3>

            <h3 class="title font-weight-thin my-1">Email: {{user.email}}</h3>
            <h3 class="subtitle-1 font-weight-thin my-1">Descrição: {{user.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
      <h1 class="display-1 font-weight-thin mt-2">Comentários:</h1>

      <v-flex xs12 v-for="comment in comments" :key="comment._id">
        <v-card class="my-3">
          <v-card-text>
            <h1
              class="display-1 font-weight-thin green--text"
            >{{ comment.title.split('-')[0] }} - {{ comment.title.split('-')[1] }}</h1>
            <h3 class="body-1 font-weight-thin border my-1">{{ comment.content }}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  props: { user: Object, comments: Array }
};
</script>

<style>
</style>
