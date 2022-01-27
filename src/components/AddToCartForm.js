import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import "../css/AddToCartForm.css";

class AddToCartForm extends Component {
  constructor() {
    super();
    this.state = {
      sizeSelected: "Select A Size",
      isDisabled: true,
    };
  }
  
  handleChange = (event) => {
    this.setState({
      sizeSelected: event.target.value,
      isDisabled: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      ...this.props.product,
      sizeSelected: this.state.sizeSelected,
      quantity: 1,
    }

    this.props.addToCart(formData);
  };

  renderSizes = () => { 
    return this.props.product.sizes.map(size => <option value={size}>{size}</option>)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="product-sizes-container">
          <p className="product-size-text">Size</p>
          <select
            className="product-size-select"
            value={this.state.sizeSelected}
            onChange={this.handleChange}
          >
            <option disabled value="Select A Size">
              Select A Size
            </option>
            {this.renderSizes()}
          </select>
        </div>
        <div className="product-solid"></div>
        <button
          className="product-atc-btn"
          type="submit"
          disabled={this.state.isDisabled}
          style={
            this.state.sizeSelected === "Select A Size"
              ? null
              : {
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  letterSpacing: ".075rem",
                }
          }
        >
          {this.state.sizeSelected === "Select A Size"
            ? "SELECT A SIZE"
            : "ADD TO CART"}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (formData) => dispatch(addToCart(formData)),
  };
};

export default connect(null, mapDispatchToProps)(AddToCartForm);
