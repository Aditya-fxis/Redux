import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={cardStyle}>
      <img src={product.thumbnail} alt={product.title} style={imageStyle} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price.toFixed(2)}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating} ⭐
      </p>
      <button style={buttonStyle} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default ProductCard;
