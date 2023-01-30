<template>
  <div class="bg">
    <div class="container page-video">
      <div class="episodes">
        <div class="text-video-player">
          Смотреть «{{link.title}}»
        </div>
        <div v-for="(season) in link.seasons" :key="season.number">
          <series-seasons :season="season" :seriesId="link.id"/>
        </div>
      </div>
      <div class="actors">
        <actors-information :actors="link.actors"/>
      </div>
    </div>
  </div>
</template>

<script>
import ActorsInformation
  from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/Actors/ActorsInformation";
import SeriesSeasons from "@/components/Pages/SeriesPage/SeriesVideoPlayer/SeriesSeasons/SeriesSeasons";
export default {
  name: "SeriesVideoPlayer",
  components: {SeriesSeasons, ActorsInformation},
  props:{
    link:{
      type: Object
    }
  }

}
</script>

<style scoped>
.bg{
  background-color: #efefef;
}

.container.page-video{
  padding: 45px  0;
  display: flex;
  background-color: #ffffff;
}

.actors{
  width: 25%;
  margin-left: 40px;
}

.episodes{
  padding-left: 20px;
  width: 75%;
}

.text-video-player{
  color: #4e3883;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px ;
  text-align: left;
  line-height: 50px;
}
</style>