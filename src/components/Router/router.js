import Main from "@/components/Pages/MainPage/Main"
import FilmPage from "@/components/Pages/FilmPage/FilmPage"
import AdminPanel from "@/components/Pages/AdminPanel/AdminPanel"
import {createRouter, createWebHistory} from "vue-router";
import PersonPage from "@/components/Pages/PersonPage/PersonPage";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/film/:id",
        component: FilmPage
    },
    {
        path: "/person/:id",
        component: PersonPage
    },
    {
        path: "/adminpanel",
        component: AdminPanel
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
    