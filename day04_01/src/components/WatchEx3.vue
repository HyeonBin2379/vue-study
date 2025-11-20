<script setup>
import { reactive, watch } from 'vue';

// 1. 객체 자료형의 속성 count에 0을 할당하여 객체 반응형 데이터 생성(reactive)
const state = reactive({ count: 0 });

// 2. 객체의 count 속성 감시
// (reactive에서는 deep 옵션 사용 불가)
watch(state, (currentValue, preValue) => {
  // 이전 값을 알 수 없기 때문에, 프록시에 의해 이전 값과 현재 값은 동일한 값으로 출력
  // 이전 값과 현재값을 제대로 출력하려면, getter, setter를 사용하여 출력해야 함.
  console.log(currentValue, preValue);
});
</script>

<template>
  <h1>WatchEx3</h1>
  <h1>ref : {{ state.count }}</h1>
  <button @click="state.count++">ref 증가</button>
</template>

<style></style>
