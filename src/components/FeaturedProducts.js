import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "../css/FeaturedProducts.css";

class FeaturedProducts extends Component {
  render() {
    const { id, name, products } = this.props.collection;
    const featuredProducts = products.slice(0, 8);

    return (
      <>
        <h4 className="featured-products-title">{name}</h4>
        <div className="featured-products-container">
          {featuredProducts.map((product) => (
              <li key={product.id}><ProductCard className="featured-product" collectionId={id} product={product}/></li>
          ))}
        </div>
      </>
    );
  }
}

export default FeaturedProducts;
