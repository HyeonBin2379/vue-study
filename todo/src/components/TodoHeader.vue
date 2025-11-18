<script>
export default {
  // App.vue의 current를 전달받을 때 사용
  props: {
    current: {
      type: String,
      default() {
        return 'all';
      },
    },
  },

  // TodoHeader와 App.vue 간 데이터 송수신에 사용할 emit 속성값
  emits: ['update-tab'],

  methods: {
    // todoHeader의 tab값을 부모 컴포넌트에게 발송하는 $emit()을 실행할 함수를 정의
    updateTab(tab) {
      this.$emit('update-tab', tab);
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <!-- 헤더 탭 구분 -->
      <!-- 특정 조건에서 지정한 css 적용 -->
      <!-- '전체' 탭 클릭 시 updateTab() 함수를 통해 부모 컴포넌트에게 all 전달 -->
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>

      <!-- '전체' 탭 클릭 시 updateTab() 함수를 통해 부모 컴포넌트에게 completed 전달 -->
      <li
        :class="{ 'todo__tab--active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </div>
</template>

<style></style>
