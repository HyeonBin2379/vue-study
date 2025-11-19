<script setup>
import { reactive, computed } from 'vue';

// 객체, 배열 등의 참조형 데이터에 반응성을 부여할 시, reactive() 함수 사용
const fruits = reactive([
  { name: '사과', checked: false },
  { name: '바나나', checked: false },
  { name: '딸기', checked: false },
]);

// 체크박스에서 체크표시된 데이터의 개수를 반환하는 연산
const selectedCount = computed(() => {
  return fruits.filter((f) => f.checked).length;
});

// 체크된 개수를 바탕으로 새로운 연산 수행
// 한 computed 속성의 결과값은 다른 computed 속성에서 재사용될 수 있다.
const message = computed(() => {
  return selectedCount.value === 0
    ? '과일을 선택해주세요.'
    : `${selectedCount.value}개 선택됨`;
});
</script>

<template>
  <div>
    <!-- 체크박스의 값은 fruit 배열 요소의 checked 속성에 바인딩 -->
    <!-- 체크박스마다 출력할 문구는 fruit의 요소의 name 속성값 -->
    <div v-for="f in fruits" :key="f.name">
      <input type="checkbox" v-model="f.checked" /> {{ f.name }}
    </div>
    <p>{{ message }}</p>
  </div>
</template>
