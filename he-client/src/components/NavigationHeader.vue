<template>
  <v-toolbar>
    <v-toolbar-title>HORIZON EXPLORE</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/island">ISLAND </v-btn>

    <v-btn text to="/cars">CARS </v-btn>

    <v-btn text>RACE </v-btn>

    <div v-if="!isLoggedIn">
      <v-btn text color="primary" to="/join">JOIN</v-btn>
      <v-btn depressed color="primary" to="/signin">SIGN IN</v-btn>
    </div>
    <div v-else>
      <v-btn depressed color="primary" @click="logout">LOG OUT</v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavigationHeader",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
      // get log in state from store
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("userSignOut");
    },
  },
};
</script>
