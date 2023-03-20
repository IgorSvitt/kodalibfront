<template>
  <div class="bg">
    <img src="@/assets/img/bg.png" class="bg-img">
    <div class="container">
      <top-films-from-site class="section-main"/>
      <top-films-koda class="section-main"/>
      <top-comedy class="section-main"/>
    </div>
  </div>
</template>

<script>
import TopFilmsFromSite from "@/components/Pages/MainPage/ListFilm/TopFilmsFromSite";
import TopFilmsKoda from "@/components/Pages/MainPage/ListFilm/TopKoda";
import TopComedy from "@/components/Pages/MainPage/ListFilm/TopComedy";

export default {
  name: "main-page",
  components: {TopComedy, TopFilmsKoda, TopFilmsFromSite},
}
</script>

<style scoped>
.section-main {
  margin-top: 75px;
}

.bg-img{
  object-position: center center;
  object-fit: cover;
  width: 100%;
  height: 600px;
}

</style>