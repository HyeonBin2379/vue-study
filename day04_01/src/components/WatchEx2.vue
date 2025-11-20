<script setup>
import { ref, watch } from 'vue';

// 1. 객체 자료형의 속성 count에 0을 할당하여 객체 반응형 데이터 생성(ref)
const state = ref({ count: 0 });

// 2. 객체의 count 속성 감시
watch(
  state,
  (currentValue, preValue) => {
    // 이전 값을 알 수 없기 때문에, 이전 값과 현재 값은 동일한 값으로 출력
    console.log(currentValue, preValue);
  },
  { deep: true }
);
</script>

<template>
  <h1>WatchEx2</h1>
  <h1>ref : {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>

<style></style>
