<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide v-for="(poster) in films" :key="poster.id">
        <item-carousel :id="poster"/>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>
<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import ItemCarousel from "@/components/Pages/MainPage/ListFilm/CarouselFilms/ItemCarousel";

export default {
  name: 'carousel-film',
  props:{
    films:[]
  },
  components: {
    ItemCarousel,
    Carousel,
    Slide,
    Navigation,
  },


  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      mouseDrag: false,
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
};
</script>

<style scoped>

</style>