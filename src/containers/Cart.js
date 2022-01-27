import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import NavBar from "../components/Navbar";
import CartProductCard from "../components/CartProductCard";
import "../css/Cart.css";

class Cart extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="cart-page-container">
          <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            <div className="solid-divider"></div>
            <div className="cart-products-container">
              {this.renderCartedProducts()}
            </div>
            <h4 className="cart-subtotal">
              Subtotal: ${this.renderCartTotal()}
            </h4>
          </div>
          <div className="checkout-container">
            <h2 className="checkout-title">Checkout</h2>
            <div className="solid-divider"></div>
            <button className="checkout-btn">Checkout as guest</button>
          </div>
        </div>
      </>
    );
  }

  renderCartedProducts = () => {
    return this.props.cartProducts.map((product) => (
      <CartProductCard
        product={product}
        removeFromCart={this.props.removeFromCart}
      />
    ));
  };

  renderCartTotal = () => {
    let total = 0;

    this.props.cartProducts.map(
      (product) => (total += product.price * product.quantity)
    );

    return total;
  };
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (formData) => dispatch(removeFromCart(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
