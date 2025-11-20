<script setup>
import { ref, watch } from 'vue';

// 1. 기본 자료형 0을 반응형 데이터로 생성
const count = ref(0);

// 2. watch()를 이용하여 반응형 데이터를 감시
watch(count, (currentValue, preValue) => {
  console.log(currentValue, preValue);
});
</script>

<template>
  <!-- 템플릿에서 반응형 데이터는 unwrapping하여 사용됨 -->
  <h1>WatchEx1</h1>
  <h1>ref : {{ count }}</h1>
  <button @click="count++">ref 증가</button>
</template>

<style></style>
