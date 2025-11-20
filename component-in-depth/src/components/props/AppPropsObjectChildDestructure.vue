<script setup>
import { computed } from 'vue';

// defineProps에서 반환된 객체에서 fruit만 빼서 f라는 이름으로 사용(alias)
// const props = defineProps({ fruit: Object }) 와 같지만
// 구조 분해 할당을 사용해서 props.fruit 대신 f로 간단히 쓸 수 있음

// 구조 분해 할당인 이유: defineProps를 통해 수신한 props의 데이터 중 일부만을 분리해서 사용하기 때문
const { fruit: f } = defineProps({
  fruit: Object,
});

// f.id 를 사용해서 이미지 경로 계산
const imgSrc = computed(() => {
  console.log(f.id); // 디버깅용 로그 (콘솔에서 현재 과일 id 확인)
  return new URL(`../../assets/${f.id}.png`, import.meta.url).href;
});

const emits = defineEmits('select-fruit');

const selectFruit = (fruitName) => {
  emits('select-fruit', fruitName);
};
</script>

<template>
  <div class="div-fruit">
    <!-- 위 컴포넌트와 동일하지만, fruit 대신 f 사용 -->
    <input type="checkbox" :id="f.id" :checked="f.checked" />

    <label :for="f.id">
      <img :src="imgSrc" class="img-fruit" />
      <span @click="selectFruit(f.name)">{{ f.name }} </span>
      ({{ f.price }}원, {{ f.origin }})
    </label>
  </div>
</template>

<style scoped>
.div-fruit {
  color: darkgray;
  margin-bottom: 5px;
  font-size: large;
}

.img-fruit {
  width: 20px;
  margin: 0 1px 0 5px;
}
</style>
