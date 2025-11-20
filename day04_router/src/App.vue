<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div>
      <RouterLink to="/about">about</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped></style>
