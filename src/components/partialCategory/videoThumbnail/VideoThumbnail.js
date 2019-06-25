import React, { Component } from "react";
import "./VideoThumbnail.css";

export default class VideoThumbnail extends Component {
  constructor(props) {
    super(props);
    this.vid = props.vid;
  }

  handleVidClick = vid => {
    console.log(`Vid id - ${vid.id} clicked from video thumbnail`);
    this.props.handleVidClick(vid);
  };
  render() {
    return (
      <div className="vid-thumbnail-container">
        <div
          className="vid-thumbnail"
          onClick={() => this.handleVidClick(this.vid)}
        />
        <div className="vid-title">{this.vid.name}</div>
      </div>
    );
  }
}
