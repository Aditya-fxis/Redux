import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState, 
  reducers: {
    addTodo: (state, action) => {
        // state.push({ id: nanoid(), text: action.payload, completed: false });
        const todo = { id: nanoid(), text: action.payload }
        state.todos.push(todo)
      },
    deleteTodo: (state, action) => {
       state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
      },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
      },
      toggleTodo: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
      
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addTodo, deleteTodo, updateTodo, toggleTodo, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer