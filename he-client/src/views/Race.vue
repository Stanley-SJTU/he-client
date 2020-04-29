<template>
  <span>
    <v-container>
      <v-layout row class="my-4">
        <v-flex lg4 class="px-2">
          <div class="raceType">
            <p class="titleText">RACE TYPES</p>
          </div>
          <div class="available">
            <p class="titleText">AVAILABLE</p>
          </div>
        </v-flex>
        <v-flex lg8 class="px-2">
          <div>
            <v-card-text>{{ raceText }}</v-card-text>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row class="my-6">
        <v-flex lg4 class="px-2">
          <v-card class="mx-auto">
            <v-img height="200px" src="@/assets/images/raceRoad.jpg"></v-img>
            <v-card-title>ROAD RACING</v-card-title>
            <v-card-text>{{ roadRaceText }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg4 class="px-2">
            <v-card class="mx-auto">
            <v-img height="200px" src="@/assets/images/raceCross.jpg"></v-img>
            <v-card-title>CROSS COUNTRY</v-card-title>
            <v-card-text>{{ roadRaceText }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg4 class="px-2">
            <v-card class="mx-auto">
            <v-img height="200px" src="@/assets/images/raceOffroad.jpg"></v-img>
            <v-card-title>OFFROAD</v-card-title>
            <v-card-text>{{ roadRaceText }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
export default {
  name: "Race",
  data() {
    return {
      raceText:
        "Would like to take your dream car to a race? At Horizon Island you can race against other drivers and even famous racers.",
      roadRaceText: "Go for a drive!",
    };
  },
};
</script>

<style scoped>
.raceType {
  background: rgba(128, 41, 205, 0.7);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  width: 312px;
}

.available {
  background: #d9269c;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  width: 312px;
}

.titleText {
  font-family: Roboto Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
</style>
