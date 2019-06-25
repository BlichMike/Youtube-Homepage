import React, { Component } from "react";
import VideoThumbnail from "./videoThumbnail/VideoThumbnail";
import dataService from "../../services/dataService";
import "./PartialCategory.css";

export default class PartialCategory extends Component {
  constructor(props) {
    super(props);
    this.allVideos = dataService.getVideos();
    this.categoryVideos = [];

    props.category.vids.forEach(vidId => {
      this.categoryVideos.push(this.allVideos[vidId]);
    });
  }

  handleVidClick = vid => {
    console.log(`clicked from category ${this.props.category.name}`);
    this.props.handleVidClick(vid);
  };

  render() {
    return (
      <div className="partial-category-container">
        <div className="category-title">{this.props.category.name}</div>
        {this.categoryVideos.map(vid => (
          <VideoThumbnail
            key={vid.id}
            vid={vid}
            handleVidClick={this.handleVidClick}
          />
        ))}
      </div>
    );
  }
}
