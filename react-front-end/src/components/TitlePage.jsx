import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";

const TitlePage = () => {
  return (
    <div id="start-new-game">
      <img src="/assets/placeholderArt.png" alt="art" />
      <Link to={"/scene/1"} id="start-game">
        <button>New Game</button>
      </Link>
    </div>
  );
};

export default TitlePage;
