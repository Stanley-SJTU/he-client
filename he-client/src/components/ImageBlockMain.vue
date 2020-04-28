<template>
  <div :style="backgroundStyle">
    <div class="titleBg">
      <h2 class="title">{{ bannerInfo.title }}</h2>
    </div>
    <div>
      <v-card class="mx-auto" max-width="344">
        <v-card-text class="text--primary">
          {{ bannerInfo.text }}
        </v-card-text>
        <v-card-actions>
          <v-btn text>MORE</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBlockMain",
  props: ["bannerInfo"],
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url("${this.bannerInfo.backgroundSrc}")`,
        height: 720 + "px",
        maxWidth: 100 + "%",
        backgroundPosition: "fill",
      };
    },
  },
};
</script>

<style scoped>

.titleBg {
  background-color: rgba(128, 41, 205, 0.7);
  position: relative;
  width: 806px;
  height: 120px;
  left: 147px;
  top: 134px;
}

.title {
  margin-left: 14px;
  margin-top: 22px;

  font-family: Graph Paris;
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 64px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
</style>
