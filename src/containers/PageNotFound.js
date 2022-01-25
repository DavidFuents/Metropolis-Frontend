import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/PageNotFound.css";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container-p">
        <h1>METROPOLIS</h1>
        <div className="message">
          <p>Sorry, Looks like we don't have what you're looking for.</p>
          <Link className="link" to="collections">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }
}
