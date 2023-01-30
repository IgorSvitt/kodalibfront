<template>
  <div class="info-left">
    <img :src="imgPoster" alt="" class="info-img" />
    <div class="info-btn-watchlist">
      <button class="button-addwatchlist" type="button">
        <span class="info-text-addwatchlist"> Добавить в watchlist </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleLeftSeriesInformation",
  props: {
    imgPoster: {
      type: String,
    },
  },
}
</script>

<style scoped>
.info-left {
  display: block;
  max-width: 310px;
}

.info-img {
  width: 310px;
  height: 460px;
  box-shadow:0 0 60px #4e3883;
}

.info-btn-watchlist {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  max-width: 310px;
}

.button-addwatchlist {
  background-color: #4e3883;
  border: none;
  width: 100%;
  padding: 10px 0;
  border-radius: 40px;
  cursor: pointer;
}

.button-addwatchlist:hover {
  background-color: rgba(78, 56, 131, 0.8);
}

.info-text-addwatchlist {
  font-size: 20px;
  color: #efefef;
}
</style>