<script setup>
import MenuBar from './components/MenuBar.vue';
import { ref, reactive } from 'vue';
import AppPropsLiteral from './components/props/AppPropsLiteral.vue';
import AppPropsObject from './components/props/AppPropsObject.vue';
import ComponentEmitEventTemplate from './components/events/ComponentEmitEventTemplate.vue';
import ComponentEmitEventScriptSetup from './components/events/ComponentEmitEventScriptSetup.vue';

const view = ref('');

const menus = reactive([
  { key: 'literal', label: 'Props Literal Demo' },
  { key: 'obj', label: 'Props Object Demo' },
  { key: 'template', label: 'Event Template Demo' },
  { key: 'script', label: 'Event Script Demo' },
]);

const selectMenu = (menu) => {
  view.value = menu;
};
</script>

<template>
  <div class="container">
    <div class="menu">
      <MenuBar :menus="menus" @select-menu="selectMenu" />
    </div>
    <!-- 자식 컴포넌트(AppPropsLiteral.vue)에게 viewTitle을 prop으로 전달 -->

    <AppPropsLiteral
      v-if="view === 'literal'"
      view-title="좋아하는 과일은?(Literal 전달)"
    />
    <AppPropsObject
      v-if="view === 'obj'"
      view-title="좋아하는 과일은?(Object data 전달)"
    />
    <ComponentEmitEventTemplate
      v-if="view === 'template'"
      view-title="좋아하는 과일은?(Template)"
    />
    <ComponentEmitEventScriptSetup
      v-if="view === 'script'"
      view-title="좋아하는 과일은?(Script)"
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
</style>
