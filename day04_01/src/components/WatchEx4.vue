<script setup>
import { reactive, ref, watch } from 'vue';

// 1. 객체 자료형의 속성 count에 0을 할당하여 객체 반응형 데이터 생성(reactive)
const state = reactive({ count: 0 });

// 2. 객체의 count 속성 감시
// (reactive에서는 deep 옵션 사용 불가)
watch(
  // 반응형 데이터를 콜백 함수 형태로 변환하여 watch()의 첫번째 인자로 넘겨주면, watch는 해당 데이터를 추적
  // 즉, 콜백 함수의 반환값은 watch()의 추적 대상이 됨
  // 첫번째 인자를 getter의 형태로 반환
  () => state.count,
  (currentValue, preValue) => {
    console.log(currentValue, preValue);
  }
);
</script>

<template>
  <h1>WatchEx4</h1>
  <h1>ref : {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>

<style></style>
