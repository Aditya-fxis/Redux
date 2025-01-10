// Import necessary dependencies
import React, { useState } from "react";
import { addCart } from './feature/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
// Sample item data
const items = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Headphones", price: 199 },
];

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart);
  
  
  // State to manage the cart
  // const [cart, setCart] = useState([]);

  // // Function to add item to the cart
  // const addToCart = (item) => {
  //   setCart((prevCart) => [...prevCart, item]);
  // };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Items for Sale</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <strong>{item.name}</strong> - ${item.price}
            <button
              onClick={() => dispatch(addCart(item))}
              style={{ marginLeft: "10px", cursor:'pointer' }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default App;
