<template>
  <div class="container panels">
<!--        <input type="text" v-model="url">-->
<!--        <button @click="getFilms">Get</button>-->
<!--        <button @click="createOfFilm">Create</button>-->
    <left-panel/>
    <right-panel/>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import LeftPanel from "@/components/Pages/AdminPanel/LeftPanel/LeftPanel.vue";
import RightPanel from "./RightPanel/RightPanel.vue";

export default {
  components: {LeftPanel, RightPanel},
  setup() {
    const url = ref("");

    const films = ref([]);

    const listOfId = ref([]);

    // https://imdb-api.com/API/AdvancedSearch/k_sprfn59o?title_type=movie&country_of_origin=kr&release_date=2019-01-01,2019-02-01&count=250

    function getFilms() {
      axios.get(url.value).then((responce) => {
        films.value = responce.data.results;
        getidOfFilm();
      });
    }

    function getidOfFilm() {
      console.log(films.value.length);
      for (let i = 0; i < films.value.length; i++) {
        const film = films.value;
        listOfId.value.push(film[i].id);
      }
      console.log(listOfId.value)
    }

    function createOfFilm() {
      const config = {
        method: "post",
        url: "https://localhost:7248/api/Films/createNewFilmWithApi",
        data: listOfId.value,
      };
      axios(config);
    }

    return {
      films,
      url,
      getFilms,
      listOfId,
      createOfFilm,
    };
  },
};
</script>

<style scoped>
.panels {
  margin-top: 75px;
  display: flex;
  min-height: 920px;
}
</style>
