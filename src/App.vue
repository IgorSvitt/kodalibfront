<template>
  <my-navbar/>
  <router-view/>
  <my-footer  class="footer"/>
</template>

<script>

import MyFooter from "@/components/UI/Footer/MyFooter";
export default {
  components: {MyFooter}
}
</script>

<style>
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

body {
  background-color: #1B132E;
  height: 100%;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
}

</style>