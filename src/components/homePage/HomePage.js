import React, { Component } from "react";
import "./HomePage.css";
import PartialCategory from "../partialCategory/PartialCategory";
import dataService from "../../services/dataService";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.categories = dataService.getMainCategories();
  }

  handleVidClick = vid => {
    console.log(`Video id got to Home page - ${vid.id}`);
  };

  render() {
    return (
      <div className="home-page-container">
        {this.categories.map(category => (
          <PartialCategory
            category={category}
            key={category.id}
            handleVidClick={this.handleVidClick}
          />
        ))}
      </div>
    );
  }
}
