import React, { useEffect } from "react";
import RunningFill from "./RunningFill";
import "./running.scss";

export default function RunningGame(props) {
  useEffect(() => {
    window.addEventListener("keyup", props.minigame); //add listener with function
    return () => window.removeEventListener("keyup", props.minigame); //remove to prevent exponential fuckups
  }, [props.minigame]);

  return (
    <div className="running-progress">
      <RunningFill percentage={props.percentage} />
    </div>
  );
}
