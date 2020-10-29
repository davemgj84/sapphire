import React from "react";
import { Link } from "react-router-dom";
import "../styles/DialogueBox.scss";

export default function DialogueBox(props) {
  const endScene = () => {
    if (props.dialogue.next_dialogue_id === null) {
      console.log("HELLO");
      return true;
    }
  };

  //renders multiple choices if props.dialogue is an array
  if (props.dialogue.length) {
    return (
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
