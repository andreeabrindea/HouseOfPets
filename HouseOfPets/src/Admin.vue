<template>
    <TopBar></TopBar>
    <main>
        <div class="page-wrapper">
            <div class="page-statistics">
                <h1 class="cursive-font">Statistics:</h1>
                <p>Total cats in our shelter: </p>
                <input v-model="catCount" disabled><br>
                <p>Total dogs in our shelter: </p>
                <input v-model="dogCount" disabled><br>
                <p>Adopted dogs: </p>
                <input v-model="adoptedDogCount" disabled><br>
                <p>Adopted cats: </p>
                <input v-model="adoptedCatCount" disabled><br><br>
            </div>

            <div class="admin-options">
                <div>
                    <h1 class="cursive-font">Admin Options:</h1>
                </div>
                <div>
                    <a href="/add-cat"><button class="option-button">Add Cat</button></a>
                    <a href="/add-dog"><button class="option-button">Add Dog</button></a><br>
                    <a href="/update-cat"><button class="option-button">Update Cat</button></a>
                    <a href="/update-dog"><button class="option-button">Update Dog</button></a><br>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import TopBar from './views/TopBar.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const catCount = ref(0);
const adoptedCatCount = ref(0);
const dogCount = ref(0);
const adoptedDogCount = ref(0);
console.log('Axios Request Config:', {
  url: '/cats/count',
  method: 'GET',
});
onMounted(async () => {
  try {
    const catResponse = await axios.get('http://127.0.0.1:5000/cats/count');
    catCount.value = catResponse.data.count;

    const adoptedCatResponse = await axios.get('http://127.0.0.1:5000/cats/countAdopted');
    adoptedCatCount.value = adoptedCatResponse.data.count_adopted;

    const dogResponse = await axios.get('http://127.0.0.1:5000/dogs/count');
    dogCount.value = dogResponse.data.count;

    const adoptedDogResponse = await axios.get('http://127.0.0.1:5000/dogs/countAdopted');
    adoptedDogCount.value = adoptedDogResponse.data.count_adopted;
  } catch (error) {
    console.error('Error fetching statistics:', error);
  }
});
</script>

<style>
.page-statistics {
    display: flex;
    flex-direction: column;
    align-items: center;
}


.cursive-font {
    font-family: 'Snell Roundhand', cursive;
    color: #E8A444;
    font-weight: bold;
}

input {
    text-align: center;
}

.admin-options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.option-button{
   margin-left: 2vw;
    border: 0;
    height: 20px;
}
</style>