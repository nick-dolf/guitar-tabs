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
      <line
        x1="0"
        y1={props.y}
        x2={props.width / 2}
        y2={props.y}
        stroke="transparent"
        strokeWidth={props.gap}
        onClick={props.increaseFret}
      />
      <line
        x1={props.width / 2}
        y1={props.y}
        x2={props.width}
        y2={props.y}
        stroke="transparent"
        strokeWidth={props.gap}
        onClick={() => props.decreaseFret(props.num)}
      />
    </React.Fragment>
  );
};

export default String;
