import React from "react";
import "../styles.css";
import Counter from "./Counter";
import TodoInput from "./TodoInput";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { addTodo } from "../Actions/TodoAct";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.Todo.todos);
  const boundAddTodo = (text) => dispatch(addTodo(text));

  return (
    <div className="App">
      <Counter />
      <TodoInput addTodo={boundAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
