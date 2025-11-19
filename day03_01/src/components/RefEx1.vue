<script setup>
import { ref } from 'vue';

const inputRef = ref(null);

// cf) setTimeout: 인자로 지정한 함수를 지정한 시간이 지난 후에 비동기적으로 실행
// 1초 뒤에 콘솔창에 inputRef에 저장된 값을 출력
setTimeout(() => {
  // h1 태그에 해당하는 dom 객체
  console.log(inputRef.value);
  // dom 객체의 속성, 메서드 모두 사용
  console.log(inputRef.value.innerText);
}, 1000);
</script>

<template>
  <!-- ref 속성을 통해 렌더링된 값을 h1 태그와 연결 -> h1 객체의 값에 접근 가능 -->
  <!-- 즉, document,getElementById() 등을 사용한 것과 동일한 효과 -->
  <h1 ref="inputRef">Hello, Ref!</h1>
</template>

<style></style>
