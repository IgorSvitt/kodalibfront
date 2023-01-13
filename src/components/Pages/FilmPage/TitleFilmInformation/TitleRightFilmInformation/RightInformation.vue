<template>
  <div class="info-right">
    <div class="info-trailer-img" id="open_popup" v-if="film.youtubeTrailer !== ''" @click="popupTriger.buttonTrigger = !popupTriger.buttonTrigger">
      <img
          :src="film.thumbnailUrl"
          alt=""
      />
      <button class="button-trailer" type="button" @click="popupTriger.buttonTrigger = !popupTriger.buttonTrigger">
        <img src="/src/assets/img/play.svg" alt="" class="info-trailer-mini-img"/>
        <span class="info-text-trailer"> Трейлер </span>
      </button>
    </div>
    <div class="info-right-other">
      <div class="info-other">
        <span class="info-rate">
          <span class="info-rating-text">Рейтинг Kodalib:</span>
          <span class="info-rating-number">{{
              film.ratingKoda
            }}</span>
        </span>
        <a href="#" class="info-orher-ccra">
          Оценить
          <img src="/src/assets/img/close.svg" alt="" class="arrow-img"/>
        </a>
      </div>

        <div class="pop-up" id="popup" v-show="popupTriger.buttonTrigger">
          <div class="pop-up-container" id="close_popup" @click="popupTriger.buttonTrigger = !popupTriger.buttonTrigger">
<!--            <img-->
<!--                src="/src/assets/img/close.svg"-->
<!--                alt=""-->
<!--                class="img-close-trailer"-->
<!--                id="close_popup"-->
<!--            />-->
            <div class="pop-up-body">
              <iframe
                  id="trailer"
                  :src="youtubeTrailer"
                  allow="fullscreen"
              >
                <!-- https://www.youtube.com/embed/Jvurpf91omw?enablejsapi=1 -->
              </iframe>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
export default {
  name: "right-information",

  props: {
    film: {
      type: Object,
    },
  },
  setup(props) {
    const popupTriger = ref({
      buttonTrigger: false
    })
    const youtubeTrailer = computed(() => props.film.youtubeTrailer)
    return {
      youtubeTrailer,
      popupTriger
    }
  },
};
</script>

<style scoped>
.info-right {
  display: block;
}

.info-trailer-img {
  position: relative;
  width: 310px;
  height: 180px;
}

.info-trailer-img:hover {
  opacity: 0.7;
  cursor: pointer;
}

.info-trailer-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-right {
  width: 310px;
}

.button-trailer {
  display: flex;
  align-items: center;
  position: absolute;
  left: 13px;
  bottom: 13px;
  border: none;
  background-color: #4e3883;
  padding: 3px 15px;
  border-radius: 30px;
  cursor: pointer;
}

.info-text-trailer {
  font-size: 16px;
  color: #efefef;
}

.info-trailer-mini-img {
  height: 15px;
  width: 15px;
}

.info-other {
  margin-top: 30px;
  font-size: 30px;
}

.info-rating-text {
  margin-right: 10px;
  font-size: 24px;
  font-weight: 400;
  color: #efefef;
}

.info-rating-number {
  font-size: 27px;
  font-weight: 700;
  color: #ffb996;
}

.info-orher-ccra {
  margin-top: 10px;
  color: #efefef;
  font-size: 20px;
  display: block;
  padding: 5px;
  text-align: center;
  border-radius: 40px;
  align-items: center;
  max-width: 100px;
  background-color: #4e3883;
}

.pop-up {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(0%) scale(100%);
  transition: .3s ease-in-out;
}

.pop-up.active {
  transform: translate(0%) scale(100%);

}

.pop-up-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.pop-up-body iframe {
  width: 860px;
  height: 480px;
  border: none;
}

.img-close-trailer {
  position: absolute;
  opacity: 0.6;
  top: 0;
  right: 0;
  padding-top: 60px;
  padding-right: 60px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.img-close-trailer:hover {
  opacity: 1;
}
</style>