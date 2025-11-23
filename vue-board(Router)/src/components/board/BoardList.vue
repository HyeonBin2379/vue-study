<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

import BoardListItem from "./item/BoardListItem.vue";
import ThePageNavigation from "../common/ThePageNavigation.vue";
import VSelect from "../common/VSelect.vue";

const router = useRouter();

// 콤보박스 검색옵션 목록
const selectOption = ref([
  { text: "검색조건", value: "" },
  { text: "글번호", value: "article_no" },
  { text: "제목", value: "subject" },
  { text: "작성자아이디", value: "user_id" },
]);

// 게시글목록(총 5개)
const articleList = [
  {
    articleNo: 100,
    subject: "메리 크리스마스 ^^",
    userId: "hissam",
    userName: "하이쌤",
    hit: 123,
    registerDate: "30.12.25",
  },
  {
    articleNo: 99,
    subject: "즐거운 성탄절입니다.",
    userId: "admin",
    userName: "관리자",
    hit: 100,
    registerDate: "30.12.24",
  },
  {
    articleNo: 98,
    subject: "한해 마무리 잘하세요~~",
    userId: "kimhi",
    userName: "김하이",
    hit: 78,
    registerDate: "30.12.21",
  },
  {
    articleNo: 97,
    subject: "토피넛라떼 정말 맛있어요!!",
    userId: "lattelove",
    userName: "라떼조아",
    hit: 33,
    registerDate: "30.12.20",
  },
  {
    articleNo: 96,
    subject: "내 생일이에요!!!",
    userId: "hissam",
    userName: "하이쌤",
    hit: 1004,
    registerDate: "30.12.20",
  },
];

const articles = reactive(articleList);
const currentPage = ref(7);
const totalPage = ref(35);

// 이 객체가 criteria의 역할을 수행
// (여기에 검색 옵션 정보를 저장)
const param = ref({
  pgno: currentPage.value,
  spp: import.meta.env.VITE_ARTICLE_LIST_SIZE,
  key: "",
  word: "",
});

// 현재 컴포넌트가 마운트될 때 게시글 리스트 출력
onMounted(() => {
  // param.value.pgno = 1;
  getArticleList();
});

// 선택한 검색옵션으로 param의 key 속성 변경
const changeKey = (val) => {
  console.log("BoarList에서 선택한 조건 : " + val);
  param.value.key = val;
};

const getArticleList = () => {
  if (param.value.word && !param.value.key) {
    console.log("검색 조건을 선택하세요.");
    return;
  }
  console.log("서버에서 글목록 얻어오자!!!", param.value);

  // DB 연동 시, 이 부분에서 axios.get()을 사용한 리스트 데이터 조회를 수행
};

// 페이지 번호 클릭 시 지정한 페이지로 이동
const onPageChange = (val) => {
  console.log(val + "번 페이지로 이동 준비 끝!!!");
  param.value.pgno = val;

  // 페이지 버튼 클릭 시 현재 페이지 번호를 선택한 페이지 번호로 갱신
  currentPage.value = param.value.pgno;
  getArticleList();
};

// 글쓰기 버튼 클릭 시 article-write란 이름을 갖는 route에 매핑된 글쓰기 뷰로 이동
const moveWrite = () => {
  console.log("글쓰러 가자!!!!");
  router.push({ name: "article-write" });
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="my-3 py-3 shadow-sm bg-light text-center">
          <mark class="sky">글목록</mark>
        </h2>
      </div>
      <div class="col-lg-10">
        <div class="row align-self-center mb-2">
          <!-- 글쓰기 버튼 영역 -->
          <div class="col-md-2 text-start">
            <button type="button" class="btn btn-outline-primary btn-sm" @click="moveWrite">
              글쓰기
            </button>
          </div>
          <!-- 글쓰기 버튼 영역 끝-->

          <!-- 검색창 영역 -->
          <div class="col-md-5 offset-5">
            <form class="d-flex">
              <!-- 검색조건 설정 콤보박스 -->
              <VSelect :selectOption="selectOption" @onKeySelect="changeKey" />

              <!-- 검색어 입력창 -->
              <div class="input-group input-group-sm">
                <!-- 검색창에 입력한 내용은 그대로 param.word에 바인딩 -->
                <input
                  type="text"
                  class="form-control"
                  v-model="param.word"
                  placeholder="검색어..."
                />
                <button class="btn btn-dark" type="button" @click="getArticleList">검색</button>
              </div>
            </form>
          </div>
          <!-- 검색창 영역 끝-->
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="text-center">
              <th scope="col">글번호</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
              <th scope="col">작성일</th>
            </tr>
          </thead>
          <tbody>
            <!-- 게시글 리스트 출력 -->
            <!-- 게시글번호를 key값으로 지정하여 리스트의 해당 게시글 데이터에 접근 -->
            <BoardListItem
              v-for="article in articles"
              :key="article.articleNo"
              :article="article"
            />
          </tbody>
        </table>
      </div>

      <!-- 페이지네이션 컴포넌트 -->
      <!-- 페이지 번호 클릭 시, 지정한 페이지로 이동 -->
      <ThePageNavigation
        :current-page="currentPage"
        :total-page="totalPage"
        @pageChange="onPageChange"
      />
    </div>
  </div>
</template>

<style scoped></style>
