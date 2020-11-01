import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/DialogueBox.scss";
import TypeWriter from "./TypeWriter";

import RunningGame from "./RunningGame";
import useMinigameHook from "../hooks/useMinigameHooks";
import { boulderCheck } from "../helpers/boulderCheck";

import ShiftingSands from "./ShiftingSands";
import { sandCheck } from "../helpers/sandCheck";
import useSandHook from "../hooks/useSandHook";

export default function DialogueBox(props) {
  const { running, runningMini } = useMinigameHook(props);
  const { sand, sandMini, arrowButtons, round } = useSandHook(props);
  const [attempts, setAttempts] = useState(0);

  const endScene = () => {
    if (props.dialogue.next_dialogue_id === null) {
      return true;
    }
  };

  const getGame = (props) => {
    switch (props.dialogue[0].story) {
      case "RunningGame":
        return (
          boulderCheck(props, running) && (
            <RunningGame
              minigame={runningMini}
              percentage={running.runningPercent}
            />
          )
        );
        break;

      case "ShiftingSands":
        return (
          sandCheck(props, arrowButtons, round) && (
            <ShiftingSands
              minigame={sandMini}
              pattern={sand}
              pressed={arrowButtons}
              dialogue={props.dialogue}
              current={props.current}
              next={props.next}
              attempts={attempts}
              setAttempts={setAttempts}
            />
          )
        );
        break;

      default:
        return false;
    }
  };

  //renders multiple choices if props.dialogue is an array
  if (props.dialogue.length) {
    return (
      <>
        {getGame(props) || (
          <div className="dialogue-box">
            <p>
              <TypeWriter
                message={props.dialogue[0].story}
                key={props.dialogue[0].story}
              />
              {/* {props.dialogue[0].story} */}
            </p>
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
        )}
      </>
    );
  } else {
    //renders single path
    return (
      <div className="dialogue-box">
        <p>
          <TypeWriter
            message={props.dialogue.story}
            key={props.dialogue.story}
          />
          {/* {props.dialogue.story} */}
        </p>
        {endScene() ? (
          <Link className="link-map" to={`/scene/${Number(props.scene) + 1}`}>
            <button className="dialogue-buttons">Return to Map</button>
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
