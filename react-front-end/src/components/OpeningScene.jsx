import React from "react";
import { Link } from "react-router-dom";
import "../styles/OpeningScene.scss";
import TypeWriter from "./TypeWriter";

const OpeningScene = () => {
  const openingMessage =
    "This sleepy town might seem normal but the truth is, life as you know it is falling apart. The world is in peril and lately, you've been focusing on decisions within your control: Jen or Angelina? Edward or Jacob? NSYNC or Backstreet Boys? Fritos or Doritos?";
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
