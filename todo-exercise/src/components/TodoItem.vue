<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: this.id,
          msg: this.newMsg,
          done: this.newStatus,
        }
      }
    }
  },

  data() {
    return {
      id: '',
      newMsg: '',
      newStatus: false
    }
  },

  emits: ['update-item', 'delete-item', 'edit-item'],

  methods: {
    updateItem() {

    },

    deleteItem() {

    },

    editItem() {
      this.$emit()
    },
  }
}
</script>

<template>
  <div class="todo__item">
    <input type="checkbox" id="chk" />
    <label for="chk" class="todo__checkbox-label"></label>
    <span class="todo__item-text">아침먹기</span>
    <span class="material-symbols-outlined todo__delete-icon"> delete </span>
  </div>
</template>

<style></style>
