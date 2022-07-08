import React from "react";

const Fingers = (props) => {
  return (
    <React.Fragment>
      <circle
        cx={props.x}
        cy={props.y}
        r="20"
        fill="white"
        strokeWidth="4"
        stroke="black"
      />
      <text
        x={props.x}
        y={props.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
      >
        {props.number}
      </text>
    </React.Fragment>
  );
};

export default Fingers;
