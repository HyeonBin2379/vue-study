<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoFilter,
    TodoList,
    TodoInput,
  },

  data() {
    return {
      todo: [], // todo 리스트 불러오기
      current: 'all', // 현재 탭
    };
  },

  methods: {
    // TodoInput의 emit에게서 받은 입력값으로 새로운 item 생성 후 리스트에 추가
    addTodo(inputMsg) {
      console.log('todo Input: ' + inputMsg);
      const item = {
        id: Math.random(),
        msg: inputMsg,
        done: false,
      };
      this.todo.push(item);
    },

    // TodoFilter의 emit에게서 받은 tab으로 현재 탭을 갱신
    updateTab(tab) {
      console.log('current tab: ' + tab);
      this.current = tab;
    },

    deleteTodo(id) {
      console.log('delete Todo: ' + id);
      this.todo = this.todo.filter((v) => v.id !== id);
    },

    updateTodo(id) {
      console.log('update Todo: ' + id);
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, done: !v.done } : v
      );
    },

    editTodo(id, newMsg) {
      console.log('edit Todo: ' + id);
      this.todo = this.todo.map((v) =>
        v.id === id ? { ...v, msg: newMsg } : v
      );
    },
  },

  //
  computed: {
    computedTodo() {
      if (this.current === 'active') {
        // 현재 탭이 '미완료'
        return this.todo.filter((item) => item.done === false);
      } else if (this.current === 'done') {
        // 현재 탭이 '완료'
        return this.todo.filter((item) => item.done);
      } else {
        return this.todo; // 현재 탭이 '전체'
      }
    },
  },

  // todo 리스트에서 변경이 발생할 때마다 localStorage에 저장된 todo리스트를 갱신
  watch: {
    todo: {
      handler(updated) {
        localStorage.setItem('todos', JSON.stringify(updated));
      },
      deep: true,
    },
  },
};
</script>

<template>
  <div class="todo">
    <!-- 현재 선택된 탭은 App.vue의 data 속성인 current 값을 적용 -->
    <TodoFilter v-bind:current="current" @update-tab="updateTab" />
    <TodoList :computed-todo="computedTodo" @edit-todo="editTodo" />
    <!-- 입력받은 내용으로 1개의 item 생성 후 리스트에 저장 -->
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<style></style>
