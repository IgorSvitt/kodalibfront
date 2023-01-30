<template>
  <div class="body-information">
    <div class="container information">
      <div class="main-information">
        <div class="left-information">
         <left-main-inforamtion />
        </div>
        <div class="right-information">
          <right-information />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightInformation from "@/components/Pages/FilmPage/MainFilmInformation/MainRightInformation/RaightMainInformation";
import LeftMainInforamtion from "@/components/Pages/FilmPage/MainFilmInformation/MainLeftInformation/LeftMainInforamtion";
export default {
  name: "MainInformation",
  components: {RightInformation, LeftMainInforamtion}
}
</script>

<style scoped>
.body-information {
  background-color: #efefef;
  height: 100%;
  width: 100%;
}

.information{
  background-color: #ffffff;
  height: 100%;
}

.main-information{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
}

.left-information{
  width: 75%;
}

.right-information{
  max-width: 310px;
  width: 25%;
}
</style>