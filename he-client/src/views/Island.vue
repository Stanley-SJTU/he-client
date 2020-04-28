<template>
  <span>
    <div>
      <div class="islandInfo">
        <h2>SIGHTSEEING IN HORIZON ISLAND</h2>
        <p>sample text</p>
      </div>
      <div>
        <v-select
          v-model="locationSelected"
          :items="islandInfo.title"
          label="Choose a location"
          solo
        ></v-select>
      </div>
      <div>
        <v-card class="mx-auto" max-width="1600">
          <v-img
            class="white--text align-end"
            height="640px"
            v-bind:src="getIslandImage()"
          >
          <v-card-title>{{ locationSelected }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ getIslandText() }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text>
              Add to Favourites
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </span>
</template>

<script>

export default {
  name: "Island",
  data() {
    return {
      islandInfo: [
        {
          title: "The Bamburgh Castle",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Uffington White Horse",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Ambleside Village",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Mortimer Gardens",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Derwent Resevoir",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Glenfinnan Viaduct",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Scott Monument",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Arthur's Seat",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Derwent Water",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Whitewater Falls",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Moorhead Wind Farm",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
        {
          title: "Broadway Windmill",
          imgSrc: "@/assets/images/bamburghCastle.jpg",
          text: "some text",
        },
      ],
      locationSelected: "The Bamburgh Castle",
    };
  },
  methods: {
    getIslandImage: function() {
      return this.islandInfo.find(i => i.title === this.locationSelected).imgSrc;
    },
    getIslandText: function() {
      return this.islandInfo.find(i => i.title === this.locationSelected).text;
    },
  },
};
</script>
