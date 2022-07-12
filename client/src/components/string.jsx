import React, { Component } from "react";

const String = (props) => {
  return (
    <React.Fragment>
      <line
        x1="0"
        y1={props.y}
        x2={props.width}
        y2={props.y}
        stroke="black"
        strokeWidth={props.thick}
      />

      <g
        className="decrease-fret"
        onClick={() => props.decreaseFret(props.num)}
        fill="transparent"
        stroke="transparent"
      >
        <rect
          x="0"
          y={props.y - props.gap / 2}
          width={props.width / 2 - 1}
          height={props.gap}
        />
        <line
          x1={(props.width * 1) / 8 - props.gap / 4}
          y1={props.y}
          x2={(props.width * 1) / 8 + props.gap / 4}
          y2={props.y}
          strokeWidth="4"
        />
      </g>
      <g
        className="increase-fret"
        onClick={() => props.increaseFret(props.num)}
        fill="transparent"
        stroke="transparent"
      >
        <rect
          x={props.width / 2}
          y={props.y - props.gap / 2}
          width={props.width / 2}
          height={props.gap}
        />
        <line
          x1={(props.width * 7) / 8 - props.gap / 4}
          y1={props.y}
          x2={(props.width * 7) / 8 + props.gap / 4}
          y2={props.y}
          strokeWidth="4"
        />
        <line
          x1={(props.width * 7) / 8}
          y1={props.y - props.gap / 4}
          x2={(props.width * 7) / 8}
          y2={props.y + props.gap / 4}
          strokeWidth="4"
        />
      </g>
    </React.Fragment>
  );
};

export default String;
