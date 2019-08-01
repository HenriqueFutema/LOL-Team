<template>
  <div id="app">
    <v-app dark>
      <v-bottom-nav absolute :value="true" color="transparent" center v-if="!isLogged">
        <v-btn to="/" color="white" flat value="signIn">
          <span>SignIn</span>
          <v-icon>person</v-icon>
        </v-btn>

        <v-btn to="/signup" color="white" flat value="signUp">
          <span>SignUp</span>
          <v-icon>person</v-icon>
        </v-btn>
      </v-bottom-nav>

      <v-bottom-nav :value="true" color="dark" center v-if="isLogged" fixed>
        <v-btn to="/players" color="white" flat value="players">
          <span>Players</span>
          <v-icon>person</v-icon>
        </v-btn>

        <v-btn to="/teams" color="white" flat value="teams">
          <span>Teams</span>
          <v-icon>person</v-icon>
        </v-btn>

        <v-btn to="/profile" color="white" flat value="profile">
          <span>Profile</span>
          <v-icon>person</v-icon>
        </v-btn>
      </v-bottom-nav>

      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mapState } from "vuex";
export default {
  name: "App",
  computed: mapState(["isLogged"]),
  components: {
    HelloWorld
  },
  data() {
    return {};
  }
};
</script>
