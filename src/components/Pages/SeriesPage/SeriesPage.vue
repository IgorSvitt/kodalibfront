<template>
<div>
<title-series-information :seriesInfo="seriesInformation"/>
  <series-video-player :link="seriesInformation"/>
  <my-comment />
</div>
</template>

<script>
import TitleSeriesInformation from "@/components/Pages/SeriesPage/TitleSeriesInformation/TitleSeriesInformation";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import SeriesVideoPlayer from "@/components/Pages/SeriesPage/SeriesVideoPlayer/SeriesVideoPlayer";
import MyComment from "@/components/UI/Comment/MyComment";
export default {
  name: "SeriesPage",
  components: {MyComment, SeriesVideoPlayer, TitleSeriesInformation},
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

</style>