import React from "react";
import { Link } from "react-router-dom";
import "../styles/TitlePage.scss";

const TitlePage = (props) => {
  return (
    <div id="start-new-game">
      <img src="/assets/placeholderArt.png" alt="art" />
      <Link to={"/character"} id="start-game">
        <button>New Game</button>
      </Link>
    </div>
  );
};

export default TitlePage;
