<template>
  <Header />
  <Delivery />
  <Cards  />
</template>

<script setup>
import Header from "./components/Header.vue";
import Delivery from "./components/Delivery.vue";
import Cards from "./components/Cards.vue";
</script>

<style>
#app {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
