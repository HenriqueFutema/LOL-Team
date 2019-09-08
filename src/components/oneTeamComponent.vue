<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1 class="display-1 font-weight-thin green--text">{{ team.name }}</h1>
      </v-card-title>
      <v-card-text>
        <h3 class="subtitle-1 font-weight-thin border my-1">Fundador: {{ this.name }}</h3>
        <h3 class="subtitle-1 font-weight-thin border my-1">{{ team.description }}</h3>
      </v-card-text>
      <v-card-actions>
        <v-form @submit.prevent="handleSubmit">
                  <v-btn class="font-weight-thin" color="green" dark v-if="!isCandidate" type="submit">Candidatar-se</v-btn>
        <v-btn class="font-weight-thin" color="green" dark v-if="isCandidate" disabled>Candidatar-se</v-btn>
        </v-form>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from "../services/api";

import { mapGetters } from "vuex";

export default {
  props: {
    team: Object
  },

  computed: {
    ...mapGetters(["getIdUser", "getTokenUser"])
  },

  data: () => ({
    name: "",
    isCandidate: false
  }),

  created: async function() {
    const founder = await api.get(`users/${this.team.founder}`);
    
    console.log(founder);
    

    const idUser = this.getIdUser;

    this.team.candidates.map(candi => {
      if (candi._id == idUser) {
        this.isCandidate = true;
      }
    });

    if (this.team.founder === idUser) {
      this.isCandidate = true
    }
    

    this.name = founder.data.name;
  },

  methods:{

    handleSubmit: async function(){
      
      const idUser = this.getIdUser

      const that = this

      const apply = await api.post(`candidate/${this.team._id}`, { candidate: idUser },
              {
          headers: { Authorization: "Bearer " + this.getTokenUser }
        })
        .then(function(response) {
          that.isCandidate = true
          console.log(response.data);
          
        }).catch(function(error){
          console.log(error);
          
        })

      
      
    }

  }

};
</script>

<style>
</style>