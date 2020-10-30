import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";
import Character from "./Character";

const ChooseChar = (props) => {
  const colorChoices = [
    "pink",
    "blue",
    "red",
    "brown",
    "burgundy",
    "lime",
    "teal",
    "green",
  ];

  const allCharacters = colorChoices.map((color, index) => {
    return (
      <Character
        key={index}
        color={color}
        chooseColor={props.setColor}
        currentColor={props.currentColor}
      />
    );
  });
  return (
    <div className="choose-character">
      <p>CHOOSE A CHARACTER</p>

      <div class="all-characters">{allCharacters}</div>

      <Link to={"/scene/1"} id="start-game">
        <button>Begin</button>
      </Link>
    </div>
  );
};

export default ChooseChar;
