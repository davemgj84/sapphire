import React from "react";
import "../styles/SceneStyles.scss";

export default function GameOver() {
  return (
    <div className="gameover">
      <iframe
        title="rick-roll"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <a href="/">
        <button className="play-again">Play Again</button>
      </a>
    </div>
  );
}
