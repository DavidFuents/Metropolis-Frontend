import React, { Component } from "react";
import upArrow from "../assets/angle-up.svg";
import downArrow from "../assets/angle-down.svg";
import "../css/ProductDropdown.css";

export default class ProductDropdown extends Component {
  constructor(props) {
    super();
    this.state = {
      active: props.toggleSetting,
    };
  }

  toggleSelected = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    const { details } = this.props;
    return (
      <div className="product-dropdown">
        <button onClick={this.toggleSelected} className="product-dropdown-btn">
          DETAILS 
          <img className="product-dropdown-btn-icon" src={`${this.state.active ? upArrow : downArrow}`} alt={`${this.state.active ? "Close" : "Open"}`}></img>
        </button>
        <div className={`${this.state.active ? "product-dropdown-content-selected" : "product-dropdown-content"}`}>
          <ul>
            {details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
