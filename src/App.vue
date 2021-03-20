<template>
  <div class="flex flex-col h-full">
    <nav class="nav flex justify-between items-center bg-gray-900 text-sm px-8">
      <div class="flex px-5 py-4">
        <router-link to="/" class="text-base hover:text-gray-100"
          ><i class="fas fa-book-reader"></i
        ></router-link>
        <div :class="{ show: active }" class="ml-2 px-3 mobile-menu" id="mobileMenu">
          <router-link to="/" :class="{}" class="px-2 text-gray-200 hover:text-gray-100">
            Home</router-link
          >
          <router-link to="/financial" :class="{}" class="px-2 text-gray-200 hover:text-gray-100">
            Financial</router-link
          >
          <router-link to="/contact" :class="{}" class="px-2 text-gray-200 hover:text-gray-100">
            Contact</router-link
          >
        </div>
      </div>
      <div class="md:hidden inline-block">
        <button @click="active = !active" class="text-gray-100">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="flex mobile-collapse">
        <input type="text" placeholder="Search Here" class="h-full py-4 bg-gray-800 px-3" />
        <div>
          <a
            href="#Download"
            class="inline-block bg-blue-700 hover:bg-blue-600 text-blue-100 hover:text-blue-200 px-4 py-4 flex items-center font-bold"
          >
            <!-- <i class="fas fa-download mr-2"></i> -->
            Download
          </a>
        </div>
      </div>
    </nav>
    <img class="h-1/5 flex-none object-contain" alt="Vue logo" src="./assets/logo.png" />
    <main class="container mx-auto mt-10 flex-1 flex flex-col">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
// type-script
import { defineComponent } from 'vue'
import global from './global'

export default defineComponent({
  name: 'App',
  provide: { global },
  data() {
    return {
      active: false,
    }
  },
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
@media screen and (max-width: 768px) {
  .mobile-display {
    display: inline-block;
  }

  .mobile-collapse {
    display: none;
  }

  .mobile-menu {
    display: none;
    position: absolute;
    margin-top: 30px;
    margin-left: 0px !important;
    padding: 0px !important;
    background-color: #1a202c;
    width: 100%;
    left: 0;
  }
  .mobile-menu a {
    display: block;
    width: 100%;
    padding: 2rem;
    margin-left: 1.25rem;
  }
}
.show {
  display: block;
}
</style>
