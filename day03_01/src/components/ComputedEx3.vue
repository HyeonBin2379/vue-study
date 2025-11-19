// Composition API
<script setup>
import { ref, computed } from 'vue';

// 이 값이 변경되면 computed의 연산 결과도 변동
const name = ref('sstar');

// 각각 대소문자로 변환하여 출력
const upperName = computed(() => name.value.toUpperCase());
const lowerName = computed(() => name.value.toLowerCase());
</script>

<template>
  <div>
    <!-- input 태그의 v-model 속성 사용: 입력한 내용을 name에 바인딩 -->
    <input v-model="name" />
    <p>대문자: {{ upperName }}</p>
    <p>소문자: {{ lowerName }}</p>
  </div>
</template>
