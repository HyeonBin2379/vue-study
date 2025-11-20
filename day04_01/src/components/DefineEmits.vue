<script setup>
// App.vue의 자식 컴포넌트는 부모 컴포넌트에서 전달한 이벤트를 defineEmits()를 사용하여 수신
// 부모 컴포넌트가 전달한 이벤트를 자식 컴포넌트에서 특정하여 실행할 때 emit을 사용
import { defineEmits } from 'vue';

const emits = defineEmits(['count-increment', 'state-count-increment']);

const increment = () => {
  // emit을 통해 부모 컴포넌트의 이벤트에서 사용할 파라미터도 전달 가능
  emits('count-increment', 10, 20, 30);
};
</script>

<template>
  <!-- emit 사용법1: emit의 이벤트를 실행하는 함수를 호출 -->
  <button @click="increment">count 증가</button>
  <!-- emit 사용법2: emit을 직접 실행 -->
  <button @click="emits('state-count-increment', [10, 20, 30])">
    state count 증가
  </button>
</template>
