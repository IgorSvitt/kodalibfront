 <template>
    <div class="container">
    <main-title class="section-main"/>
      <top-films-from-site class="section-main"/>
      <top-films-koda class="section-main" />
      <top-comedy class="section-main" />
 </div>
 </template>
 
 <script>
 import MainTitle from "@/components/Pages/MainPage/Title/MainTitle";
 import TopFilmsFromSite from "@/components/Pages/MainPage/ListFilm/TopFilmsFromSite";
 import TopFilmsKoda from "@/components/Pages/MainPage/ListFilm/TopKoda";
 import TopComedy from "@/components/Pages/MainPage/ListFilm/TopComedy";
 export default {
    name: "main-page",
   components: {TopComedy, TopFilmsKoda, TopFilmsFromSite, MainTitle},
 }
 </script>
 
 <style scoped>
 .section-main{
   margin-top: 75px;
 }
 </style>