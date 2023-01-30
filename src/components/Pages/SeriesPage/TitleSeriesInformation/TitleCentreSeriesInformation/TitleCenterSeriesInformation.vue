<template>
  <div class="info-center">
    <div class="info-main">
      <span class="info-title">
        {{ series.title }}
      </span>
      <p class="info-plot">
        {{ series.plot }}
      </p>
      <div class="info-description">
        <div class="info-description-point">
          <p class="info-description-block" v-if="series.year !== '' ">
            <span class="info-description-block-year">Год</span>
          </p>
          <p class="info-description-block" v-if="series.countSeason !== '' ">
            <span class="info-description-block-seasons">Количество сезонов</span>
          </p>
          <p class="info-description-block" v-if="series.countEpisodes !== '' ">
            <span class="info-description-block-episodes">Количество серий</span>
          </p>
          <p class="info-description-block" v-if="series.duration !== '' ">
            <span class="info-description-block-duration">Продолжительность</span>
          </p>
          <p class="info-description-block" v-if="series.countries.length !== 0 ">
            <span class="info-description-block-country">Страна</span>
          </p>
          <p class="info-description-block" v-if="series.genres.length !== 0 ">
            <span class="info-description-block-genre">Жанр</span>
          </p>
          <p class="info-description-block" v-if="series.director.length !== 0 ">
            <span class="info-description-block-director">Режиссер</span>
          </p>
          <p class="info-description-block" v-if="series.writer.length !== 0 ">
            <span class="info-description-block-writer">Сценарий</span>
          </p>
        </div>
        <film-items :item="series" />
      </div>
    </div>
  </div>
</template>

<script>
import FilmItems
  from "@/components/Pages/FilmPage/TitleFilmInformation/TitleCenterFilmInformation/TitleCenterFilmItems/FilmItems";
export default {
  name: "TitleCenterSeriesInformation",
  components: {FilmItems},
  props:{
    series:{
      type:Object
    }
  },
  // setup(props){
    // console.log(props.series)
  // }
}
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