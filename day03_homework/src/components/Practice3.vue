<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');
const warningMessage = computed(() => {
  return searchText.value.length > 10 ? '10자를 초과했습니다.' : '';
});
</script>

<template>
  <div>
    <h1>Practice3</h1>
    <input v-model="searchText" />
    <p>SearchText: {{ searchText }}</p>
    <p>{{ warningMessage }}</p>
  </div>
</template>

<style></style>
