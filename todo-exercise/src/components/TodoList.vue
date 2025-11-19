<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
};
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <TodoItem />
    <!-- 할 일 목록이 없을 때 -->
    <div class="todo__item--no" style="display: none">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>

<style></style>
