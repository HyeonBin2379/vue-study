<script setup>
import { useRouter, useRoute } from "vue-router";
// import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

// 부모에서 전달한 글번호를 props로 받아 자식에서 사용
const props = defineProps({ no: String });

let articleNo = ref(0);

onMounted(() => {
  //   articleNo.value = route.params.no;
  // 부모가 전달한 no를 받아 articleNo에 할당함으로써 원하는 게시글 데이터로 렌더링
  console.log("route.params.no :: " + route.params.no);
  articleNo.value = props.no;
});
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ articleNo }}번글 제목</h4>
      <p class="card-text">글 내용이 나와요</p>
      <!-- name이 board6인 경로 요청 -> boardlist6으로 리다이렉트 -->
      <button
        type="button"
        @click="router.push({ name: 'board6' })"
        class="btn btn-outline-success btn-sm"
      >
        글목록
      </button>
      <!-- name 속성을 사용하여 다음 경로 지정 + 다음 route의 params 속성값으로 게시글 번호 전달 -->
      <button
        type="button"
        @click="router.push({ name: 'boardmodify6', params: { no: articleNo } })"
        class="btn btn-outline-dark btn-sm ms-2"
      >
        글수정
      </button>
    </div>
  </div>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
