<script setup>
import TheHeadingNavbar from './components/layout/TheHeadingNavbar.vue';
</script>

<!-- App.vue의 구조는 최대한 단순하게 -->
<template>
  <div>
    <!-- router-view: 라우팅한 뷰가 실제로 렌더링될 부분(태그명을 RouterView라고 사용하는 것도 가능) -->
    <TheHeadingNavbar />
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
