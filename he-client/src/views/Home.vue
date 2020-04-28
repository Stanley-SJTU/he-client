<template>
  <span>
    <div class="welcomeIsland">
      <div class="welcome">
        <h2>WELCOME TO</h2>
      </div>
      <div class="island">
        <h2>THE HORIZON ISLAND</h2>
      </div>
    </div>

    <image-block-main
      v-for="banner in banners"
      v-bind:key="banner.id"
      v-bind:bannerInfo="banner"
    ></image-block-main>
  </span>
</template>

<script>
import ImageBlockMain from "@/components/ImageBlockMain";

export default {
  name: "home",
  components: {
    ImageBlockMain,
  },
  data() {
    return {
      banners: [
        {
          id: 1,
          title: "EXPLORE THE ISLAND OF WONDER",
          backgroundSrc: "@/assets/images/islandBg.jpeg",
          text:
            "Visit this vast British island, explore its mountains, rivers and classic downtown. Here you can enjoy the scenary, suitable for all seasons!",
        },
        {
          id: 2,
          title: "IN SOME OF THE GREATEST CARS",
          backgroundSrc: "../assets/images/carsBg.png",
          text:
            "From vintage cars to hypercars, we offer a wide range of car models for you to drive around the island. If you have extra time, you may even customize the car.",
        },
        {
          id: 3,
          title: "OR TAKE PART IN A RACE",
          backgroundSrc: "../assets/images/raceBg.png",
          text:
            "Wish to compete against other drivers? You can choose to participate in a race and receive credits according to you finishing position. Our racecars are modified by professionals in order to ensure your safety.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.welcomeIsland {
  background-image: url("../assets/images/horizonMap.jpg");
  width: 100%;
  height: 540px;
}

.welcome {
  background: #8029cd;

  position: absolute;
  width: 474px;
  height: 120px;
  left: 328px;
  top: 119px;
}

.island {
  position: absolute;
  width: 474px;
  height: 120px;
  left: 486px;
  top: 239px;

  background: #d9269c;
}
</style>
