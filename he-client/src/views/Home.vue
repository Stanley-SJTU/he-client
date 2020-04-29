<template>
  <span>
    <div class="welcomeIsland">
      <div class="welcome">
        <h2 class="bannerText">WELCOME TO</h2>
      </div>
      <div class="toIsland">
        <h2 class="bannerText">THE HORIZON ISLAND</h2>
      </div>
    </div>

    <div class="island">
      <h2>{{ banners[0].title }}</h2>
    </div>

    <div class="cars">
      <h2>{{ banners[1].title }}</h2>
    </div>

    <div class="race">
      <h2>{{ banners[2].title }}</h2>
    </div>
  </span>
</template>

<script>
//import ImageBlockMain from "@/components/ImageBlockMain";

export default {
  name: "home",
  /*
  components: {
    ImageBlockMain,
  },
  */
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
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("../assets/images/horizonMap.jpg"),
    linear-gradient(
      180deg,
      rgba(115, 75, 109, 0.7) 19.81%,
      rgba(66, 39, 90, 0.7) 88.33%
    );
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

.bannerText {
  font-family: Graph Paris;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;
  width: 474px;
  height: 120px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.toIsland {
  position: absolute;
  width: 474px;
  height: 120px;
  left: 486px;
  top: 239px;

  background: #d9269c;
}

.island {
  background: linear-gradient(
      269.9deg,
      rgba(255, 255, 255, 0) 40.18%,
      rgba(255, 255, 255, 0.7) 99.96%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0) 56.15%
    ),
    url("../assets/images/islandBg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 540px;
}

.cars {
  background: linear-gradient(
      269.9deg,
      rgba(255, 255, 255, 0) 40.18%,
      rgba(255, 255, 255, 0.7) 99.96%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0) 56.15%
    ),
    url("../assets/images/carsBg.png");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 540px;
}

.race {
  background: linear-gradient(
      269.9deg,
      rgba(255, 255, 255, 0) 40.18%,
      rgba(255, 255, 255, 0.7) 99.96%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0) 56.15%
    ),
    url("../assets/images/raceBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 540px;
}
</style>
