<template>
  <div class="episode" @mouseover="textEpisode='Смотреть'" @mouseleave="textEpisode=episode.numberEpisode">
    <a :href="'/series/'+seriesId+'/season/'+seasonId+'/episode/'+episode.numberEpisode">
      <img :src="episode.image" class="img-episode" >
      <button class="button-episode">
        <span class="info-text-episode"> {{ textEpisode }} </span>
      </button>
    </a>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SeriesEpisodes",
  props: {
    episode: {
      type: Object
    },
    seriesId:{
      type: String
    },
    seasonId:{
      type: String
    }
  },
  setup(props){
    const textEpisode = ref(props.episode.numberEpisode)

    return{
      textEpisode
    }
  }
}
</script>

<style scoped>
.img-episode {
  width: 300px;
  height: 170px;
  object-position: center center;
  object-fit: cover;
  border: 1px solid #4e3883;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.episode:hover .img-episode{
  transition: all 0.3s ease;
  opacity: 0.6;
}

.episode{
  position: relative;
  display: inline-block;
  width: 100%;
  transition: scale 0.3s ease;
  border-radius: 10px;
  background: #1B132E;
}

.episode:hover{
  scale: 107%;
  transition: scale 0.4s ease;
  cursor: pointer;
}

.button-episode {
  display: flex;
  align-items: center;
  position: absolute;
  left: 13px;
  bottom: 13px;
  border: none;
  background-color: #4e3883;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.episode:hover .button-episode{
  left: 30%;
  bottom: 40%;
  transition: all 0.6s ease;
}

.episode:hover .button-episode:hover{
  background-color: #1B132E;
  transition: all 0.6s ease;
}

.info-text-episode {
  font-size: 16px;
  color: #efefef;
  text-align: center;
  transition: all 0.5s;
}

.episode:hover .info-text-episode{
  font-size: 20px;
  transition: all 0.6s ease;
}

.episode:hover .info-text-episode:hover{
  color: #ffddcc;
}



</style>