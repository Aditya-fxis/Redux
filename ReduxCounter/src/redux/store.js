import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})