<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" type="password" :rules="passwordRules" label="Senha" required></v-text-field>

    <v-text-field
      v-model="confirmPassword"
      type="password"
      :rules="passwordRules"
      label="Confirmar Senha"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Aceite os termos para continuar!']"
      label="Aceita os termos?"
      required
    ></v-checkbox>

    <v-btn color="success" @click="resetValidation">SignUp</v-btn>
  </v-form>
</template>