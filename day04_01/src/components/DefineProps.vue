<script setup>
import { defineProps } from 'vue';

//
const props = defineProps({
  count: Number, // count 값의 자료형을 Number로 지정
  state: [Object, Array], // 1개의 값에 대해 복수의 자료형을 지정하는 것도 가능
});
</script>

<template>
  <h1>DefineProps</h1>
  <h1>{{ props.count }}</h1>
  <h1>{{ props.state.count }}</h1>
</template>

<style></style>
