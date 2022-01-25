import React, { Component } from "react";
import close from "../assets/close.svg";
import "../css/CartProductCard.css";

class CartProductCard extends Component {
  render() {
    const { product } = this.props;

    return (
      <>
        <li id={product.id} className="cart-product-card-container">
          <img className="cart-product-img" src={product.front_img_url}></img>
          <div>
            <p className="cart-product-name">{product.name}</p>
            <p className="cart-product-color">{product.color}</p>
            <p className="cart-product-quantity"> - {product.quantity} +</p>
          </div>
          <div className="cart-product-card-right">
            <p className="cart-product-price">${product.price}</p>
            <p className="cart-product-size">Size: {product.sizeSelected}</p>
          </div>
          <button className="cart-card-btn" onClick={() => this.handleClick(product)}>
            <img className="cart-card-btn-icon" src={close}></img>
          </button>
        </li>
        <div className="cart-solid-divider"></div>
      </>
    );
  }

  handleClick = (product) => {
    this.props.removeFromCart(product);
  };
}

export default CartProductCard;
