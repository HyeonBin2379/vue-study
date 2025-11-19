<script setup>
import { ref, computed } from 'vue';

// 이 값을 input 태그에 바인딩
const a = ref(10);
const b = ref(20);

// 입력한 2개의 숫자에 관한 덧셈, 평균 계산
const sum = computed(() => a.value + b.value);
const average = computed(() => (a.value + b.value) / 2);
</script>

<template>
  <div>
    <!-- 입력된 값이 변하면 computed의 연산 결과도 변동 -->
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />
    <p>합계: {{ sum }}</p>
    <p>평균: {{ average }}</p>
  </div>
</template>
