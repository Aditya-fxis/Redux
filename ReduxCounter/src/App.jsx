import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement} from './feature/counterSlice.jsx'
const App = () => {
const count = useSelector((state)=> state.counter.value)

const dispatch = useDispatch();

  function handleIncreament() {
    dispatch(increment());
  }

  function handleDecreament(){
    dispatch(decrement());
  }

  return (
   <>
   <div className='box'>
   <div className='container'>
      <button onClick={handleIncreament}>+</button>
      <p>Counter: {count}</p>
      <button onClick={handleDecreament}>-</button>      
    </div>
   </div>
   </>
  )
}

export default App
