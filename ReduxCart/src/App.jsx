import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, addCart } from './feature/cartSlice';
import ProductCard from './ProductCard';
import Cart from './Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const isLoading = useSelector((state) => state.cart.isLoading);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
    <div style={{ padding: '20px' }}>
      <h1>Product Store</h1>
      <Navbar/>
      <div style={containerStyle}>
        
        <Routes>
          <Route path='/' element={<div>
          <h2>Available Products</h2>
          <div style={productContainerStyle}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </div>
        </Router>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const productContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

export default App;
