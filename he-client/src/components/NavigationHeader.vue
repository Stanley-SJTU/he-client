<template>
  <v-toolbar max-height="64px">
    <v-img to="/" src="@/assets/images/logoMainWhite.png" max-height="52px" max-width="80px"></v-img>

    <v-spacer></v-spacer>

    <v-btn text to="/island">ISLAND </v-btn>

    <v-btn text to="/cars">CARS </v-btn>

    <v-btn text to="/race">RACE </v-btn>

    <div v-if="!isLoggedIn">
      <v-btn text color="primary" to="/join">JOIN</v-btn>
      <v-btn depressed color="primary" to="/signin">SIGN IN</v-btn>
    </div>
    <div v-else>
      <v-btn text color="primary" to="/account">ACCOUNT</v-btn>
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

<style scoped></style>
