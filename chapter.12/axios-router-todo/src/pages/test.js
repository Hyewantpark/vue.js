const todo = {
  id: '1',
  todo: '오브젝트 이해하기',
  done: false,
};

const copyTodo = {
  ...todo,
  done: true,
};

console.log(todo === copyTodo);
console.log(copyTodo);
