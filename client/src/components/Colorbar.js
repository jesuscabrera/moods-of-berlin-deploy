import React, { Component } from "react";
import "./Colorbar.css";
import "bootstrap/dist/css/bootstrap.css";

class Colorbar extends Component {
  render() {
    return (
      <div className="container-boxes">
        <button className="box" name="joyful" onClick={this.props.changeMood}>
          joyful
        </button>
        <button className="box" name="relaxed" onClick={this.props.changeMood}>
          relaxed
        </button>
        <button
          className="box"
          name="energetic"
          onClick={this.props.changeMood}
        >
          energetic
        </button>
        <button className="box" name="bored" onClick={this.props.changeMood}>
          bored
        </button>
        <button
          className="box"
          name="thoughtful"
          onClick={this.props.changeMood}
        >
          thoughtful
        </button>
        <button
          className="box"
          name="melancholic"
          onClick={this.props.changeMood}
        >
          melancholic
        </button>
        <button className="box" name="anxious" onClick={this.props.changeMood}>
          anxious
        </button>
        <button className="box" name="angry" onClick={this.props.changeMood}>
          angry
        </button>
      </div>
    );
  }
}

export default Colorbar;
