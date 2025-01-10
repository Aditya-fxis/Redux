import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers:{
        addCart: (state, action)=> {
            state.push(action.payload); 
        }
    }
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer