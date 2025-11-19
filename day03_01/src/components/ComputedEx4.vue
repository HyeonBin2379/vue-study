<script setup>
import { ref, computed } from 'vue';

// 사용할 데이터 속성 지정
const keyword = ref('');
const items = ref(['apple', 'banana', 'grape', 'orange']);

// 입력한 키워드를 포함하는 요소들만 갖도록 배열을 필터링
const filteredList = computed(() => {
  return items.value.filter((item) =>
    item.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <!-- 필터링에 사용할 키워드 입력 -->
    <input v-model="keyword" placeholder="검색어 입력" />
    <!-- 키워드를 포함하는 단어들만 리스트에서 출력 -->
    <!-- 입력한 키워드에 따라 필터링 결과가 다름 -->
    <ul>
      <li v-for="item in filteredList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
