<template>
  <v-app>
    <navigation-header></navigation-header>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import NavigationHeader from "@/components/NavigationHeader";

export default {
  name: "App",
  components: {
    NavigationHeader,
  },
};
</script>

<style></style>
