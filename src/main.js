import { createApp } from 'vue'
import App from './App.vue'
import router  from "@/components/Router/router"
import components from "@/components/UI"
import store from "@/Store/store"
import YoutubeIframe from '@techassi/vue-youtube-iframe';

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .use(store)
    .use(YoutubeIframe)
    .mount('#app')


