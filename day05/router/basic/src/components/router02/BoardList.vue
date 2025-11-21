<script setup>
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
    <h1>router02(파라미터를 사용한 동적 경로 매칭)</h1>
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
        <!-- BoardDetail.vue로 전달할 article 번호 -->
        <tr v-for="article in articles" :key="article.articleNo">
          <td>{{ article.articleNo }}</td>
          <td>
            <!-- router02에 등록된 경로 /r02/board/:no를 사용하여 동적 매핑 -->
            <!-- 백틱을 사용하여 url 경로를 동적 바인딩 -->
            <router-link :to="`/r02/board/${article.articleNo}`">{{ article.subject }}</router-link>
          </td>
          <td>{{ article.registerTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
