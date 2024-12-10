import React from "react";
import "./AddToCart.css";

const AddToCartButton = ({ onClick }) => {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      +
    </button>
  );
};

export default AddToCartButton;
