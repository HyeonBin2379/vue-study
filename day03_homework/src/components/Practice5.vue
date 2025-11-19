<script setup>
import { ref, computed } from 'vue';

const inputValue = ref('');
const inputRef = ref('');

const clickFocus = computed(() => {
  inputRef.value.focus();
  alert(inputValue.value);
});
</script>

<template>
  <div>
    <h1>Practice5</h1>
    <input type="text" ref="inputRef" v-model="inputValue" />
    <button @click="clickFocus">클릭</button>
  </div>
</template>
