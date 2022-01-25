import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-menu">
          <ul>
            <NavLink className="item link" to="/collections">
              MENU
            </NavLink>
          </ul>
        </div>
        <div className="links">
          <NavLink className="item link" to="/collections">
            COLLECTIONS
          </NavLink>
          <NavLink className="item link" to="/collections/mens">
            MENS
          </NavLink>
          <NavLink className="item link" to="/collections/womens">
            WOMENS
          </NavLink>
        </div>
        <NavLink className="item logo" to="/">
          METROPOLIS
        </NavLink>
        <NavLink className="item cart" to="/cart">
          CART <span id="cart-quantity">{this.props.cartCounter}</span>
        </NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cartCounter: state.cart.cartCount };
}

export default connect(mapStateToProps)(Navbar);
