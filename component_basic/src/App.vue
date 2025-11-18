<!-- setup: Vue3에서 사용하는 문법 -->
<script>
import FirstChild from '@/components/FirstChild.vue';
export default {
  components: {
    FirstChild,
  },
  data() {
    return {
      visible: true,
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  // 컴포넌트 생성 이후 지정한 액션을 수행
  created() {
    // 3초 뒤 컴포넌트 언마운트
    setTimeout(() => {
      this.visible = false;
    }, 3000);
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>
<template>
  <FirstChild v-if="visible" />
  <h1 style="color : red; font-style: italic">test</h1>
</template>
