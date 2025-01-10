import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    gap: '15px',
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    borderBottom: '1px solid #ddd',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Products
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart
      </Link>
    </nav>
  );
};

export default Navbar;
