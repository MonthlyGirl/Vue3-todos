<template>
  <div class="container">
    <section class="todoapp" v-cloak>
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todoList.length">
        <inputc id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li
            class="todo"
            v-for="todo in todoList"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
          >
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
              <button class="destroy" @click="removeTodo(todo)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="todo.name"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong></strong>
          left
        </span>
        <button class="clear-completed" @click="removeCompleted()">Clear completed</button>
      </footer>
    </section>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";

const state = reactive({
  newTodo: "",
  todoList: [
    {
      id: Date.parse(new Date()),
      name: "吃饭",
      completed: false,
    },
  ],
  editedTodo: null,
});
// 添加
const addTodo = () => {
  if (!state.newTodo) {
    return;
  }
  state.todoList.push({
    id: Date.parse(new Date()),
    name: state.newTodo.trim(),
    completed: false,
  });
  state.newTodo = "";
};
//编辑
const editTodo = (todo) => {
  state.editedTodo = todo;
};
//删除
const removeTodo = (todo) => {
  let index = state.todoList.indexOf(todo);
  state.todoList.splice(index, 1);
};
//完成编辑
const doneEdit = (todo) => {
  if (!state.editedTodo) {
    return;
  }
  state.editedTodo = null;
  todo.name = todo.name.trim();
  if (!todo.name) {
    removeTodo(todo);
  }
};
// 删除已完成
const removeCompleted = () => {
  state.todoList = state.todoList.filter((todo) => !todo.completed);
};

export default {
  setup(props) {
    return {
      ...toRefs(state),
      addTodo,
      editTodo,
      removeTodo,
      doneEdit,
      removeCompleted,
    };
  },
};
</script>
<style scoped>
button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
