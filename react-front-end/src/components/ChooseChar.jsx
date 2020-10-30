import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";
import Character from "./Character";

const ChooseChar = (props) => {
  const colorChoices = [
    {
      color: "pink",
      name: "Penelope",
      info: "Likes cantaloupe",
    },
    {
      color: "blue",
      name: "Bruce",
      info: "Only drinks coffee at midnight",
    },
    {
      color: "brown",
      name: "Noodle",
      info: "Afraid of raw meats",
    },
    {
      color: "red",
      name: "",
      info: "town simpleton",
    },
    { color: "burgundy" },
    { color: "lime" },
    { color: "green" },
    { color: "teal" },
  ];

  const allCharacters = colorChoices.map((char, index) => {
    return (
      <Character
        key={index}
        color={char.color}
        name={char.name}
        info={char.info}
        chooseColor={props.setColor}
        currentColor={props.currentColor}
      />
    );
  });
  return (
    <div className="choose-character">
      <p className="choose">CHOOSE A CHARACTER</p>

      <div className="all-characters">{allCharacters}</div>

      <Link to={"/scene/1"} id="start-game">
        <button className="start-btn"></button>
      </Link>
    </div>
  );
};

export default ChooseChar;
