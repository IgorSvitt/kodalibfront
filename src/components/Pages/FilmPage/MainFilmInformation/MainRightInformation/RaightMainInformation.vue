<template>
  <div class="">
    <actors-information  />
  </div>
</template>

<script>
import ActorsInformation
  from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/Actors/ActorsInformation";

export default {
  name: "RaightMainInformation",
  components: {ActorsInformation}
}
</script>

<style scoped>
.item-border{
  background-color: #efefef;
  padding: 20px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>