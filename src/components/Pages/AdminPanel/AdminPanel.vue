<template>
  <input type="text" v-model="url">
  <button @click="getFilms">GetFilm</button>
  <button @click="getSeries">GetSerial</button>
  <div class="container panels">
    <left-panel/>
    <right-panel/>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import LeftPanel from "@/components/Pages/AdminPanel/LeftPanel/LeftPanel.vue";
import RightPanel from "./RightPanel/RightPanel.vue";

export default {
  components: {LeftPanel, RightPanel},
  setup() {
    const url = ref("");

    const series = ref([]);
    const films = ref([]);
    const dataFilm = ref([])

    const dataSeries = ref([])

    function getFilms() {
      axios.get(url.value).then((responce) => {
        series.value = responce.data.results;
        getFilm()
      });
    }

    function getFilm() {
      for (let i = 0; i < films.value.length; i++) {
        const film = ref({
          kinopoiskId: "",
          title: "",
          plot: "",
          year: "",
          duration: "",
          countries: [],
          genres: [],
          budget: "",
          grossWorldwide: "",
          director: [],
          writer: [],
          topActors: [],
          poster: "",
          ratingKinopoisk: "",
          thumbnailUrl: "",
          youtubeTrailer: "",
          linkVideo: "",
          actors: []
        })
        film.value.kinopoiskId = films.value[i].kinopoisk_id
        film.value.title = films.value[i].title
        film.value.plot = films.value[i].material_data.description
        film.value.year = films.value[i].year
        film.value.duration = films.value[i].material_data.duration
        for (let j = 0; j < films.value[i].material_data.countries.length; j++) {
          film.value.countries.push({"name": films.value[i].material_data.countries[j]})
        }
        film.value.poster = films.value[i].material_data.poster_url
        film.value.ratingKinopoisk = films.value[i].material_data.kinopoisk_rating
        film.value.linkVideo = films.value[i].link
        film.value.thumbnailUrl = films.value[i].screenshots[0]
        axios.get(`https://api.kinopoisk.dev/movie?token=BN3C1H2-7NNMFSY-HXKY1HJ-EQ1XVZP&search=${film.value.kinopoiskId}&field=id`)
            .then(responce => {

              for (let j = 0; j < responce.data.genres.length; j++) {
                film.value.genres.push({"name": responce.data.genres[j].name})
              }

              for (let j = 0; j < responce.data.videos.trailers.length; j++) {
                if (responce.data.videos.trailers[j].site === "youtube") {
                  film.value.youtubeTrailer = responce.data.videos.trailers[j].url
                }
              }
              const actors = ref([])
              const writer = ref([])
              const director = ref([])
              for (let j = 0; j < responce.data.persons.length; j++) {
                if (responce.data.persons[j].enProfession === "actor") {
                  actors.value.push({
                    name: responce.data.persons[j].name,
                    actorKinopoiskId: String(responce.data.persons[j].id)
                  })
                }


                if (responce.data.persons[j].enProfession === "writer") {
                  writer.value.push({
                    name: responce.data.persons[j].name,
                    writerKinopoiskId: String(responce.data.persons[j].id)
                  })
                }

                if (responce.data.persons[j].enProfession === "director") {
                  director.value.push({
                    name: responce.data.persons[j].name,
                    directorKinopoiskId: String(responce.data.persons[j].id)
                  })
                }
              }
              film.value.actors = actors.value
              film.value.writer = writer.value
              film.value.director = director.value

              dataFilm.value.push({
                "kinopoiskId": film.value.kinopoiskId,
                "title": film.value.title,
                "poster": film.value.poster,
                "year": film.value.year,
                "duration": String(film.value.duration),
                "plot": film.value.plot,
                "kinopoiskRating": String(film.value.ratingKinopoisk),
                "budget": film.value.budget,
                "grossWorldwide": film.value.grossWorldwide,
                "youtubeTrailer": film.value.youtubeTrailer,
                "thumbnailUrl": film.value.thumbnailUrl,
                "linkVideo": film.value.linkVideo,
                "filmsCountriesList": film.value.countries,
                "filmsGenreList": film.value.genres,
                "actorsList": film.value.actors,
                "topActorsList": [],
                "writersList": film.value.writer,
                "directorList": film.value.director
              })

              if (dataFilm.value.length === films.value.length - 1) {
                const config = ({
                  method: "post",
                  url: "https://localhost:7248/api/Films/CreateFilms",
                  data: dataFilm.value,
                })
                console.log(config.data)
                axios(config)
              }
            })
      }
    }


    function getSeries() {
      axios.get(url.value).then((responce) => {
        series.value = responce.data.results;
        getSerial()
      });
    }

    function getSerial() {
      for (let i = 0; i < series.value.length; i++) {
        const serial = ref({
          kinopoiskId: "",
          title: "",
          plot: "",
          year: "",
          duration: "",
          countries: [],
          genres: [],
          budget: "",
          grossWorldwide: "",
          director: [],
          writer: [],
          topActors: [],
          poster: "",
          ratingKinopoisk: "",
          thumbnailUrl: "",
          youtubeTrailer: "",
          seasons: [],
          actors: []
        })
        serial.value.kinopoiskId = series.value[i].kinopoisk_id
        serial.value.title = series.value[i].title
        serial.value.plot = series.value[i].material_data.description
        serial.value.year = series.value[i].year
        serial.value.duration = series.value[i].material_data.duration
        for (let j = 0; j < series.value[i].material_data.countries.length; j++) {
          serial.value.countries.push({"name": series.value[i].material_data.countries[j]})
        }
        serial.value.poster = series.value[i].material_data.poster_url
        serial.value.ratingKinopoisk = series.value[i].material_data.kinopoisk_rating
        serial.value.thumbnailUrl = series.value[i].screenshots[0]
        var countSeason = 0;
        for (var season in series.value[i].seasons) {
          countSeason++
          const episodes = ref([])
          var countEpisode = 0;
          for (var episode in series.value[i].seasons[season].episodes) {
            countEpisode++
            episodes.value.push({
              "numberEpisode": countEpisode,
              "videoLink": series.value[i].seasons[season].episodes[episode].link,
              "image": series.value[i].seasons[season].episodes[episode].screenshots[1]
            })
          }
          serial.value.seasons.push({
            "numberSeason": countSeason,
            "episodes": episodes.value
          })
        }

        if(serial.value.kinopoiskId != null){
          axios.get(`https://api.kinopoisk.dev/movie?token=BN3C1H2-7NNMFSY-HXKY1HJ-EQ1XVZP&search=${serial.value.kinopoiskId}&field=id`)
              .then(responce => {

                for (let j = 0; j < responce.data.genres.length; j++) {
                  serial.value.genres.push({"name": responce.data.genres[j].name})
                }

                for (let j = 0; j < responce.data.videos.trailers.length; j++) {
                  if (responce.data.videos.trailers[j].site === "youtube") {
                    serial.value.youtubeTrailer = responce.data.videos.trailers[j].url
                  }
                }
                const actors = ref([])
                const writer = ref([])
                const director = ref([])
                for (let j = 0; j < responce.data.persons.length; j++) {
                  if (responce.data.persons[j].enProfession === "actor") {
                    actors.value.push({
                      name: responce.data.persons[j].name,
                      actorKinopoiskId: String(responce.data.persons[j].id)
                    })
                  }


                  if (responce.data.persons[j].enProfession === "writer") {
                    writer.value.push({
                      name: responce.data.persons[j].name,
                      writerKinopoiskId: String(responce.data.persons[j].id)
                    })
                  }

                  if (responce.data.persons[j].enProfession === "director") {
                    director.value.push({
                      name: responce.data.persons[j].name,
                      directorKinopoiskId: String(responce.data.persons[j].id)
                    })
                  }
                }
                serial.value.actors = actors.value
                serial.value.writer = writer.value
                serial.value.director = director.value

                dataSeries.value.push({
                  "kinopoiskId": serial.value.kinopoiskId,
                  "title": serial.value.title,
                  "poster": serial.value.poster,
                  "year": serial.value.year,
                  "duration": String(serial.value.duration),
                  "plot": serial.value.plot,
                  "kinopoiskRating": String(serial.value.ratingKinopoisk),
                  "budget": serial.value.budget,
                  "grossWorldwide": serial.value.grossWorldwide,
                  "youtubeTrailer": serial.value.youtubeTrailer,
                  "thumbnailUrl": serial.value.thumbnailUrl,
                  "filmsCountriesList": serial.value.countries,
                  "filmsGenreList": serial.value.genres,
                  "actorsList": serial.value.actors,
                  "topActorsList": [],
                  "writersList": serial.value.writer,
                  "directorList": serial.value.director,
                  "seasonViewModels": serial.value.seasons
                })

                if (dataSeries.value.length === series.value.length - 1) {
                  const config = ({
                    method: "post",
                    url: "https://localhost:7248/api/Serial/CreateSeries",
                    data: dataSeries.value,
                  })
                  console.log(config.data)
                  axios(config)
                }
              })
        }
        else{
          dataSeries.value.push({
            "kinopoiskId": serial.value.kinopoiskId,
            "title": serial.value.title,
            "poster": serial.value.poster,
            "year": serial.value.year,
            "duration": String(serial.value.duration),
            "plot": serial.value.plot,
            "kinopoiskRating": String(serial.value.ratingKinopoisk),
            "budget": serial.value.budget,
            "grossWorldwide": serial.value.grossWorldwide,
            "youtubeTrailer": serial.value.youtubeTrailer,
            "thumbnailUrl": serial.value.thumbnailUrl,
            "filmsCountriesList": serial.value.countries,
            "filmsGenreList": serial.value.genres,
            "actorsList": serial.value.actors,
            "topActorsList": [],
            "writersList": serial.value.writer,
            "directorList": serial.value.director,
            "seasonViewModels": serial.value.seasons
          })

          if (dataSeries.value.length === series.value.length - 1) {
            const config = ({
              method: "post",
              url: "https://localhost:7248/api/Serial/CreateSeries",
              data: dataSeries.value,
            })
            console.log(config.data)
            axios(config)
          }
        }
      }
    }

    return {
      films,
      series,
      url,
      getFilms,
      getSeries
    };
  },
};
</script>

<style scoped>
.panels {
  margin-top: 75px;
  display: flex;
  min-height: 920px;
}
</style>
