import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./feature/todoSlice.jsx";
const App = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo);
  // console.log(state)
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div>
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: "8px", width: "200px", marginRight: "10px" }}
        />
        <button onClick={handleAddTodo} style={{ padding: "8px 12px" }}>
          Add
        </button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
