<template>
  <div class="info-center">
    <div class="info-main">
      <span class="info-title">
        {{ filmInformation.title }}
      </span>
      <p class="info-plot">
        {{ filmInformation.plot }}
      </p>
      <div class="info-description">
        <div class="info-description-point">
          <p class="info-description-block" v-if="filmInformation.year !== '' ">
            <span class="info-description-block-year">Год</span>
          </p>
          <p class="info-description-block" v-if="filmInformation.duration !== '' ">
            <span class="info-description-block-duration">Продолжительность</span>
          </p>
          <p class="info-description-block" v-if="filmInformation.countries.length !== 0 ">
            <span class="info-description-block-country">Страна</span>
          </p>
          <p class="info-description-block" v-if="filmInformation.genres.length !== 0 ">
            <span class="info-description-block-genre">Жанр</span>
          </p>
<!--          <p class="info-description-block" v-if="filmInformation.budget !== '' ">-->
<!--            <span class="info-description-block-budget">Бюджет</span>-->
<!--          </p>-->
<!--          <p class="info-description-block" v-if="filmInformation.grossWorldwide !== '' ">-->
<!--            <span class="info-description-block-grossworldwide"-->
<!--              >Мировые сборы</span-->
<!--            >-->
<!--          </p>-->
          <p class="info-description-block" v-if="filmInformation.director.length !== 0 ">
            <span class="info-description-block-director">Режиссер</span>
          </p>
          <p class="info-description-block" v-if="filmInformation.writer.length !== 0 ">
            <span class="info-description-block-writer">Сценарий</span>
          </p>
          <p class="info-description-block" v-if="filmInformation.topActors.length !== 0 ">
            <span class="info-description-block-topactors">Топ актеров</span>
          </p>
        </div>
        <film-items :item="filmInformation" />
      </div>
    </div>
  </div>
</template>


<script>
import FilmItems from "./TitleCenterFilmItems/FilmItems.vue";

export default {
  components: { FilmItems },
  name: "cente-information",
  props: {
    filmInformation: {
      type: Object,
    },
  },
  setup() {},
};
</script>


<style scoped>
.info-center {
  width: 100%;
  padding: 0 30px;
  max-width: 640px;
}

.info-main {
  display: block;
}

.info-title {
  font-size: 40px;
  font-weight: 700;
}




.info-plot {
  width: 100%;
  font-size: 15px;
  color: rgba(239, 239, 239, 0.65);
  margin-bottom: 25px;
}

.info-description {
  display: flex;
}

.info-description-point {
  width: 40%;
  font-size: 16px;
  color: rgba(239, 239, 239, 1);
}

.info-description-block {
  margin-bottom: 30px;
}
</style>