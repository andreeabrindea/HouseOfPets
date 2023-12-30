<template>
    <TopBar></TopBar>
    <main>
        <p class="cursive-font">Hello there!</p>
        <p class="introduction-words">We are Ana & Andreea, two students from the Faculty of Mathematics and Computer Science, BBU Cluj. This is our project for an assignment. We both love cats and we thought that it will be a great idea to make "our shelter"</p>
        <p class="introduction-words">If you have any suggestions or complains do not hesitate to contact us below!</p>
    </main>
    <div class="contact">
            <input type="text" placeholder="Name" class="name-input">
            <input type="text" placeholder="Suggestion/complain">
            <button class="send-button">Send</button>
    </div>
<Footer></Footer>
</template>

<script setup lang="ts">
import TopBar from './views/TopBar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.introduction-words {
    margin: 1vh 0 1vh 4vh;
    width: 80%;
    font-size: 15px;
    font-family: 'Palatino', 'URW Palladio L', serif;
}

.cursive-font {
    font-family: 'Snell Roundhand', cursive;
    font-size: 40px;
    margin: 1vh 0 1vh 4vh;
}

.contact {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 20%;
    margin: 1vh 0 1vh 4vh;
}

.name-input {
    width: 20%;
    height: 10%;
    margin-bottom: 1vh;
}


.send-button {
    width: 20%;
    margin-top: 1vh;
}
</style>