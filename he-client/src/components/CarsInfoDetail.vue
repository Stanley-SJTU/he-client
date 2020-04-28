<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img
        height="200px"
        src="../assets/images/HOR_XB1_Audi_RS_3.webp"
      ></v-img>
      <v-card-title>{{ carsInfo["Search Menu Model Name"] }}</v-card-title>
    </v-card>
    <v-card max-width="400">
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab>RATING</v-tab>
        <v-tab>VALUES</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card>
            <v-card-text>SPEED: {{ this.carsInfo.S }}</v-card-text>
            <v-card-text>ACCELERATION: {{ this.carsInfo.A }} </v-card-text>
            <v-card-text>HANDLING: {{ this.carsInfo.H }} </v-card-text>
            <v-card-text>LAUNCH: {{ this.carsInfo.L }} </v-card-text>
            <v-card-text>BREAKING: {{ this.carsInfo.B }} </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-text>HP: {{ this.carsInfo.HP }}</v-card-text>
            <v-card-text>TORQUE: {{ this.carsInfo.T }} </v-card-text>
            <v-card-text>WEIGHT: {{ this.carsInfo.Wt }} </v-card-text>
            <v-card-text>DRIVE: {{ this.carsInfo.Drive }} </v-card-text>
            <v-card-text>VALUE: {{ this.carsInfo["Buy Value"] }} </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CarsInfoDetail",
  props: ["carsInfo"],
  data() {
    return {
      tab: null,
    };
  },
};
</script>
