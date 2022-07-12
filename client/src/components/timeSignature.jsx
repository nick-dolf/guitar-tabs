import React, { Component } from "react";
import String from "./string";

class TimeSignature extends Component {
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
  render() {
    const { upper, lower } = this.props;
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
          stroke="black"
        />

        {this.state.strings.map((string, index) => {
          return (
            <line
              key={index}
              x1="0"
              y1={this.state.margin + this.state.gap * index}
              x2={this.state.width}
              y2={this.state.margin + this.state.gap * index}
              stroke="black"
              strokeWidth={string.thick}
            />
          );
        })}
        <text
          onClick={this.props.onUpper}
          x={this.state.width / 2}
          y={this.state.height / 4}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="130"
          fontFamily="serif"
        >
          {upper}
        </text>
        <text
          onClick={this.props.onLower}
          x={this.state.width / 2}
          y={(this.state.height * 3) / 4}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="130"
          fontFamily="serif"
        >
          {lower}
        </text>
      </svg>
    );
  }
}

export default TimeSignature;
