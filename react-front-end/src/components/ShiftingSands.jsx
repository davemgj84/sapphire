import React, { useEffect, useState } from "react";
import SandIcon from "./SandIcon";
import "../styles/sand.scss";
import Timer from "../helpers/timer";

export default function ShiftingSands(props) {
  console.log("SS: ", props);
  useEffect(() => {
    window.addEventListener("keyup", props.minigame); //add listener with function
    return () => {
      window.removeEventListener("keyup", props.minigame);
    }; //remove to prevent exponential fuckups
  }, [props.minigame]);

  const timerCheck = () => {
    if (props.pressed[props.pressed.length - 1] === false) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="sand-game">
      {timerCheck() && <Timer starttime={5} />}
      <div className="sand-icons">
        {props.pattern.map((a, b) => (
          <SandIcon direction={a} key={b} id={b} pressed={props.pressed[b]} />
        ))}
      </div>
    </div>
  );
}
