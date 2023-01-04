<template>
  <div class="title-actors">
    Актеры
  </div>
  <div>
    <ul v-for="(actor, index) in actors" :key="actor.id">
      <span v-if="index < 10">
        <li><actor-item  :actorInfo="actor"/></li>
      </span>
    </ul>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import ActorItem from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/Actors/Item/ActorItem";

export default {
  name: "ActorsInformation",
  components: {ActorItem},
  setup() {
    const store = useStore()

    const actors = computed(() => store.state.films.film.actors)
    return {
      actors
    }
  }
}
</script>

<style scoped>
.title-actors {
  color: rgba(255,255,255, 0.8);
  font-size: 30px;
  font-weight: 500;
  line-height: 50px;
  margin-bottom: 20px ;
}

li{
  list-style-type: none;
}
</style>