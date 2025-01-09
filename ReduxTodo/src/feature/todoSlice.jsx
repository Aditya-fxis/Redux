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
        const todo = { id: nanoid(), text: action.payload, completed: false }
        state.todos.push(todo)
      },
    deleteTodo: (state, action) => {
       state.todos= state.todos.filter((todo)=>todo.id!==action.payload)
      },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addTodo, deleteTodo, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer