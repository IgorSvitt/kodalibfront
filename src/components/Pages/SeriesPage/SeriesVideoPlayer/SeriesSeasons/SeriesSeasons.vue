<template>
  <div class="season">
    <span class="name-season">{{ season.numberSeason }} сезон </span>
    <div class="episodes">
      <div v-for="(episode) in sortedEpisodes" :key="episode.numberEpisode" class="episode">
        <series-episodes :episode="episode" :seriesId="seriesId" :seasonId="season.numberSeason"/>
      </div>
    </div>
  </div>
</template>

<script>
import SeriesEpisodes
  from "@/components/Pages/SeriesPage/SeriesVideoPlayer/SeriesSeasons/SeriesEpisodes/SeriesEpisodes";

export default {
  name: "SeriesSeasons",
  components: {SeriesEpisodes},
  props: {
    season: {
      type: Object
    },
    seriesId:{
      type: String
    }
  },
  setup(props){
    function sort_by_key(array, key)
    {
      return array.sort(function(a, b)
      {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    }

    const sortedEpisodes = sort_by_key(props.season.episodes, "numberEpisode")

    return{
      sortedEpisodes
    }
  }
}
</script>

<style scoped>
.name-season {
  color: #1B132E;
  font-size: 30px;
  font-weight: 600;
  line-height: 50px;
}

.season{
  display: block;
}

.episodes {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.episode {
  display: block;
  max-width: 300px;
  height: 170px;
  margin: 0 15px 15px 0;
}
</style>