<template>
  <div class="flex flex-col h-full">
    <img class="h-1/5 flex-none object-contain" alt="Vue logo" src="./assets/logo.png" />
    <main class="container mx-auto mt-10 flex-1 flex flex-col">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
// type-script
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
