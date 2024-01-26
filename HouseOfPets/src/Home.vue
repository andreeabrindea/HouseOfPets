<template>
    <TopBar></TopBar>
    <main>
      <p class="cursive-font">Find your best friend</p>
      <div>
        <transition-group name="fade" tag="div">
          <div v-for="i in [currentIndex]" :key="i" class="page-wrapper">
            <img class="carousel-img" :src="currentImg" />
          </div>
        </transition-group>
      </div>
      <p class="introduction-text">Every year many pets end up abandoned on the street due to the population's carelessness
        and lack of education. Although there is a law, in most European countries, which obliges the owners to sterilize
        their dogs, the shelters are full of puppies and all ages dogs.</p>
      <p class="introduction-text">About cats, things are not better. Many people own cats and keep them outside,
        unsupervised. They end up having dozens of kittens a year or crushed by fast cars.</p>
      <br>
      <p class="introduction-text"> By providing a welcoming home to a pet in need, you can help reduce the number of
        animals in shelters and give a loving companion a second chance.</p>
      <h1 class="subtitle">Newcomers to our shelter:</h1>
      <Newcomers class="newcomers-images"></Newcomers>
      <h1 class="subtitle">Those who have already been waiting for too long:</h1>
      <Newcomers class="newcomers-images"></Newcomers>
    </main>
    <Footer></Footer>
  </template>
  
  <script lang="ts">
  import TopBar from './views/TopBar.vue'
  import Newcomers from './views/Newcomers.vue'
  import Footer from './components/Footer.vue'
  export default {
    name: "Slider",
    components: {
      TopBar,
      Newcomers,
      Footer
    },
    data() {
      return {
        images: [
          "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww",
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
          "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=3629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=3492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1581888227599-779811939961?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
        ],
        timer: null as any,
        currentIndex: 0
      };
    },
  
    mounted: function () {
      this.startSlide();
    },
  
    methods: {
      startSlide: function () {
        this.timer = setInterval(this.next, 9000);
      },
  
      next: function () {
        this.currentIndex += 1;
      },
      prev: function () {
        this.currentIndex -= 1;
      }
    },
  
    computed: {
      currentImg: function () {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }
  };
  </script>
  
  <style scoped>
  .page-wrapper {
    text-align: center;
  }
  
  .cursive-font {
    font-family: 'Snell Roundhand', cursive;
    margin-left: 16vw;
    font-size: 40px;
  }
  
  .carousel-img {
    width: 80%;
    border-radius: 5px;
    margin: auto;
    display: block;
    margin-left: 20vw;
  }
  
  .subtitle {
    width: 80%;
    margin-left: 20vw;
    font-family: 'Palatino', 'URW Palladio L', serif;
    margin-bottom: 2vh;
  }
  
  .introduction-text {
    width: 80%;
    margin-left: 20vw;
    font-size: 15px;
    font-family: 'Palatino', 'URW Palladio L', serif;
  }

  .newcomers-images {
    width: 100%;
    margin-left: 20vw;
  }

  </style>
  