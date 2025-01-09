import React, { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo, toggleTodo } from "./feature/todoSlice.jsx";

const App = () => {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [editInput, setEditInput] = useState("");
  const todoslist = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();


  
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

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos && storedTodos.length > 0) {
    storedTodos.forEach(todo => {
      dispatch(addTodo(todo.text));  
    });
  }
}, [dispatch]);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoslist));
}, [todoslist]);

  
  return (
    <div className="container">
      <div className="insidecon">
        <h1>Todo App</h1>
        <div className="add">
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
        </div>
        <ul>
          {todoslist.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
             
              {isEditing === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                    style={{
                      width: "300px",
                      marginRight: "10px",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                    }}
                  />
                  <div>
                    <button
                      className="btn1 delete"
                      onClick={() => handleUpdateTodo(todo.id)}
                      style={{
                        marginRight: "10px",
                        width: "20px", 
                        height: "20px", 
                        cursor: "pointer",
                      }}
                    >
                      ✅
                    </button>
                    <button
                      className="btn1 delete"
                      onClick={() => setIsEditing(null)}
                      style={{
                        marginRight: "10px",
                        width: "20px", 
                        height: "20px", 
                        cursor: "pointer",
                      }}
                    >
                      ❎
                    </button>
                  </div>
                </>
              ) : (
                <>
                <div className="check">
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                style={{
                  marginRight: "10px",
                  width: "20px", 
                  height: "20px", 
                  cursor: "pointer",
                }}
              />
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.text}
                  </span>
                </div>
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
