<script setup>
import { ref, watch, watchEffect, watchPostEffect } from 'vue';

const message = ref('');
const messageP = ref(null);

// 3가지 감시자 함수 비교
watch(message, () => {
  if (message.value) {
    // dom 갱신 전 콜백함수가 실행됨
    console.log(`watch: ${messageP.value.innerText}`);
  }
});
watchEffect(
  () => {
    if (message.value) {
      console.log(`watchEffect: ${messageP.value.innerText}`);
    }
  },
  // flush: post 옵션을 지정하여 dom(화면)이 갱신된 이후 콜백함수를 실행
  // (todo의 localStorage 갱신 내역이 곧바로 변경되지 않는 문제를 해결 가능)
  { flush: 'post' }
);
watchPostEffect(() => {
  if (message.value) {
    console.log(`watchPostEffect: ${messageP.value.innerText}`);
  }
});
</script>

<template>
  <div>
    <!-- 입력한 내용이 message에 저장됨 -->
    <input v-model="message" placeholder="메시지를 입력하세요." />
    <p ref="messageP">{{ message }}</p>
  </div>
</template>

<style></style>
