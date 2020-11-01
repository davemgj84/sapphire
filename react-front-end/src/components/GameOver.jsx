import React from "react";
import "../styles/SceneStyles.scss";

export default function GameOver() {
  const changeBG = () => {
    document
      .getElementsByClassName("background5")[0]
      .addClass("background6")
      .removeClass("background5");
  };
  return (
    <div className="gameover">
      <a href="/">Play Again</a>
    </div>
  );
}
