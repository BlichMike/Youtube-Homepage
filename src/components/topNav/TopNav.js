import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./TopNav.css";

export default class TopNav extends Component {
  render() {
    return (
      <header>
        <div className="top-nav-container">
          <div className="top-nav">
            <div className="logo">
              <img src={logo} alt="logo" width="100" />
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div>
            <div className="nav-icons">
              <ul>
                <li>icon1</li>
                <li>icon2</li>
                <li>icon3</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
