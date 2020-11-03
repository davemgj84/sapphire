import React from "react";
import { Link } from "react-router-dom";
import "../styles/OpeningScene.scss";
import TypeWriter from "./TypeWriter";

const OpeningScene = () => {
  const openingMessage =
    "You awake from a dream with a hunger for Doritos... You must make haste and travel to Zoomieville...";
  return (
    <div className="opening">
      <div className="opening-message-box">
        <p>
          <TypeWriter message={openingMessage} key={openingMessage} />
        </p>
      </div>
      <img src="/assets/night.png" alt="art" />
      <Link to={"/scene/1"} id="opening-start">
        <button>Begin Your Journey</button>
      </Link>
    </div>
  );
};

export default OpeningScene;
