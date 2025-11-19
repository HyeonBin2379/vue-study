<script setup>
import { ref } from 'vue';

// 배열로 반응형 데이터 생성
const arr1 = ref([10]);
const arr2 = ref([10]);

// 기존 배열을 배열 [10, 20]으로 재할당
setTimeout(() => {
  arr1.value = [10, 20]; // 배열의 값 자체 변경
}, 1000);

// 기존 배열에 20을 추가
setTimeout(() => {
  arr2.push(20); // 기존 배열의 한 요소만 변경
}, 1000);
</script>

<template>
  <h1>arr1 : {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>

<style></style>
