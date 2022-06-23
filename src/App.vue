<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MovieSearcher from "./components/MovieSearcher.vue";
</script>

<template>
  <span class="title-text">Movie Searcher</span>
  <MovieSearcher msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.site-icon {
  width: 150px;
  height: 150px;
  margin-right: 10px;
}
.title-text {
  font-size: 77pt;
  font-family: "Luckiest Guy";
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 0px -3px 0 #212121, 0px -3px 0 #212121, 0px 3px 0 #212121,
    0px 3px 0 #212121, -3px 0px 0 #212121, 3px 0px 0 #212121, -3px 0px 0 #212121,
    3px 0px 0 #212121, -3px -3px 0 #212121, 3px -3px 0 #212121,
    -3px 3px 0 #212121, 3px 3px 0 #212121, -3px 9px 0 #212121, 0px 9px 0 #212121,
    3px 9px 0 #212121, 0 19px 1px rgba(0, 0, 0, 0.1), 0 0 3px rgba(0, 0, 0, 0.1),
    0 3px 3px rgba(0, 0, 0, 0.3), 0 12px 3px rgba(0, 0, 0, 0.2),
    0 9px 9px rgba(0, 0, 0, 0.25), 0 24px 24px rgba(0, 0, 0, 0.2),
    0 36px 36px rgba(0, 0, 0, 0.15);
}
</style>
