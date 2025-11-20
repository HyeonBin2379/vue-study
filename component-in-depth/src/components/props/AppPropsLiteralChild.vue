<script setup>
import { computed } from 'vue'; // computed() 가져오기 — 계산된 속성

// 부모가 내려준 Props 선언
// 부모의 배열 fruits를 구성하는 1개의 요소 단위로 prop을 전달
const props = defineProps({
  fruitId: String, // 과일 고유 ID
  fruitName: String, // 과일 이름
  isChecked: Boolean, // 체크 여부
});

// 이미지 경로를 동적으로 계산하는 computed 속성
// (props를 통해 수신한 fruit 데이터를 적용)
const imgSrc = computed(() => {
  return new URL(`../../assets/${props.fruitId}.png`, import.meta.url).href;
  // props.fruitId 값에 따라 f1.png, f2.png 등 이미지 파일 경로 동적 생성
});

// 자식 컴포넌트에서는 UI 표현을 담당
</script>

<template>
  <div class="div-fruit">
    <!-- checkbox 고유 식별자 -->
    <input type="checkbox" :id="fruitId" :checked="isChecked" />
    <!-- 부모가 준 checked 값 반영 -->

    <label :for="fruitId">
      <!-- 클릭 시 해당 checkbox 활성화 -->
      <!-- computed로 계산된 이미지 경로 -->
      <img :src="imgSrc" class="img-fruit" :alt="fruitName" />

      <!-- 이미지 설명 -->
      {{ fruitName }}
      <!-- 과일 이름 표시 -->
    </label>
  </div>
</template>

<!-- 현재 컴포넌트에 대해서만 지정한 스타일을 적용 -->
<style scoped>
.div-fruit {
  margin-bottom: 5px;
  font-size: large;
}

.img-fruit {
  width: 20px;
  margin: 0 1px 0 5px;
}
</style>
