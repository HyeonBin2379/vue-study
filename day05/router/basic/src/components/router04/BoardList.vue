<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 프로그래밍 방식 탐색
// 지정한 name을 갖는 url에 관한 요청을 히스토리에 추가
// route 요청 시, 이 함수의 파라미터값인 게시글 번호도 params를 통해 함께 전달
function viewArticle(no) {
  router.push({ name: "boardview4", params: { no } });
}

let articles = [
  { articleNo: 5, subject: "5번글입니다.", registerTime: "30.12.31" },
  { articleNo: 4, subject: "4번글입니다.", registerTime: "30.12.30" },
  { articleNo: 3, subject: "3번글입니다.", registerTime: "30.12.29" },
  { articleNo: 2, subject: "2번글입니다.", registerTime: "30.12.28" },
  { articleNo: 1, subject: "1번글입니다.", registerTime: "30.12.27" },
];
</script>

<template>
  <div class="container text-center mt-3">
    <h1>router04(프로그래밍 방식 탐색)</h1>
    <div class="alert alert-info" role="alert">자유롭게 글쓰는 공간</div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for문을 사용하여 게시글 리스트를 순회(key값은 게시글번호) -->
        <tr v-for="article in articles" :key="article.articleNo">
          <td>{{ article.articleNo }}</td>
          <td>
            <!-- 특정 게시글 제목 클릭 시, 지정한 게시글 번호로 렌더링된 뷰 컴포넌트를 요청 -->
            <a @click="viewArticle(article.articleNo)">
              {{ article.subject }}
            </a>
          </td>
          <td>{{ article.registerTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
