import React from "react";

export default function RunningBar(props) {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
}
