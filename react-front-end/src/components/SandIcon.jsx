import React from "react";

export default function SandIcon(props) {
  if (props.pressed) {
    document.getElementById(`sand${props.id}`).style.backgroundPosition =
      "22px 0px";
  }
  const arrowIcons = {
    height: "24px",
    width: "22px",
    backgroundImage: `url(/assets/${props.direction}.png)`,
    // backgroundPosition: `${props.pressed}` || "0px 0px",
    margin: "3px",
  };

  return <div style={arrowIcons} id={`sand${props.id}`} />;
}
