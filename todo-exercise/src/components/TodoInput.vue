<script>
export default {
  data() {
    return {
      inputMsg: '', // 사용자가 입력한 todo 내용
    };
  },

  emits: ['add-todo'], // App.vue에게 데이터 전달 시 사용할 emit

  methods: {
    addTodo() {
      // 입력한 내용이 없으면 경고창 출력
      if (this.inputMsg === '') {
        alert('입력한 내용이 없습니다.');
        return;
      }
      // emit을 통해 입력내용 전송 후 입력창 초기화
      console.log(this.inputMsg);
      this.$emit('add-todo', this.inputMsg);
      this.inputMsg = '';
    },
  },
};
</script>

<template>
  <div class="todo__input">
    <input
      v-model="inputMsg"
      type="text"
      class="todo__input-text"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>

<style></style>
