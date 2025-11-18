<script>
export default {
  // 필요한 데이터 영역 정의
  data() {
    return {
      inputMsg: '', // 사용자가 입력한 todo 데이터 저장
    };
  },

  // $emits() 함수 사용 => 자식에서 부모로 데이터를 전달
  emits: ["addTodo"],

  // 이벤트 등록
  methods: {
    addTodo() {
      console.log(this.inputMsg);
      this.$emit('addTodo', this.inputMsg);         // addTodo: 부모 컴포넌트 이벤트로 inputMsg를 호출하여 전달
      this.inputMsg = '';
    },
  },
};
</script>

<template>
  <div class="todo__input">
    <!-- v-model 디렉티브 지정 -> 양방향 데이터 바인딩(자바스크립트로 데이터 전송) -->
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />
    <!-- 엔터키 or 등록 버튼 클릭 시 todo 등록 이벤트 발생 -->
    <!-- 이제 입력된 데이터는 부모 컴포넌트 -> todoList 순으로 전달해야 함(형제 컴포넌트 간 직접 통신 불가) -->
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>

<style></style>
