import React, { useEffect } from "react";
import SandIcon from "./SandIcon";
// import useMinigameHook from "../hooks/useMinigameHooks";

export default function ShiftingSands(props) {
  useEffect(() => {
    window.addEventListener("keyup", props.minigame); //add listener with function
    return () => window.removeEventListener("keyup", props.minigame); //remove to prevent exponential fuckups
  }, [props.minigame]);
  console.log("Sandporps: ", props);

  return (
    <div>
      {props.pattern.map((a, b) => (
        <SandIcon direction={a} key={b} id={b} pressed={props.pressed[b]} />
      ))}
    </div>
  );
}
