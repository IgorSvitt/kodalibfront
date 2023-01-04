<template>
  <div class="top-films">
    <div class="title-top-films">
      <span>Top films</span>
    </div>
    <div class="list-films">
      <carousel-film :films="filmPoster"/>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import CarouselFilm from "@/components/Pages/MainPage/ListFilm/CarouselFilms/CarouselFilm";

export default {
  name: "TopFilmsFromSite",
  components: {CarouselFilm},
  setup() {

    const filmPoster = ref([1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ])


    return {
      filmPoster
    }
  }
}
</script>

<style scoped>
.title-top-films {
  color: #efefef;
  font-size: 40px;
}

.title-top-films {
  margin-bottom: 20px;
}

.list-films {
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px 0;
}


</style>