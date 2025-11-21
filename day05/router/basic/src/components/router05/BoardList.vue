<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

// 동적 경로 매칭에 프로그래밍 방식 탐색 적용
function viewArticle(no) {
  router.push({ name: "boardview5", params: { no } });
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
  <div>
    <div class="text-start p-2">
      <!-- 지정한 name에 해당하는 경로로 매칭 -->
      <button
        type="button"
        @click="router.push({ name: 'boardwrite5' })"
        class="btn btn-outline-primary btn-sm"
      >
        글쓰기
      </button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.articleNo">
          <td>{{ article.articleNo }}</td>
          <td>
            <!-- 클릭 이벤트가 발생한 게시글의 번호를 route의 params -->
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
