<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <!-- RouterLink: html의 a 태그와 유사한 기능 -->
    <!-- 지정한 path와 연결된 뷰로 동적 바인딩 -->
    <RouterLink to="/">Home</RouterLink> &nbsp;&nbsp;
    <RouterLink to="/about">about</RouterLink> &nbsp;&nbsp;
    <RouterLink to="/user/info?name=ssg&age=20">UserInfo</RouterLink>
    &nbsp;&nbsp;
    <RouterLink to="/user/mike">UserView</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
