<template>
  <section class="info">
    <div class="container info-container">
      <left-information :imgPoster="information.poster"/>
      <center-information :filmInformation="information"/>
      <right-information :film="information"/>
    </div>
  </section>
</template>

<script>
import CenterInformation from "./TitleCenterFilmInformation/CenterInformation.vue";
import LeftInformation from "./TitleLeftFilmInformation/LeftInformation.vue";
import RightInformation from "./TitleRightFilmInformation/RightInformation.vue";

export default {
  components: {LeftInformation, CenterInformation, RightInformation},
  name: "title-film-information",
  props: {
    information: {
      type: Object
    }
  }
};
</script>

<style>
/* Section */

.info {
  background-color: #1b132e;
  padding-top: 75px;
  color: #efefef;
  margin: auto;
  padding-bottom: 20px;
}

.info-container {
  display: flex;
  justify-content: space-between;
}

</style>