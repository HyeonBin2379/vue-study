<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.query.id;

console.log(id);
</script>

<template>
  <h1>UserInfo View</h1>
  <h1>{{ id }}</h1>
</template>
