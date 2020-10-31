import React, { useEffect } from "react";
import SandIcon from "./SandIcon";
// import useMinigameHook from "../hooks/useMinigameHooks";
import "../styles/sand.scss";

export default function ShiftingSands(props) {
  useEffect(() => {
    window.addEventListener("keyup", props.minigame); //add listener with function
    return () => {
      window.removeEventListener("keyup", props.minigame);
    }; //remove to prevent exponential fuckups
  }, [props.minigame]);

  return (
    <div className="sand-game">
      {props.pattern.map((a, b) => (
        <SandIcon direction={a} key={b} id={b} pressed={props.pressed[b]} />
      ))}
    </div>
  );
}
