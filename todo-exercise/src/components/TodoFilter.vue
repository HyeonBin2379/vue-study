<script>
export default {
  props: {
    // App.vue로부터 현재 탭 정보를 수신
    current: {
      type: String,
      default() {
        return 'all';
      },
    },
  },

  // 선택된 탭 정보를 App.vue에게 전달
  emits: ['update-tab'],

  methods: {
    // 변경할 탭을 App.vue에게 전달
    updateTab(tab) {
      console.log(tab);
      this.$emit('update-tab', tab);
    },
  },
};
</script>

<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <!-- 현재 선택된 탭 활성화 + 탭 변경 시 App.vue에게 전달 -->
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'active' }"
        @click="updateTab('active')"
      >
        미완료
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'done' }"
        @click="updateTab('done')"
      >
        완료
      </li>
    </ul>
  </div>
</template>

<style></style>
