import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavDropdown.css";

export default class NavDropdown extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  toggleSelected = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const { category, links } = this.props;
    return (
      <div className="dropdown">
        <button onClick={this.toggleSelected} className="drop-btn">{category}</button>
        <div className={`${this.state.active ? "dropdown-content-selected" : "dropdown-content"}`}>
          <ul>
            {links.map(({ to, name }) => <li><NavLink className='link' to={to}>{name}</NavLink></li>)}
          </ul>
        </div>
      </div>
    );
  }
}
