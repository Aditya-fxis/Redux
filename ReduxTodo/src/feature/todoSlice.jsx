import { createSlice } from '@reduxjs/toolkit'



export const todoSlice = createSlice({
  name: 'todo',
  initialState:[], 
  reducers: {
    addTodo: (state, action) => {
        state.push({ id: Date.now(), text: action.payload, completed: false });
        console.log(state, action.payload)
      },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addTodo, incrementByAmount } = todoSlice.actions

export default todoSlice.reducer