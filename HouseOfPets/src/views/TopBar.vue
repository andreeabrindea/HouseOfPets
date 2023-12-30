<script setup lang="ts">
</script>

<template>
  <header>
    <img class="logo-image" alt="logo" src="../assets/houseOfPets.png">
    <ul class="pages">
      <li><a href="/home">Home </a></li>
      <li><a href="/cats">Cats</a></li>
      <li><a href="/dogs">Dogs</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </header>
  <main>
  </main>

</template>

<style scoped>
.logo-image {
  width: 200px;
  height: auto;
}

header {
  display: flex;
  flex-direction: row;
}

ul.pages {
  margin-top: 50px;
  display: table;
  width: 50%;
  text-align: center;
}

ul.pages > li {
  display: table-cell;
  font-size: 20px;
  font-family:  'American Typewriter';
}

li:hover {
  cursor: pointer;
}

</style>
