import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.data);
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div style={cartStyle}>
      <h2>Your Cart</h2>
      <h3 style={{ marginTop: '20px' }}>
            Total: <span>${calculateTotal()}</span>
          </h3>
      {cartItems.length > 0 ? (
        <div>
          <ul style={listStyle}>
            {cartItems.map((item, index) => (
              <li key={index} style={itemStyle}>
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={imageStyle}
                  />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
          
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

const cartStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  width: '400px',
  margin: '20px auto',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '10px',
};

const imageStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '8px',
  marginRight: '10px',
};

export default Cart;
