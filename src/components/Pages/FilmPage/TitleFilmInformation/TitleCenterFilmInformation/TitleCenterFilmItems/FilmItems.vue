<template>
  <div class="info-description-data">
    <p class="info-description-block">
      <span class="info-description-block-year">{{ item.year }}</span>
    </p>
    <p class="info-description-block">
      <span class="info-description-block-duration">{{ item.duration }} мин</span>
    </p>
    <p class="info-description-block">
      <ListItems
          v-for="(country, id) in item.countries"
          :key="id"
          :link="country"
          :listLenght="(item.countries).length"
          :currentItem="id"
      />
    </p>
    <p class="info-description-block">
      <ListItems
          v-for="(genre, id) in item.genres"
          :key="id"
          :link="genre"
          :listLenght="(item.genres).length"
          :currentItem="id"
      />
    </p>
    <p class="info-description-block">
      <span class="info-description-block-budget">{{ item.budget }}</span>
    </p>
    <p class="info-description-block">
      <span class="info-description-block-grossworldwide">{{
          item.grossWorldwide
        }}</span>
    </p>
    <p class="info-description-block">
      <ListItems
          v-for="(director, id) in item.director"
          :key="id"
          :link="director.name"
          :idPerson="director.id"
          :listLenght="(item.director).length"
          :currentItem="id"
      />
    </p>
    <p class="info-description-block">
      <ListItems
          v-for="(writer, id) in item.writer"
          :key="id"
          :link="writer.name"
          :idPerson="writer.id"
          :listLenght="(item.writer).length"
          :currentItem="id"
      />
    </p>
    <p class="info-description-block">
      <ListItems
          v-for="(actor, id) in item.topActors"
          :key="id"
          :link="actor.name"
          :idPerson="actor.id"
          :listLenght="(item.topActors).length"
          :currentItem="id"
      />
    </p>
  </div>
</template>


<script>
import ListItems from "./ListItems.vue";

export default {
  components: {ListItems},
  props: {
    item: {
      type: Object,
    },
  },
  name: "film-items",
  setup() {
  },
};
</script>

<style scoped>
.info-description-block {
  margin-bottom: 30px;
}

.info-description-data {
  width: 100%;
  font-size: 16px;
}
</style>