<script setup>
// 컴포지션 API에서는 import문을 사용하여 컴포넌트에서 사용할 속성을 정의
import { reactive } from 'vue';

// 함수 reactive()를 사용하여 객체의 속성, 배열의 특정 요소에 반응성을 부여
const state = reactive({ count: 0 });

// reactive()는 속성 자체를 반응형 데이터로 래핑 -> 접근할 때는 .value를 사용하지 않음
console.log(state.count);

setTimeout(() => {
  state.count++;
}, 1000);
</script>

<template>
  <h1>state : {{ state.count }}</h1>
</template>

<style></style>
