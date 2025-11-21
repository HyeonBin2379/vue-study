<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

// 
let articleNo = ref(0);

// 뷰 애플리케이션이 마운트될 때 현재 게시글 번호를 동적 매핑된 url 경로의 게시글 번호로 갱신
onMounted(() => {
  console.log(router); // router 전체의 정보
  console.log(route); // 현재 호출된 해당 라우트의 정보 (Proxy)
  console.log(route.path); // 현재 호출된 라우트의 경로
  console.log(route.query); // 쿼리 정보
  console.log(route.params); // 파라미터 정보

  // 라우팅된 게시글 번호로 현재 게시글 번호를 갱신
  articleNo.value = route.params.no;
});
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router02(파라미터를 사용한 동적 경로 매칭)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <div class="card">
      <div class="card-body">
        <!-- 현재 게시글 번호로 출력 -->
        <h4 class="card-title">{{ articleNo }}번글 제목</h4>
        <p class="card-text">글 내용이 나와요</p>

        <!-- 클릭 시 게시글 리스트로 이동 -->
        <router-link to="/r02/board">목록</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
