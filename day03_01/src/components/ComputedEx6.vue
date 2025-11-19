<script setup>
import { ref, computed } from 'vue';

// input 태그에서 입력된 값으로 아래의 두 값이 변동(초기값은 별도로 지정됨)
const firstName = ref('Yumi');
const lastName = ref('Seo');

const f = ref('');
const l = ref('');
let result = ref('inital input');

// getter: 연산 결과를 computed를 할당한 변수에 저장
// setter: computed를 할당한 변수의 값이 변경될 때마다 수행할 연산을 지정
result = computed({
  get() {
    result.value = `${firstName.value} ${lastName.value}`;
    console.log(result.value);
    return result.value;
  },
  set(value) {
    const [first, last] = value.split(' ');
    f.value = first;
    l.value = last;
    console.log('f:' + f.value);
    console.log('l:' + l.value);
  },
});
</script>

<template>
  <div>
    <!-- computed의 결과값을 저장하는 fullName과 input 태그를 양방향으로 바인딩 -->
    <input v-model="firstName" />
    <input v-model="lastName" />
    <input v-model="result" />
    <p>First: {{ firstName }}</p>
    <p>Last: {{ lastName }}</p>
  </div>
</template>
