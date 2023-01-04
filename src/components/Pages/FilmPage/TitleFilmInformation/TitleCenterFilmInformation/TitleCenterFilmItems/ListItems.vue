<template>
  <span>
    <a :href="'/person/' + idPerson" class="info-description-block-a">{{ link }}</a>
    <span v-if="currentItem+1 !== listLenght">,&nbsp;</span>
  </span>
</template>


<script>
export default {
  name: "list-items",
  props: {
    link: {
      type: Object,
    },
    idPerson:{
      type: Object
    },
    listLenght: {
      type: Number,
      requred: true,
    },
    currentItem:{
      type:Number
    }
  },
  setup() {},
};
</script>


<style scoped>
.info-description-block-a {
  color: #ffddcc;
}

.info-description-block-a:hover {
  color: #fed534;
}
</style>