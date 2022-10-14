<template>
  <div class="container-fluid text-center bgcolor py-3">
    <h1 class="display-3">Időjárás jelentés</h1>
    <h2>Város: {{ city }}</h2>
  </div>
</template>

<script setup>
    defineProps(['city']);
</script>

<style>
    .bgcolor{
        background-color: lightgreen;
    }
</style>