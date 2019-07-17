<template>
  <div id="app">
    <v-app dark>
      <v-top-nav absolute :value="true" :active.sync="activeTab" color="transparent" center>
        <!-- Feed -->
        <router-link to="/" tag="v-btn">
          <v-btn color="white" flat value="feed">
            <span>SignIn</span>
            <v-icon>question_answer</v-icon>
          </v-btn>
        </router-link>

        <!-- Profile -->
        <router-link to="/signup" tag="v-btn">
          <v-btn color="white" flat value="profile">
            <span>SignUp</span>
            <v-icon>person</v-icon>
          </v-btn>
        </router-link>

        <!-- Inbox -->
        <v-btn color="white" flat value="inbox">
          <span>Inbox</span>
          <v-icon>email</v-icon>
        </v-btn>
      </v-top-nav>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      routes: []
    };
  }
};
</script>
