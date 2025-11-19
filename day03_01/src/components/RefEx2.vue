<script setup>
import { ref } from 'vue';
import RefEx2Child from './RefEx2Child.vue';

//
const componentRef = ref(null);

setTimeout(() => {
  console.log(componentRef.value.number);
  console.log(componentRef.value.doubleNumber);
}, 1000);
</script>

<template>
  <!-- 부모 컴포넌트에서 등록한 하위 컴포넌트에 접근할 때 템플릿 ref 속성 활용 가능 -->
  <!-- 템플릿 ref 속성을 활용하여 하위 컴포넌트를 래핑 -->
  <RefEx2Child ref="componentRef" />
</template>

<style></style>
