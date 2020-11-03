import React, { useEffect } from "react";
import RunningFill from "./RunningFill";
import "../styles/running.scss";
import Timer from "../helpers/timer";

export default function RunningGame(props) {
  console.log(props.dialogue);
  useEffect(() => {
    window.addEventListener("keyup", props.minigame); //add listener with function
    return () => window.removeEventListener("keyup", props.minigame); //remove to prevent exponential fuckups
  }, [props.minigame]);

  const timerCheck = () => {
    return true;
  };
  const aIcon = {
    height: "24px",
    width: "22px",
    backgroundImage: `url(/assets/akey.png)`,
    backgroundPosition: props.leg === "a" ? "22px 0px" : "0px 0px",
    margin: "3px",
  };
  const sIcon = {
    height: "24px",
    width: "22px",
    backgroundImage: `url(/assets/skey.png)`,
    backgroundPosition: props.leg === "s" ? "22px 0px" : "0px 0px",
    margin: "3px",
  };

  return (
    <>
      {timerCheck() && <Timer starttime={6} />}
      <div className="as-buttons">
        <div className="foot-button" style={aIcon} />
        <div className="foot-button" style={sIcon} />
      </div>
      <div className="running-progress">
        <RunningFill leg={props.leg} percentage={props.percentage} />
      </div>
    </>
  );
}
