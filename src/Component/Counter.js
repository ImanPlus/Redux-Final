import React from "react";
import "../styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter with HOOK</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrememt</button>
    </div>
  );
}
