import React from "react";
import { Link } from "react-router-dom";
import "../styles/DialogueBox.scss";
import RunningGame from "./RunningGame";
import useMinigameHook from "../hooks/useMinigameHooks";

export default function DialogueBox(props) {
  const { state, runningMini } = useMinigameHook();

  const endScene = () => {
    if (props.dialogue.next_dialogue_id === null) {
      console.log("HELLO");
      return true;
    }
  };
  const gameCheck = () => {
    if (props.dialogue[0].story === "RunningGame") {
      console.log("YES");
      // document.getElementsByClassName("dialogue-box")[0].style.display = "none";
      if (state.runningPercent === 100) {
        document.getElementsByClassName("dialogue-box")[0].style.display =
          "flex";
        document.getElementsByClassName("running-progress")[0].style.display =
          "none";
      } else {
        document.getElementsByClassName("dialogue-box")[0].style.display =
          "none";
      }
      return true;
    }
  };
  //renders multiple choices if props.dialogue is an array
  if (props.dialogue.length) {
    return (
      <>
        {gameCheck() && (
          <RunningGame
            minigame={runningMini}
            percentage={state.runningPercent}
          />
        )}

        <div className="dialogue-box">
          <p>{props.dialogue[0].story}</p>
          <div>
            {props.dialogue.map((choice) => (
              <button
                className="dialogue-buttons"
                onClick={() => props.current(props.next(choice))}
              >
                {choice.label}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    //renders single path
    return (
      <div className="dialogue-box">
        <p>{props.dialogue.story}</p>
        {endScene() ? (
          <Link
            to={`/scene/${Number(props.scene) + 1}`}
            className="dialogue-buttons"
          >
            <button>Return to Map</button>
          </Link>
        ) : (
          <button
            className="dialogue-buttons"
            onClick={() => props.current(props.next(props.dialogue))}
          >
            {props.dialogue.label}
          </button>
        )}
      </div>
    );
  }
}
