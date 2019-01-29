<template>
  <div id="app" class="container mx-auto px-4">
    <nav class="flex items-center justify-between flex-wrap bg-black p-6 mb-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <img src="./assets/Cadre5-logo-black.png" class="h-10 mx-6" />
        <!--<span class="font-semibold text-xl tracking-tight">Coding Challenge</span>-->
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red hover:border-red"
          @click="handleMenu"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{ hidden: !menuOpen }">
        <div class="text-sm lg:flex-grow">
          <router-link
            data-testid="home-link"
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-lighter text-white hover:text-red mr-4"
            >Home</router-link
          >
          <router-link
            data-testid="challenge-link"
            to="/challenge/current"
            class="block mt-4 lg:inline-block lg:mt-0 text-black-lighter text-white hover:text-red mr-4"
            >Challenge</router-link
          >
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    ...mapActions(['loadData']),
    handleMenu() {
      console.log('handle menu', this.menuOpen);
      this.menuOpen = !this.menuOpen;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
