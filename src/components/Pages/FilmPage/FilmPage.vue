<template>
  <all-information :information="information"/>
  <video-player :link="information"/>
  <main-information />
</template>


<script>
import AllInformation from "@/components/Pages/FilmPage/TitleFilmInformation/TitleFilmInformation.vue";
import MainInformation from "@/components/Pages/FilmPage/MainFilmInformation/MainInformation";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import VideoPlayer from "@/components/Pages/FilmPage/VideoPlayer/VideoPlayer";


export default {
  components: {
    VideoPlayer,
    MainInformation,
    AllInformation,
  },

  setup(){
    const store = useStore()
    const route = useRoute()
    const getFilm = () => store.dispatch("films/getFilmApi", route.params.id)
    onMounted(getFilm)
    const information = computed(() => store.state.films.film)

    return {
      information,
    }
  }

};
</script>


<style>

</style>