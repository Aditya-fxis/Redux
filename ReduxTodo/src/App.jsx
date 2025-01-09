import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./feature/todoSlice.jsx";
const App = () => {
  const [input, setInput] = useState("");
  const todoslist = useSelector((state) => state.todo.todos);
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
      <div className="insidecon">
        <h1>Todo App</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button
          className="btn"
          onClick={handleAddTodo}
          style={{ padding: "10px 16px" }}
        >
          Add
        </button>
        <ul>
          {todoslist.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <div>
                <button
                  className="delete"
                  onClick={() => dispatch(updateTodo(todo.id))}
                >
                  ✏️
                </button>
                <button
                  className="delete"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
