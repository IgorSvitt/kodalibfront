<template>
<div class="container episode-player">
  <div class="title-episode">
    Смотреть «{{seriesTitle.title}}» {{route.params.season_id}} сезон {{episode.numberEpisode}} серия
  </div>
  <a :href="'/series/'+route.params.id" class="info-series">
    Информация о сериале
  </a>
  <iframe :src="episode.videoLink" width="100%" height="600"
                    frameborder="0" allowfullscreen allow="autoplay *; fullscreen *" class="iframe-series"></iframe>

  <carousel-episodes :episodes="season"/>
</div>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {onBeforeMount} from "@vue/runtime-core";
import CarouselEpisodes from "@/components/Pages/SeriesPage/EpisodeVideoPlayer/CaruselEpisodes/CarouselEpisodes";


export default {
  name: "EpisodeVideoPlayer",
  components: {CarouselEpisodes},
  setup: function () {
    const route = useRoute()
    const store = useStore()

    const getSeries = () => store.dispatch("series/getSerialApi", route.params.id)
    onBeforeMount(getSeries)
    const seriesTitle = computed(() => store.state.series.serial)
    const season = computed(() => store.state.series.serial.seasons.find(x => x.numberSeason == route.params.season_id))
    const episode = computed(() => store.state.series.serial.seasons.find(x => x.numberSeason == route.params.season_id).episodes.find(x => x.numberEpisode == route.params.episode_id))

    return {
      episode,
      route,
      seriesTitle,
      season
    }
  }
}
</script>

<style scoped>
.title-episode{
  color: #ffffff;
  font-size: 40px;
  margin: 45px 0 20px 0;
}

.info-series{
  color: #ffddcc;
  font-size: 24px;
}

.info-series:hover{
  color: #fed534;
}

.iframe-series{
  margin-top: 20px;
}

.container.episode-player{
  margin-bottom: 45px;
}
</style>