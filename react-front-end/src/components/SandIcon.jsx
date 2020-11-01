import React from "react";

export default function SandIcon(props) {
  const arrowIcons = {
    height: "24px",
    width: "22px",
    backgroundImage: `url(/assets/${props.direction}.png)`,
    backgroundPosition: props.pressed ? "22px 0px" : "0px 0px",
    margin: "3px",
  };

  return <div style={arrowIcons} id={`sand${props.id}`} />;
}
