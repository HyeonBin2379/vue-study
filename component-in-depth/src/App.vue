<script setup>
import { ref } from 'vue';
import AppPropsLiteral from './components/props/AppPropsLiteral.vue';
import AppPropsObject from './components/props/AppPropsObject.vue';

const view = ref('');
</script>

<template>
  <div class="container">
    <TheHeading />

    <div class="menu">
      <!-- 버튼 클릭 시 동적으로 css 스타일을 적용 & view의 값 갱신 -->
      <button :class="{ active: view === 'literal' }" @click="view = 'literal'">
        Props Literal
      </button>
      <button :class="{ active: view === 'object' }" @click="view = 'object'">
        Props Object
      </button>
      <button
        :class="{ active: view === 'template' }"
        @click="view = 'template'"
      >
        Component Events (template)
      </button>
      <button :class="{ active: view === 'script' }" @click="view = 'script'">
        Component Events (script setup)
      </button>
    </div>

    <!-- 자식 컴포넌트(AppPropsLiteral.vue)에게 viewTitle을 prop으로 전달 -->
    <AppPropsLiteral
      v-if="view === 'literal'"
      view-title="좋아하는 과일은?(Literal 전달)"
    />
    <AppPropsObject
      v-if="view === 'object'"
      view-title="좋아하는 과일은?(Object data 전달)"
    />
  </div>
</template>

<style scoped>
.container {
  text-align: center;
}
.menu {
  margin: 0.3rem 0;
}
button {
  margin: 0.2rem;
  padding: 0.5rem;
}
.active {
  background-color: steelblue;
  color: aliceblue;
  border: 0;
  border-radius: 5px;
}
</style>
