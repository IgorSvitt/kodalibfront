import axios from "axios";
import {ref} from "vue";

export const films = {
    namespaced: true,

    state: () => ({
        film: {
            id: "",
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
            ratingKoda: "",
            kinopoiskRating: "",
            thumbnailUrl: "",
            youtubeTrailer: "",
            linkVideo: "",
            actors: []
        }
    }),

    getters: {},

    mutations: {
        setId(state, id) {
            state.film.id = id
        },

        setLinkVideo(state, link) {
            state.film.linkVideo = link
        },

        setTitle(state, title) {
            state.film.title = title
        },

        setPlot(state, plot) {
            state.film.plot = plot
        },

        setDuration(state, duration) {
            state.film.duration = duration
        },

        setYear(state, year) {
            state.film.year = year
        },

        setGenres(state, genres) {
            const genre = ref([])
            for (let i = 0; i < genres.length; i++) {
                genre.value.push(genres[i].name)
            }
            state.film.genres = genre
        },

        setBudget(state, budget) {
            state.film.budget = budget
        },

        setCountries(state, countries) {
            const country = ref([])
            for (let i = 0; i < countries.length; i++) {
                country.value.push(countries[i].name)
            }
            state.film.countries = country
        },

        setDirector(state, directors) {
            state.film.director = directors
        },

        setWriter(state, writers) {
            state.film.writer = writers
        },

        setTopActors(state, topActors) {
            state.film.topActors = topActors
        },

        setPoster(state, poster) {
            state.film.poster = poster
        },

        setRatingKoda(state, ratingKoda) {
            state.film.ratingKoda = ratingKoda
        },
        setKinopoiskRating(state, kinopoiskRating) {
            state.film.kinopoiskRating = kinopoiskRating
        },

        setThumbnailUrl(state, thumbnailUrl) {
            state.film.thumbnailUrl = thumbnailUrl
        },

        setYoutubeTrailer(state, youtubeTrailer) {
            state.film.youtubeTrailer = youtubeTrailer
        },

        setGrossWorldwide(state, grossWorldwide) {
            state.film.grossWorldwide = grossWorldwide
        },

        setActors(state, actors) {
            state.film.actors = actors
        },
    },

    actions: {
        getFilmApi({commit}, id) {
            axios.get("https://localhost:7248/api/Films/GetFilm/" + id)
                .then(responce => {
                    commit("setId", responce.data.id)
                    commit("setTitle", responce.data.title)
                    commit("setPlot", responce.data.plot)
                    commit("setYear", responce.data.year)
                    commit("setDuration", responce.data.duration)
                    commit("setCountries", responce.data.filmsCountriesList)
                    commit("setGenres", responce.data.filmsGenreList)
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
                    commit("setLinkVideo", responce.data.linkVideo)
                })
                .catch(error => {
                    console.log(error.response.status)
                })
        }

    }

}