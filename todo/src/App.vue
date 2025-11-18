<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },

  // todoInput으로부터 수신한 todo 메시지를 저장
  data() {
    return {
      todo: [], // todoInput으로부터 수신한 데이터를 저장할 todo 리스트
      current: 'all', // todoHeader로부터 수신한 tab값을 저장
    };
  },

  // todoInput으로부터 전달받은 데이터를 todoList에 전달
  // methods 속성의 함수: 하위 컴포넌트의 emit을 통해 발신할 데이터를 수신하는 역할을 수행
  // 즉, 부모 컴포넌트에서는 하위 컴포넌트의 emit과 연결할 methods의 함수를 연결해준다.
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // todo id를 임의의 고유값으로 저장
        msg: inputMsg, // 할 일 텍스트
        completed: false, // 할 일 완료 여부
      };
      console.log(item);
      this.todo.push(item); // 작성한 todo(item)은 리스트에 저장
    },

    // todoHeader로부터 전달받은 값에 따라 다른 탭을 출력
    updateTab(tab) {
      console.log(tab);
      this.current = tab;
    },

    deleteTodo(id) {
      console.log(id);
      this.todo = this.todo.filter((v) => v.id !== id);
    },

    updateTodo(id) {
      console.log(id);
      this.todo = this.todo.map((v) =>
        // 지정한 id에 관한 completed 속성값 변경
        v.id === id ? { ...v, completed: !v.completed } : v
      );
    },
  },

  //  todoHeader의 tab값을 받아 todo 리스트 전송 방식을 다르게 적용
  computed: {
    computedTodo() {
      if (this.current === 'all') {
        // 현재 탭이 '전체'
        return this.todo;
      } else {
        // 현재 탭이 '완료' -> 완료된 TODO에 관한 리스트만 출력
        return this.todo.filter((v) => v.completed);
      }
    },
  },
};
</script>

<template>
  <!-- 컴포넌트로 렌더링할 html 요소 지정 -->
  <div class="todo">
    <!-- TodoInput으로부터 전달받은 현재 todo를 todoHeader에 전달 -->
    <TodoHeader :current="current" @update-tab="updateTab" />
    <!-- todoList 컴포넌트로 computedTodo()의 반환값을 전달 -->
    <TodoList :computed-todo="computedTodo" @delete-todo="deleteTodo" @update-todo="updateTodo"/>
    <!-- v-on 디렉티브 사용 -> todoInput 컴포넌트에서 실행 -->
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
