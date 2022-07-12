import React, { Component } from "react";
import Finger from "./finger";
import String from "./string";

class Chord extends Component {
  state = {
    height: 256,
    width: 96,
    margin: 28,
    gap: 40,
    strings: [
      { name: "E", thick: 2 },
      { name: "B", thick: 2 },
      { name: "G", thick: 3 },
      { name: "D", thick: 3 },
      { name: "A", thick: 4 },
      { name: "E", thick: 4 },
    ],
  };

  increaseFret = (num) => {
    console.log("increase", num);
  };
  decreaseFret = (num) => {
    console.log("decrease", num);
  };

  render() {
    const { measurePos } = this.props;

    let bar;
    if (measurePos === 0) {
      bar = (
        <line
          x1="0"
          y1="0"
          x2="0"
          y2={this.state.height}
          strokeWidth="6"
          stroke="black"
        />
      );
    }

    return (
      <svg
        className="mb-3"
        style={{ background: "white" }}
        height="200"
        viewBox={`0 0 ${this.state.width} ${this.state.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          height={this.state.height}
          width={this.state.width}
          fill="none"
          strokeWidth="2"
          stroke="lightgrey"
        />
        {this.state.strings.map((string, index) => {
          return (
            <String
              key={index}
              y={this.state.margin + this.state.gap * index}
              gap={this.state.gap}
              width={this.state.width}
              thick={string.thick}
              increaseFret={() =>
                this.props.increaseFret(this.props.chord_num, index)
              }
              decreaseFret={() =>
                this.props.decreaseFret(this.props.chord_num, index)
              }
            />
          );
        })}
        {this.props.strings.map((string) => {
          return (
            <Finger
              key={string.string}
              x={this.state.width / 2}
              y={this.state.margin + this.state.gap * string.string}
              number={string.finger}
            />
          );
        })}
        {bar}
      </svg>
    );
  }
}

export default Chord;
