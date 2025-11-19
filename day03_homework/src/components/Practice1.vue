<script setup>
import { ref, computed, watch } from 'vue';

const count = ref(0);
const doubledCount = computed(() => count.value * 2);

function increment() {
  count.value++;
}

watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`);
});
</script>
<template>
  <div>
    <h1>Practice1</h1>
    <p>Count: {{ count }}</p>
    <p>Doubled Count: {{ doubledCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
