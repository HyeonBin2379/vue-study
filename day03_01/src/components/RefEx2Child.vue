<script setup>
// 여러 개의 옵션 속성을 지정할 경우, 아래처럼 지정
import { computed, ref } from 'vue';

const number = ref(5);
const doubleNumber = computed(() => number.value * 2);

// defineExpose(): 지정한 값만 부모 컴포넌트에서 접근 가능하도록 emit
defineExpose({
  number,
  doubleNumber,
});
</script>

<template>
  <h1>{{ number }}</h1>
  <h1>{{ doubleNumber }}</h1>
</template>

<style></style>
