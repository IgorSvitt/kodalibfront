<template>
  <div class="actor-info">
    <div class="actor-block-img">
      <img class="actor-img" :src="imgActor" :class="{'active': activePhoto}">
    </div>
    <div class="actor-block-text">
      <div class="actor-name">
       <a :href="'/person/'+actorInfo.id">{{ actorInfo.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

export default {
  name: "ActorItem",
  props: {
    actorInfo: {
      type: Object,
    }
  },
  setup(props) {
    const imgActor = ref("https://imdb-api.com/images/original/nopicture.jpg")
    const activePhoto = ref(false)
    axios.get("https://localhost:7248/api/Person/GetPerson/" + props.actorInfo.id)
        .then(responce => {
          if (responce.data.image !== null && responce.data.image !== imgActor.value) {
            imgActor.value = responce.data.image
            activePhoto.value = true
          }
          if(imgActor.value === undefined){
            imgActor.value = "https://imdb-api.com/images/original/nopicture.jpg"
            activePhoto.value = false
          }
        })
    return {
      imgActor,
      activePhoto
    }
  }
}
</script>

<style scoped>
.actor-info {
  display: flex;
  margin-top: 10px;
}

.actor-block-img {
  display: inline-block;
  border-radius: 100%;
  overflow: hidden;
  width: 75px;
  height: 75px;
}


.actor-img.active{
  width: 100%;
  height: 100%;
  object-position: top center;
  object-fit: cover;
}

.actor-img{
  width: 100%;
  height: 100%;
  object-position: center center;
  object-fit: cover;
}

.actor-block-text {
  padding-left: 10px;
  display: flex;
  max-width: 225px;
  align-items: center;
}

.actor-name {
  color: #000;
  font-size: 20px;
}

a{
  color: #4e3883;
}

a:hover{
  color: #fed534;
}
</style>