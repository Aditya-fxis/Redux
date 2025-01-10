import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../feature/cartSlice.jsx'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})