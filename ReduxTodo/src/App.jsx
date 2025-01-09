import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./feature/todoSlice.jsx";
const App = () => {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editInput, setEditInput] = useState("");
  const todoslist = useSelector((state) => state.todo.todos);
  // console.log(state)
  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleEditTodo = (id, text) => {
    setIsEditing(id);
    setEditInput(text);
  };

  const handleUpdateTodo = (id) => {
    if (editInput.trim()) {
      dispatch(updateTodo({ id, newText: editInput }));
      setIsEditing(null);
      setEditInput("");
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
              {isEditing === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    placeholder="Add a new todo"
                    style={{
                      width: "300px",
                      marginRight: "10px",
                      backgroundColor:"transparent",
                      border: "none",
                      outline: "none",
                      borderRadius: "none",
                  
                    }}
                  />
                 <div>
                 <button
                    className="btn1 delete"
                    onClick={() => handleUpdateTodo(todo.id)}
                    style={{
                      marginRight: "10px"
                    }}>
                    ✅
                  </button>
                  <button className="btn1 delete" onClick={() => setIsEditing(null)}>
                  ❎
                  </button>
                 </div>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <div>
                    <button
                      className="delete"
                      onClick={() => handleEditTodo(todo.id, todo.text)}
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
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
