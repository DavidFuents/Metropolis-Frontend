import React, { Component } from "react";
import "../css/ProductCard.css";

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
    };
  }

  toggleHover = () => {
    this.setState({
      hover: !this.state.hover,
    });
  };

  render() {
    const { id, name, price, color, sizes, front_img_url, back_img_url } = this.props.product;

    return (
      <div className="product-card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        {this.state.hover ? (
          <>
            <a href={`/collections/${this.props.collectionId}/products/${id}`}>
              <img src={back_img_url} alt={name}></img>
            </a>
            <div className="product-card-info">
              {sizes.map(size => <li key={size}><div className="tooltip">{size}<span className="tooltip-text">Quick add</span></div></li>)}
            </div>
          </>
        )  
        : (
          <>
            <a href={`/collections/${this.props.collectionId}/products/${id}`}>
              <img src={front_img_url} alt={name}></img>
            </a>
            <div className="product-card-info">
              <h3 className="product-card-name">{name}</h3>
              <p className="product-card-color">{color}</p>
              <p className="product-card-price">${price}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ProductCard;
