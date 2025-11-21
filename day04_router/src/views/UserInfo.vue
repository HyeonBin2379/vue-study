<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const name = route.query.name;
const age = route.query.age;

console.log(name);
console.log(age);
</script>

<template>
  <h1>{{ name }} &nbsp; {{ age }}</h1>
</template>
