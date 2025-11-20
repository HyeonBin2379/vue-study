<script setup>
import { reactive, ref } from 'vue';

import WatchEffectEx1 from './components/WatchEffectEx1.vue';
import WatchEx1 from './components/WatchEx1.vue';
import WatchEx1_1 from './components/WatchEx1_1.vue';
import WatchEx2 from './components/WatchEx2.vue';
import WatchEx3 from './components/WatchEx3.vue';
import WatchEx4 from './components/WatchEx4.vue';
import WatchPostEffectEx1 from './components/WatchPostEffectEx1.vue';

// import DefineProps from './components/DefineProps.vue';
import DefineEmits from './components/DefineEmits.vue';

// props를 통해 전달할 반응형 데이터
const count = ref(0);
const state = reactive({
  count: 0,
});

const countIncrement = (num1, num2, num3) => {
  count.value = num1 + num2 + num3;
};
const stateCountIncrement = (arr) => {
  state.count = arr[0];
};
</script>

<template>
  <!-- <WatchEx1 />
  <WatchEx1_1 />
  <WatchEx2 />
  <WatchEx3 />
  <WatchEx4 /> -->
  <!-- <WatchEffectEx1 />
  <WatchPostEffectEx1 /> -->

  <!-- DefineProps 컴포넌트에서는 defineProps()를 사용하여 부모에서 전달한 반응형 데이터를 수신하여 출력 가능 -->
  <!-- <DefineProps :count="count" :state="state" /> -->

  <h1>{{ count }}</h1>
  <h1>{{ state.count }}</h1>

  <!-- 수행할 이벤트를 하위 컴포넌트인 DefineEmits에게 전달 -->
  <!-- 방법1. 이벤트 핸들러 이름만을 전달 -->
  <!-- 방법2. 이벤트 핸들러를 콜백 함수 형태로도 전달 가능 -->
  <DefineEmits
    @count-increment="countIncrement"
    @state-count-increment="
      (arr) => {
        stateCountIncrement(arr);
      }
    "
  />
</template>

<style></style>
