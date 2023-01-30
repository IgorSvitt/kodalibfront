import axios from "axios";
import {ref} from "vue";

export const series = {
    namespaced: true,

    state: () => ({
        serial: {
            id: "",
            title: "",
            plot: "",
            year: "",
            duration: "",
            countries: [],
            genres: [],
            director: [],
            writer: [],
            topActors: [],
            poster: "",
            ratingKoda: "",
            kinopoiskRating: "",
            thumbnailUrl: "",
            youtubeTrailer: "",
            actors: [],
            seasons:[],
            countSeason: "",
            countEpisodes: "",
        }
    }),

    getters: {},

    mutations: {
        setId(state, id) {
            state.serial.id = id
        },

        setTitle(state, title) {
            state.serial.title = title
        },

        setPlot(state, plot) {
            state.serial.plot = plot
        },

        setDuration(state, duration) {
            state.serial.duration = duration
        },

        setYear(state, year) {
            state.serial.year = year
        },

        setGenres(state, genres) {
            const genre = ref([])
            for (let i = 0; i < genres.length; i++) {
                genre.value.push(genres[i].name)
            }
            state.serial.genres = genre
        },

        setBudget(state, budget) {
            state.serial.budget = budget
        },

        setCountries(state, countries) {
            const country = ref([])
            for (let i = 0; i < countries.length; i++) {
                country.value.push(countries[i].name)
            }
            state.serial.countries = country
        },

        setDirector(state, directors) {
            state.serial.director = directors
        },

        setWriter(state, writers) {
            state.serial.writer = writers
        },

        setTopActors(state, topActors) {
            state.serial.topActors = topActors
        },

        setPoster(state, poster) {
            state.serial.poster = poster
        },

        setRatingKoda(state, ratingKoda) {
            state.serial.ratingKoda = ratingKoda
        },
        setKinopoiskRating(state, kinopoiskRating) {
            state.serial.kinopoiskRating = kinopoiskRating
        },

        setThumbnailUrl(state, thumbnailUrl) {
            state.serial.thumbnailUrl = thumbnailUrl
        },

        setYoutubeTrailer(state, youtubeTrailer) {
            state.serial.youtubeTrailer = youtubeTrailer
        },

        setGrossWorldwide(state, grossWorldwide) {
            state.serial.grossWorldwide = grossWorldwide
        },

        setActors(state, actors) {
            state.serial.actors = actors
        },

        setSeason(state, season) {
            state.serial.seasons = season
        },
        setCountSeason(state, countSeason) {
            state.serial.countSeason = countSeason
        },
        setCountEpisodes(state, countEpisodes) {
            state.serial.countEpisodes = countEpisodes
        },
    },

    actions: {
        getSerialApi({commit}, id) {
            axios.get("https://localhost:7248/api/Serial/GetOneSeries/" + id)
                .then(responce => {
                    commit("setId", responce.data.id)
                    commit("setTitle", responce.data.title)
                    commit("setPlot", responce.data.plot)
                    commit("setYear", responce.data.year)
                    commit("setDuration", responce.data.duration)
                    commit("setCountries", responce.data.seriesCountriesList)
                    commit("setGenres", responce.data.seriesGenreList)
                    commit("setBudget", responce.data.budget)
                    commit("setGrossWorldwide", responce.data.grossWorldwide)
                    commit("setDirector", responce.data.directorList)
                    commit("setWriter", responce.data.writersList)
                    commit("setTopActors", responce.data.topActorsList)
                    commit("setPoster", responce.data.poster)
                    commit("setRatingKoda", responce.data.kodalibRating)
                    commit("setKinopoiskRating", responce.data.kinopoiskRating)
                    commit("setThumbnailUrl", responce.data.thumbnailUrl)
                    commit("setYoutubeTrailer", responce.data.youtubeTrailer)
                    commit("setActors", responce.data.actorsList)
                    commit("setSeason", responce.data.seasonViewModels)
                    commit("setCountSeason", responce.data.countSeasons)
                    commit("setCountEpisodes", responce.data.countEpisodes)
                })
                .catch(error => {
                    console.log(error.response.status)
                })
        }

    }

}