<template>
  <header class="header">
    <div class="container">
      <nav class="nav row">
        <a href="/" class="logo"> KODALIB </a>
        <a href="#" class="menu">
          <img src="../../../assets/NavbarImage/menu.svg" alt="menu" class="menu-img"/>
          Меню
        </a>
        <form action="" class="search-bar">
          <input type="text" placeholder="Поиск" name="q" v-model="query"/>
          <button type="submit" class="search-btn">
            <img src="../../../assets/NavbarImage/search.svg" class="search-img"/>
          </button>
        </form>
        <a href="#" class="watchlist">
          <img src="../../../assets/NavbarImage/watchlist.svg" alt="watchlist" class="watchlist-img"/>
          Watchlist
        </a>
        <a href="" class="account">Аккаунт</a>
      </nav>
    </div>
  </header>
</template>


<script>
import {ref} from "vue";

export default {
  name: "my-navbar",

  setup() {

    const query = ref("")


    return {
      query,
    }
  },
};
</script>


<style scoped>
header {
  background-color: #4e3883;
}


a:hover {
  color: #ffddcc;
}

.nav {
  font-size: 18px;
  line-height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1px 0;
}

.logo {
  color: #efefef;
  font-size: 30px;
  font-weight: 700;
  line-height: 50px;
}

.menu,
.watchlist,
.account{
  color: #efefef;
}

.menu-img,
.watchlist-img {
  height: 20px;
  width: 20px;
}

.watchlist,
.menu {
  display: flex;
  align-items: center;
}

.watchlist-img {
  margin-right: 10px;
}

.watchlist:hover img {
  content: url(../../../assets/NavbarImage/watchlist-hover.svg);
}

.menu:hover img {
  content: url(../../../assets/NavbarImage/menu-hover.svg);
}

/* Search */

.search-bar {
  width: 100%;
  flex-grow: 3;
  max-width: 700px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 112px;
  padding: 5px;
  font-size: 24px;
}

.search-bar input {
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  padding-left: 15px;
  opacity: 1;
  color: #efefef;
}

.search-bar button {
  border: 0;
  background: none;
  color: #1b132e;
  cursor: pointer;
}

.search-img {
  width: 20px;
  height: 20px;
}

.search-btn {
  display: flex;
  padding-right: 5px;
}
</style>