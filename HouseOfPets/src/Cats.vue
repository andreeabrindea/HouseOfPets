<template>
  <TopBar></TopBar>
  <header class="cats-header">
    <div class="cats-filters">
      <div class="age-filter">
        <p>Age: </p>
        <div>
          <input type="checkbox" name="kitten" class="checbox-cat-filter">
          <label for="kitten">0 - 12 months</label>
        </div>
        <div>
          <input type="checkbox" name="adult" class="checbox-cat-filter">
          <label for="adult">1 - 7 year(s)</label>
        </div>
        <div>
          <input type="checkbox" name="senior" class="checbox-cat-filter">
          <label for="senior">7+ years</label>
        </div>
      </div>
      <div class="gender-filter">
        <p>Gender: </p>
        <div>
          <input type="checkbox" name="male" class="checbox-cat-filter">
          <label for="male">Male</label>
        </div>
        <div>
          <input type="checkbox" name="female" class="checbox-cat-filter">
          <label for="female">Female</label>
        </div>
      </div>
      <div class="other-filter">
        <p>Others: </p>
        <div>
          <input type="checkbox" name="Handicap" class="checbox-cat-filter">
          <label for="Handicap">Handicap</label>
        </div>
        <div>
          <input type="checkbox" name="fiv" class="checbox-cat-filter">
          <label for="fiv">FIV/FIP/FELV pos</label>
        </div>
        <div>
          <input type="checkbox" name="single-cat" class="checbox-cat-filter">
          <label for="single-cat">Single cats</label>
        </div>
      </div>
    </div>
    <button class="search-cat-button">Search</button>
  </header>
  <main>
    <ul id="list-cats">
      <li class="list" v-for="cat in cats" :key="cat.id">
        <div class="photo-background">
          <a :href="`cat/${cat.id}`">
            <img v-if="cat.image" class="cats-images" :src="cat.image" alt="Cat Photo">
          </a>
          <p>{{ cat.name }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>
<script lang="ts">
import TopBar from './views/TopBar.vue';

export default {
  components: {
    TopBar,
  },
  data() {
    return {
      cats: [],
    };
  },
  mounted() {
    fetch('http://127.0.0.1:5000/cats')
      .then(response => response.json())
      .then(data => {
        this.cats = data.map(cat => {
          cat.image = `data:image/jpeg;base64,${cat.image}`;

          return cat;
        });
        console.log(this.cats);
      })
      .catch(error => {
        console.error('Error fetching cat data:', error);
      });
  },
};
</script>
<style>
.cats-header {
  margin-left: 1vw;
}

.photo-background {
  cursor: pointer;
}

.cats-images {
  width: 12vw;
}

.list {
  list-style: none;
  margin-right: 0.5vw;
}

#list-cats>li {
  display: inline-block;
}

.cats-filters {
  display: flex;
  flex-direction: row;
}

.age-filter,
.gender-filter,
.others-filter {
  margin: 1vh 1vh 1vh 2vh;
}

.checbox-cat-filter {
  margin-right: 0.5vw;
}

.search-cat-button {
  margin: 1vh 1vh 1vh 2vh;
}
</style>
