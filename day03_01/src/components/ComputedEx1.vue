<script setup>
import { computed, reactive, ref } from 'vue';

const refCount = ref(0);
const reactiveCount = reactive();

// ref()로 반응형 데이터 이용 시 반드시 .value를 붙일 것
const refDoubleCount = computed(() => refCount.value * 2);
// reactive()로 반응형 데이터를 사용할 시 .value 불필요
const reactiveDoubleCount = computed(() => reactiveCount * 2);

// computed로 데이터 출력 시, 반드시 .value 사용
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>

<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>

<style></style>
