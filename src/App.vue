<template>
  <AppBar />
  <AppMenu />
  <AppContent />
</template>

<script setup>
import AppBar from './components/AppBar.vue'
import AppMenu from './components/AppMenu.vue'
import AppContent from './components/AppContent.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
body {
  margin:0;
  background-color: #2c2c3f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
