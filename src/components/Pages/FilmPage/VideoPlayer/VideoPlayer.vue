<template>
  <div class="test-bg">
    <div class="container page-video">
      <div class="video-player">
        <div class="text-video-player">
          Смотреть «{{link.title}}»
        </div>
        <iframe :src="link.linkVideo" width="100%" height="500"
                frameborder="0" allowfullscreen allow="autoplay *; fullscreen *"></iframe>
<!--        <div class="telegram">-->
<!--          <button class="btn-telegram" type="button">-->
<!--            Telegram-->
<!--          </button>-->
<!--        </div>-->
      </div>
      <div class="actors">
        <actors-information :actors="link.actors"/>
      </div>
    </div>
  </div>
<!--  <hr>-->
</template>

<script>
import ActorsInformation
  from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/Actors/ActorsInformation";
export default {
  name: "VideoPlayer",
  components: {ActorsInformation},
  props:{
    link:{
      type: Object
    }
  }
}
</script>

<style scoped>
.video-player {
  padding-left: 20px;
  width: 75%;
}

.text-video-player{
  color: #4e3883;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px ;
  text-align: left;
  line-height: 50px;
}




.telegram{
  margin-top: 10px;
  text-align: right;
}

.btn-telegram{
  background-color: #30B3EF;
  border: none;
  padding: 10px;
  color: #efefef;
  font-size: 24px;
  border-radius: 10px;
  width: 30%;
  font-weight: 600;
}

.btn-telegram:hover{
  background-color: #EB03A0;
  transition: background-color 0.1s linear;
}


.test-bg{
  background-color: #efefef;
}

.container.page-video{
  padding: 45px  0;
  display: flex;
  background-color: #ffffff;
}

.actors{
  width: 25%;
  margin-left: 40px;
}

</style>