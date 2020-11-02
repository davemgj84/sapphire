import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";
import Character from "./Character";

const ChooseChar = (props) => {
  const colorChoices = [
    {
      color: "pink",
      name: "Penelope",
      info: "Likes Cantaloupe",
    },
    {
      color: "blue",
      name: "James",
      info: "Does not respond to Jimmy",
    },
    {
      color: "brown",
      name: "Noodle",
      info: "Afraid of Raw Meats",
    },
    {
      color: "red",
      name: "Xanthadar",
      info: "Town Simpleton",
    },
    {
      color: "burgundy",
      name: "Steve Thompson",
      info: "Accountant",
    },
    {
      color: "lime",
      name: "Dano",
      info: "Medium Person Energy",
    },
    {
      color: "green",
      name: "Bruce",
      info: "Only Drinks Coffee at Midnight",
    },
    {
      color: "teal",
      name: "Genevieve",
      info: "Plays the Recorder",
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
        <button className="start-btn">Start Game</button>
      </Link>
    </div>
  );
};

export default ChooseChar;
