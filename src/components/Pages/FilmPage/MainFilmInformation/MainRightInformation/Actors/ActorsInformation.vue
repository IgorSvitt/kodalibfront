<template>
  <div class="title-actors">
    Актеры
  </div>
  <div>
    <ul v-for="(actor, index) in actors" :key="actor.index">
      <span v-if="index < 6">
        <li><actor-item  :actorInfo="actor"/></li>
      </span>
    </ul>
  </div>
</template>

<script>
import ActorItem from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/Actors/Item/ActorItem";

export default {
  name: "ActorsInformation",
  components: {ActorItem},
  props:{
    actors:{
      type: Object
    }
  },
  setup() {
  }
}
</script>

<style scoped>
.title-actors {
  color: #4e3883;
  font-size: 30px;
  font-weight: 600;
  line-height: 50px;
  margin-bottom: 20px ;
}

li{
  list-style-type: none;
}
</style>