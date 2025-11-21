<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

let articleNo = ref(0);

// 뷰 컴포넌트를 마운트할 때, route를 통해 전달받은 게시글 번호로 현재 뷰 컴포넌트의 게시글 번호를 갱신
onMounted(() => {
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router04(프로그래밍 방식 탐색)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ articleNo }}번글 제목</h4>
        <p class="card-text">글 내용이 나와요</p>
        <a @click="router.push({ name: 'board4' })">목록</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
