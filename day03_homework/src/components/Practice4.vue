<script setup>
import { reactive, computed } from 'vue';

const carts = reactive([
  { name: 'item1', price: 10000, count: 2 },
  { name: 'item2', price: 5000, count: 3 },
]);

const totalPrice = computed(() => {
  return carts
    .map((item) => item.price * item.count)
    .reduce((acc, val) => {
      return acc + val;
    }, 0);
});
</script>

<template>
  <div>
    <h1>Practice4</h1>
    <div v-for="item in carts" :key="item.name">
      <p>{{ item.name }}</p>
      <input type="number" v-model="item.price" />
      <input type="number" v-model="item.count" />
    </div>
    <p>Total: {{ totalPrice }}</p>
  </div>
</template>

<style></style>
