import React from "react";
import { Link } from "react-router-dom";
import "../styles/DialogueBox.scss";

export default function DialogueBox(props) {
  const endLength = (maxLength, currentIndex) => {
    if (maxLength - 1 === currentIndex) {
      return true;
    }
  };

  return (
    <div className="dialogue-box">
      {/* <p>{props.dialogue}</p>

      {endLength(props.length, props.index) ? (
        <Link
          to={`/scene/${Number(props.scene) + 1}`}
          className="dialogue-buttons"
        >
          <button>Return to Map</button>
        </Link>
      ) : (
        <button
          className="dialogue-buttons"
          // onClick={() => props.setIndex((prev) => prev + 1)}
        >
          Next
        </button>
      )} */}
    </div>
  );
}
