<script setup>
import { ref } from 'vue';

// props 지정
const props = defineProps({
  name: {
    type: String,
  },
});
const name = ref(props.name);

// emit 지정 및 사용
const emits = defineEmits(['greet']);

function sendGreeting() {
  const message = `Hello, ${name.value}`;
  console.log(message);
  emits('greet', message);
}
</script>
<template>
  <div>
    <h1>Practice2</h1>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
