<template>
<div>
  <div><a :href="'/film/'+ filmPoster.id"><img :src="filmPoster.poster" class="poster"></a></div>
</div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "ItemCarousel",
  props:{
    id:{
      type: Number
    }
  },
  setup(props){

    const filmPoster = ref("")

    axios.get("https://localhost:7248/api/Films/GetFilm/" + props.id)
        .then(responce => {
            filmPoster.value = responce.data
        })

    return{
      filmPoster
    }
  }
}
</script>

<style scoped>

.poster{
  width: 200px;
}
</style>