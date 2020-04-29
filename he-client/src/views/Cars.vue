<template>
  <span>
    <v-container>
      <p class="display-3">CHOOSE YOUR CAR</p>
      <cars-info-detail
        :cars-info="carsDetailCard"
        v-if="carsQueryReceived"
      ></cars-info-detail>
      <v-container>
        <v-autocomplete
          v-model="carsSelected"
          :items="carsSearch"
          label="CHOOSE YOUR CAR"
          item-value="id"
          item-text="Search Menu Model Name"
          solo
        ></v-autocomplete>
      </v-container>
      <v-card class="mx-auto">
        <v-row align="center">
          <v-col class="text-center" cols="12" sm="4">
            <v-btn text @click="addFavouriteCarsUser">ADD TO FAVOURITES</v-btn>
          </v-col>
          <v-col class="text-center" cols="12" sm="4">
            <v-btn text>COMPARE CARS</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </span>
</template>

<script>
import CarsInfoDetail from "@/components/CarsInfoDetail";
import carsSearchArray from "@/assets/carSearch";

export default {
  name: "Cars",
  components: {
    CarsInfoDetail,
  },
  data() {
    return {
      carsQueryReceived: false,
      carsDetailCard: {},
      carsSelected: "",
      carsSearch: carsSearchArray,
    };
  },
  /*
  created() {
    this.$store.dispatch("getCarsAll");
    this.makeItems = this.$store.getters.getAllMakes;
  },
  */
  watch: {
    carsSelected: function(newCarId) {
      console.log("The new id is: " + newCarId);
      this.getSingleCar(newCarId);
    },
  },

  methods: {
    getCarZero() {
      this.$store.dispatch("getCarZero");
      this.carsDetailCard = this.$store.state.carsQueryResult;
      this.carsQueryReceived = true;
    },
    getSingleCar: function(carId) {
      this.$store.dispatch("getSingleCar", carId);
      this.carsDetailCard = this.$store.state.carResultSingle;
      this.carsQueryReceived = true;
    },
    onMakeChange: function(event) {
      console.log(event);
      this.modelItems = this.$store.getters.getAllModels(
        this.carsSelected.make
      );
      this.makeSelected = true;
    },
    onModelChange: function(event) {
      console.log(event);
      // getSingleCar returns an array
      this.carsDetailCard = this.$store.getters.getSingleCar(
        this.carsSelected
      )[0];
      console.log(this.carsDetailCard);
    },
    addFavouriteCarsUser: function() {
      this.$store.dispatch("addFavouriteCarsUser", this.carsSelected);
    },
  },
};
</script>
