<script>
export default {
  data() {
    return {
      newMsg: '',
    };
  },

  emits: ['update-item', 'delete-item', 'edit-item'],

  methods: {
    deleteItem(id) {
      this.$emit('delete-item', id);
    },

    updateItem(id) {
      this.item.done = !this.item.done;
      this.$emit('update-item', id, this.item.done);
    },

    editItem(id, newMsg) {
      this.item.msg = newMsg;
      this.$emit('edit-item', id, newMsg);
    },
  },
};
</script>

<template>
  <div class="todo__item">
    <input type="checkbox" 
      :id="`chk${item.id.toString()}`"
      :checked="item.done" 
      @click="updateItem"/>
    
      <label
      :for="`chk${item.id.toString()}`"
      class="todo__checkbox-label"
    ></label>

    <input type="text"
      v-model="item.msg"
      :id="`chk${item.id.toString()}`"
      class="todo__item-text" 
      @keydown.enter="editItem(this.item.id, this.item.msg)"></input>

    <span class="material-symbols-outlined todo__edit-icon" @click="editItem(this.item.id, this.item.msg)"> edit </span>
    <span class="material-symbols-outlined todo__delete-icon" @click="deleteItem(this.item.id)"> delete </span>
  </div>
</template>

<style></style>
