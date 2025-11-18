<script>
export default {
  // props 옵션 속성: 부모 컨포넌트로부터 전달받은 computedTodo()의 반환값을 수신할 방법을 지정
  // 즉, props 옵션 속성 = 수신함
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  // 부모 컴포넌트와 통신하기 위한 함수 정의
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },

    updateTodo(id) {
      this.$emit('update-todo', id);
    },
  },
};
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <!-- v-for문을 사용하여 리스트 출력 -> item.id를 key값으로 바인딩 -->
    <!-- 조건에 따라 적용할 css 스타일을 동적으로 변경 -->
    <div
      v-for="item in computedTodo"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <!-- checkbox에 관한 label을 클릭해도 체크처리가 되도록 동기화 -->
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <!-- todo 내용 출력 -->
      <span class="todo__item-text">{{ item.msg }}</span>
      <!-- 리스트에 출력된 todo를 삭제하는 버튼 -->
      <span
        class="material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
      >
        delete
      </span>
    </div>

    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>

<style></style>
