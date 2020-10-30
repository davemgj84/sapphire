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
      name: "Bill Murray",
      info: "Explorer",
    },
    {
      color: "brown",
      name: "Noodle",
      info: "Afraid of raw meats",
    },
    {
      color: "red",
      name: "Xanthadar",
      info: "Town simpleton",
    },
    {
      color: "burgundy",
      name: "",
      info: "",
    },
    {
      color: "lime",
      name: "Dano",
      info: "Medium person energy",
    },
    {
      color: "green",
      name: "Bruce",
      info: "Only drinks coffee at midnight",
    },
    {
      color: "teal",
      name: "",
      info: "",
    },
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
