import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (value !== "") {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <div className="todo-input">
      <input
        placeholder="Add Task.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmitAdd}>Add TODO</button>
    </div>
  );
}

export default TodoInput;
