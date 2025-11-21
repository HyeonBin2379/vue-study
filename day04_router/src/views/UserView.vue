<script setup>
// 라이프사이클 훅 내부에서 라우터 관련 작업을 수행
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onBeforeMount(() => {
  // 쿼리 스트링의 파라미터 값을 읽어오는 방법
  const name = route.query.name;
  const age = route.query.age;

  console.log(name);
  console.log(age);
});
</script>

<template>
  <h1>UserView</h1>
  <h1>name : {{ name }}</h1>
  <h1>age : {{ age }}</h1>
</template>
