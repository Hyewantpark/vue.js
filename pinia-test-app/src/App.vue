<template>
  <div>
    <h1>TodoList 테스트(composition API)</h1>
    <hr />
    할일 추가 : <input type="text" v-model.trim="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }}
        </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTode(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할 일 수 : {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTodoListStore } from './stores/todo';

const todo = ref('');
const todoListStore = useTodoListStore();
const { todoList, addTodo, deleteTode, toggleDone } = todoListStore;

const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = '';
};
</script>
