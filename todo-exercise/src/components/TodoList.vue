<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem,
  },

  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      isDisabled: false,
      lastMsg: '',
    };
  },

  // App.vue 파일에게 지정한 데이터를 발신
  emits: ['update-todo', 'delete-todo', 'edit-todo'],

  methods: {
    //
    deleteTodo(id) {
      console.log('delete target: ' + id);
      this.$emit('delete-todo', id);
    },

    updateTodoStatus(id) {
      console.log('update target: ' + id);
      this.$emit('update-todo', id);
    },

    editTodo(id, newMsg) {
      console.log('edit target: ' + id);
      this.$emit('edit-todo', id, newMsg);
    },
  },
};
</script>

<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <TodoItem v-for="item in computedTodo" :key="item.id" />
    <!-- 할 일 목록이 없을 때 -->
    <div
      v-show="computedTodo.length === 0"
      class="todo__item--no"
      style="display: none"
    >
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>

<style></style>
