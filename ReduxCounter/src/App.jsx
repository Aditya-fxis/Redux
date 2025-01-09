import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./feature/counterSlice.jsx";
const App = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncreament() {
    dispatch(increment());
  }

  function handleDecreament() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  function handleAmount() {
    dispatch(incrementByAmount(amount));
  }

  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="box">
        <div className="container">

          <div className="amount">
            <input className="input" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount"/>
            <button className="abtn" onClick={handleAmount}>
              Increment by Amount
            </button>
          </div>


          <div className="rcontainer">
            <button onClick={handleIncreament}>+</button>
            <p className="text">Counter: {count} </p>
            <button onClick={handleDecreament}>-</button>
          </div>


          <button className="reset" onClick={handleReset}>
            Reset
          </button>


        </div>
      </div>
    </>
  );
};

export default App;
