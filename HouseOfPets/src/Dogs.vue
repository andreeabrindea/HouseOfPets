<template>
    <TopBar></TopBar>
    <header class="dogs-header">
        <div class="dogs-filters">
            <div class="age-filter">
                <p>Age: </p>
                <div>
                    <input type="checkbox" name="puppy" class="checbox-dog-filter">
                    <label for="puppy">0 - 12 months</label>
                </div>
                <div>
                    <input type="checkbox" name="adult" class="checbox-dog-filter">
                    <label for="adult">1 - 7 year(s)</label>
                </div>
                <div>
                    <input type="checkbox" name="senior" class="checbox-dog-filter">
                    <label for="senior">7+ years</label>
                </div>
            </div>
            <div class="gender-filter">
                <p>Gender: </p>
                <div>
                    <input type="checkbox" name="male" class="checbox-dog-filter">
                    <label for="male">Male</label>
                </div>
                <div>
                    <input type="checkbox" name="female" class="checbox-dog-filter">
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="size-filter">
                <p>Size: </p>
                <div>
                    <input type="checkbox" name="40cm" class="checbox-dog-filter">
                    <label for="40cm">Up to 40 cm</label>
                </div>
                <div>
                    <input type="checkbox" name="40 - 60 cm" class="checbox-dog-filter">
                    <label for="40 - 60 cm">40 - 60 cm</label>
                </div>
                <div>
                    <input type="checkbox" name="from 60 cm" class="checbox-dog-filter">
                    <label for="from 60 cm">From 60 cm</label>
                </div>
            </div>
            <div class="other-filter">
                <p>Others: </p>
                <div>
                    <input type="checkbox" name="Handicap" class="checbox-dog-filter">
                    <label for="Handicap">Handicap</label>
                </div>
                <div>
                    <input type="checkbox" name="emergency" class="checbox-dog-filter">
                    <label for="emergency">Emergency</label>
                </div>
                <div>
                    <input type="checkbox" name="cat-friendly" class="checbox-dog-filter">
                    <label for="cat-friendly">Cat friendly</label>
                </div>
            </div>
        </div>
        <button class="search-dog-button">Search</button>
    </header>
    <main>
    <ul id="list-dogs">
      <li class="list">
          <div class="photo-background">
            <img class="dogs-images" src="./assets/cat1.png">
            <p>Luna</p>
          </div>
        </li>
        <li class="list">
          <div class="photo-background">
            <img class="dogs-images" src="./assets/dog1.png">
            <p>Rex</p>
          </div>
        </li>
        <li class="list">
          <div class="photo-background">
            <img class="dogs-images" src="./assets/cat2.png">
            <p>Mau</p>
          </div>
        </li>
        <li class="list">
          <div class="photo-background">
            <img class="dogs-images" src="./assets/dog2.png">
            <p>Lucky</p>
          </div>
        </li>
        <li class="list">
          <div class="photo-background">
            <img class="dogs-images" src="./assets/dogman.png">
            <p>Lucian</p>
          </div>
        </li> 
    </ul>
    </main>
    </template>
<script setup lang="ts">
import TopBar from './views/TopBar.vue'
</script>
<style>
.dogs-header {
    margin-left: 1vw;
}

.photo-background {
  cursor: pointer;
}

.dogs-images {
  width: 12vw;
}

.list {
  list-style: none;
  margin-right: 0.5vw;
}

#list-dogs > li{
  display: inline-block;
}

.dogs-filters {
    display: flex;
    flex-direction: row;
}


.checbox-dog-filter {
    margin-right: 0.5vw;
}

.search-dog-button,
.age-filter,
.gender-filter,
.others-filter,
.size-filter {
    margin: 1vh 1vh 1vh 2vh;
}
</style>
