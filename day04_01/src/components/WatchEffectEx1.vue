<script setup>
import { reactive, ref, watchEffect } from 'vue';

// 1. 객체 자료형의 속성 count에 0을 할당하여 객체 반응형 데이터 생성(reactive)
const count = ref(0);
const state = reactive({ count: 0 });

// 2. watchEffect를 사용하여 모든 반응형 데이터 관리
// (reactive에서는 deep 옵션 사용 불가)
watchEffect(() => {
  console.log(count.value);
  console.log(state.count);
});
</script>

<template>
  <h1>WatchEffectEx1</h1>
  <h1>ref : {{ count }}</h1>
  <button @click="count++">ref 증가</button>
  <h1>reactive : {{ state.count }}</h1>
  <button @click="state.count++">reactive 증가</button>
</template>

<style></style>
