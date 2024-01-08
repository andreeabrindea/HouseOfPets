<script setup lang="ts">
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize();
const isOpen = ref(false);
</script>

<template>
  <header id="page-wrapper">
    <img class="logo-image" alt="logo" src="../assets/houseOfPets.png">
    <ul class="pages" v-if="width > 768">
      <li id="home-link"><a href="/home">Home </a></li>
      <li id="cats-link"><a href="/cats">Cats</a></li>
      <li id="dogs-link"><a href="/dogs">Dogs</a></li>
      <li id="contact-link"><a href="/contact">Contact</a></li>
    </ul>
    <a v-else @click="() => isOpen = !isOpen" class="burger-menu"> 
      <div class="burger-menu-strap"></div>
      <div class="burger-menu-strap"></div>
      <div class="burger-menu-strap"></div> 
    </a>
    <ul class="burger-pages" v-if="isOpen">
      <li id="home-link"><a href="/home">Home </a></li>
      <li id="cats-link"><a href="/cats">Cats</a></li>
      <li id="dogs-link"><a href="/dogs">Dogs</a></li>
      <li id="contact-link"><a href="/contact">Contact</a></li>
    </ul>
  </header>
</template>

<style scoped>
.burger-menu {
  margin-left: 10px;
}
.burger-menu-strap {
  width: 24px;
  height: 2px;
  background-color: #E8A444;
  margin: 6px 0;
}
.logo-image {
  width: 200px;
  height: auto;
}

#page-wrapper {
  display: flex;
  flex-direction: row;
}

ul.pages {
  margin-top: 50px;
  display: table;
  width: 50%;

}

ul.pages>li {
  display: table-cell;
  font-size: 20px;
  font-family: 'American Typewriter';
}

li:hover {
  cursor: pointer;
}

.burger-pages {
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 768px) {
  .logo-image {
    width: 100px;
  }

  #home-link,
  #cats-link,
  #dogs-link,
  #contact-link {
    margin-right: 10px;
  }

  #page-wrapper {
    flex-direction: column;
  }
  ul.burger-pages {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    list-style: none;
    align-items: start;
    font-family: 'American Typewriter';
  }
}
 
</style>
