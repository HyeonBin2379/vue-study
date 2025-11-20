<script setup>
import { ref } from 'vue';

const props = defineProps({
  menus: Array,
  view: String,
});

const emits = defineEmits(['select-menu']);

const selectMenu = (menuKey) => {
  emits('select-menu', menuKey);
};
</script>

<template>
  <div v-for="menu in menus" :key="menu.key">
    <!-- 버튼 클릭 시 동적으로 css 스타일을 적용 & view의 값 갱신 -->
    <button
      :class="{ active: view === menu.key }"
      @click="selectMenu(menu.key)"
    >
      {{ menu.label }}
    </button>
  </div>
</template>

<style scoped>
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
