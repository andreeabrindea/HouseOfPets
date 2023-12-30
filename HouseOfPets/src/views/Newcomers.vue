<script setup lang="ts">
</script>

<template>
<ul id="list-newcomers">
  <li class="list">
      <div class="photo-background">
        <img class="newcomers-images" src="../assets/cat1.png">
        <p>Luna</p>
      </div>
    </li>
    <li class="list">
      <div class="photo-background">
        <img class="newcomers-images" src="../assets/dog1.png">
        <p>Rex</p>
      </div>
    </li>
    <li class="list">
      <div class="photo-background">
        <img class="newcomers-images" src="../assets/cat2.png">
        <p>Mau</p>
      </div>
    </li>
    <li class="list">
      <div class="photo-background">
        <img class="newcomers-images" src="../assets/dog2.png">
        <p>Lucky</p>
      </div>
    </li>
    <li>
      <button>View all</button>
    </li>
</ul>
</template>

<style>
.photo-background {
  cursor: pointer;
}

.newcomers-images {
  width: 15vw;
}

.list {
  list-style: none;
  margin-right: 1vw;
}

#list-newcomers > li{
  display: inline-block;
}
</style>
