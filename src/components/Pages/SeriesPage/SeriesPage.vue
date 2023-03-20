<template>
  <div class="container">
    <div class="film-information">
      <series-information :seriesInformation="seriesInformation"/>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import SeriesInformation from "@/components/Pages/SeriesPage/SeriesInformation/SeriesInformation";

export default {
  name: "SeriesPage",
  components: {SeriesInformation},
  setup(){
    const route = useRoute()
    const store = useStore()

    const getSeries = () => store.dispatch("series/getSerialApi", route.params.id)
    onMounted(getSeries)

    const seriesInformation = computed(() => store.state.series.serial)

    return{
      seriesInformation
    }
  }
}
</script>

<style scoped>
.film-information{
  margin: 45px 20px 0;
}

</style>