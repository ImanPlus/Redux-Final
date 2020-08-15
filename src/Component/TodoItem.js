import React from "react";

const TodoItem = ({ todo, index }) => {
  console.log("todos: ", todo);
  return <div className="todo">{todo.text}</div>;
};

export default TodoItem;
