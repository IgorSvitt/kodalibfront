<template>
  <div class="info">
    <div class="container info-container">
      <title-left-series-information :imgPoster="seriesInfo.poster"/>
      <title-center-series-information :series="seriesInfo"/>
      <title-right-series-information :series="seriesInfo"/>
    </div>
  </div>
</template>

<script>
import TitleCenterSeriesInformation
  from "@/components/Pages/SeriesPage/TitleSeriesInformation/TitleCentreSeriesInformation/TitleCenterSeriesInformation";
import TitleRightSeriesInformation
  from "@/components/Pages/SeriesPage/TitleSeriesInformation/TitleRightSeriesInformation/TitleRightSeriesInformation";
import TitleLeftSeriesInformation
  from "@/components/Pages/SeriesPage/TitleSeriesInformation/TitleLeftSeriesInformation/TitleLeftSeriesInformation";

export default {
  name: "TitleSeriesInformation",
  components: {TitleLeftSeriesInformation, TitleRightSeriesInformation, TitleCenterSeriesInformation},
  props: {
    seriesInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
.info {
  background-color: #1b132e;
  padding: 45px 0;
  color: #efefef;
  margin: auto;
}

.info-container {
  display: flex;
  justify-content: space-between;
}

</style>