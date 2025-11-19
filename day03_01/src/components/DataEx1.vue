<script setup>
// 컴포지션 API에서는 import문을 사용하여 컴포넌트에서 사용할 속성을 정의
import { ref } from 'vue';

// 함수 ref()를 사용하여 기본형, 참조형 값 모두 반응형 데이터로 정의 가능
const count = ref(0);
const state = ref({ count: 0 });

// ref()로 래핑한 속성값에 접근할 때는 .value를 사용
// 객체의 특정 속성에 접근할 때는 아래처럼 객체명.value.타겟속성명 형식으로 접근
// 단, 객체, 배열 내부의 속성을 반응형 데이터로 사용하려면 watch 등을 사용해야 함
console.log(count.value);
console.log(state.value.count);

// 1초 뒤에 count가 1 증가
setTimeout(() => {
  count.value++;
}, 1000);

setTimeout(() => {
  state.count++;
}, 1000);
</script>

<template>
  <h1>count : {{ count }}</h1>
  <h1>state : {{ state.count }}</h1>
</template>

<style></style>
