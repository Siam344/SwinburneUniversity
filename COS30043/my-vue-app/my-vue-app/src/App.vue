<template>
    <div id="app">
      <Navbar />
      <Header />
      <main>
        <News />
        <Videos />
        <Promo />
        <Reviews />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue'
  import Header from './components/Header.vue'
  import News from './components/News.vue'
  import Videos from './components/Videos.vue'
  import Promo from './components/Promo.vue'
  import Reviews from './components/Reviews.vue'
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Header,
      News,
      Videos,
      Promo,
      Reviews
    }
  }
  </script>
  
  <style>
  @import "~@fortawesome/fontawesome-free/css/all.css";
  @import "./assets/css/normalize.css";
  @import "./assets/css/main.css";
  </style>
  