import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  console.log("todos TodoList: ", todos);
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} />
      ))}
    </div>
  );
}
